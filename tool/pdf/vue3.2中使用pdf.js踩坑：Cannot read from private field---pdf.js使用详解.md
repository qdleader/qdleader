# vue3.2中使用pdf.js踩坑：Cannot read from private field---pdf.js使用详解

vue3.2+vite+ts，现在打算使用pdf.js库来加载预览pdf文件

引入后控制台报错，报错内容翻译过来是：
Cannot read from private field读不到私有变量。

Cannot read from private field

    
    
    
    
1
1
经排查是pdfDoc.getPage这里出了了问题：
和vue3的proxy有关，

vue2是通过defineProperty来监听数据的改变和读取，
vue3是通过proxy来改变数据的。
但是在pdfjs-dist源码中，做了一个拦截校验，校验内容就是当前传入的参数，是否有obj对象，如果没有的话，直接抛出读不到私有变量错误。在之前老项目中，这样写是没有问题的：在pdfjs-dist拦截校验的时候，是一个MaskXXX（好像叫这个名字）的对象。在vue3中，pdfjs-dist拦截校验的时候，获取到的是一个proxy对象。

正确解法：pdfDoc.getPage的pdfDoc不要使用响应式写法！！！

```js
// 状态变量
let pdfDoc =  null as PDFDocumentProxy | null;
```


然后就可以啦




eg:

```js
<template>
  <div class="pdf-viewer">
    <div class="toolbar">
      <div class="tools" v-if="currentPage">
        <button @click="prevPage" :disabled="currentPage <= 1">上一页</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage >= totalPages">下一页</button>
        <button :class="{ active: isAnnotationMode }" @click="toggleAnnotationMode">标注模式</button>
      </div>
    </div>
    <div class="canvas-container" ref="canvasContainer">
      <canvas ref="pdfCanvas" id="pdfCanvas"></canvas>
      <canvas
        ref="annotationCanvas"
        id="annotationCanvas"
        v-show="isAnnotationMode"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
      ></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue';
import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';

// 定义props
interface Props {
  pdfData?: ArrayBuffer | string; // 可以是二进制数据或URL
}

const props = defineProps<Props>();

// 初始化 PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).href;

// 状态变量
let pdfDoc =  null as PDFDocumentProxy | null;
const currentPage = ref<number>(0);
const totalPages = ref<number>(0);
const scale = ref(1.5);
const isAnnotationMode = ref(false);
const isDrawing = ref(false);

// DOM 引用
const pdfCanvas = ref<HTMLCanvasElement | null>(null);
const annotationCanvas = ref<HTMLCanvasElement | null>(null);
const canvasContainer = ref<HTMLDivElement | null>(null);

// 绘制状态
let lastX = 0;
let lastY = 0;

// 监听pdfData变化
watch(() => props.pdfData, async (newValue) => {
  if (newValue) {
    await loadPDF(newValue);
  }
}, { immediate: true });

// 加载PDF文件
async function loadPDF(data: ArrayBuffer | string) {
  try {
    const loadingTask = pdfjsLib.getDocument(data);
    pdfDoc = await loadingTask.promise;
    totalPages.value = pdfDoc.numPages;
    currentPage.value = 1;
    await renderPage(1);
  } catch (error) {
    console.error('加载PDF文件失败:', error);
    // throw new Error(`PDF加载失败: ${error.message}`);
  }
}

// 渲染PDF页面
async function renderPage(pageNum: number) {
  if (!pdfDoc || !pdfCanvas.value) return;

  const page = await pdfDoc.getPage(pageNum);
  const viewport = page.getViewport({ scale: scale.value });

  // 设置PDF画布
  pdfCanvas.value.height = viewport.height;
  pdfCanvas.value.width = viewport.width;
  const context = pdfCanvas.value.getContext('2d');

  if (!context) return;

  // 渲染PDF
  await page.render({
    canvasContext: context,
    viewport: viewport
  }).promise;

  // 设置标注画布大小
  if (annotationCanvas.value) {
    annotationCanvas.value.width = viewport.width;
    annotationCanvas.value.height = viewport.height;
  }
}

// 页面导航
async function prevPage() {
  if (currentPage.value <= 1) return;
  currentPage.value--;
  await renderPage(currentPage.value);
}

async function nextPage() {
  if (!pdfDoc || currentPage.value >= pdfDoc.numPages) return;
  currentPage.value++;
  await renderPage(currentPage.value);
}

// 标注功能
function toggleAnnotationMode() {
  isAnnotationMode.value = !isAnnotationMode.value;
}

function startDrawing(event: MouseEvent) {
  if (!isAnnotationMode.value || !annotationCanvas.value) return;
  isDrawing.value = true;
  const rect = annotationCanvas.value.getBoundingClientRect();
  lastX = event.clientX - rect.left;
  lastY = event.clientY - rect.top;
}

function draw(event: MouseEvent) {
  if (!isDrawing.value || !isAnnotationMode.value || !annotationCanvas.value) return;
  
  const context = annotationCanvas.value.getContext('2d');
  if (!context) return;

  const rect = annotationCanvas.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  context.beginPath();
  context.strokeStyle = '#ff0000';
  context.lineWidth = 2;
  context.moveTo(lastX, lastY);
  context.lineTo(x, y);
  context.stroke();

  lastX = x;
  lastY = y;
}

function stopDrawing() {
  isDrawing.value = false;
}
</script>

<style scoped>
.pdf-viewer {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 1px;
  height: 100vh;
  width: 100%;
}

.toolbar {
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
}

.tools {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.canvas-container {
  position: relative;
  overflow: auto;
  flex: 1;
  width: 100%;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}

#pdfCanvas {
  z-index: 1;
}

#annotationCanvas {
  z-index: 2;
  pointer-events: auto;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button.active {
  background: #e0e0e0;
}
</style>
```
