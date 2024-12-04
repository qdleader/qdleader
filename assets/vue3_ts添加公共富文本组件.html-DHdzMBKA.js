import{_ as s,c as i,a,o as l}from"./app-CeraUqgt.js";const e={};function d(c,n){return l(),i("div",null,n[0]||(n[0]=[a(`<h1 id="vue3-ts添加公共富文本组件" tabindex="-1"><a class="header-anchor" href="#vue3-ts添加公共富文本组件"><span>vue3+ts添加公共富文本组件</span></a></h1><h2 id="vue3-ts添加公共富文本组件-1" tabindex="-1"><a class="header-anchor" href="#vue3-ts添加公共富文本组件-1"><span>vue3+ts添加公共富文本组件</span></a></h2><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm install wangeditor --save-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="新建一个editor-vue-的组件" tabindex="-1"><a class="header-anchor" href="#新建一个editor-vue-的组件"><span>新建一个editor.vue 的组件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;style scoped&gt;</span>
<span class="line">.part_right {</span>
<span class="line">    width: 100%;</span>
<span class="line">    background: #f2f2f2;</span>
<span class="line">    min-height: 100vh;</span>
<span class="line">}</span>
<span class="line">.list {</span>
<span class="line">    width:96%;</span>
<span class="line">    margin: 0 auto;</span>
<span class="line"></span>
<span class="line">    /* background: gray; */</span>
<span class="line">    padding-top: 50px;</span>
<span class="line">}</span>
<span class="line">.list ul li{</span>
<span class="line">    list-style-type: none;</span>
<span class="line">    display: flex;</span>
<span class="line">    border-bottom: 1px solid #e6e5e5;</span>
<span class="line">    min-height: 50px;</span>
<span class="line">    background: #d5d5d5;</span>
<span class="line">}</span>
<span class="line">.list ul li&gt;div{</span>
<span class="line">    flex: 1;</span>
<span class="line">    line-height: 50px;</span>
<span class="line">}</span>
<span class="line">.list ol li{</span>
<span class="line">    list-style-type: none;</span>
<span class="line">    display: flex;</span>
<span class="line">    border-bottom: 1px solid #e6e5e5;</span>
<span class="line">    min-height: 30px;</span>
<span class="line">}</span>
<span class="line">.list ol li&gt;div{</span>
<span class="line">    flex: 1;</span>
<span class="line">    line-height: 30px;</span>
<span class="line">}</span>
<span class="line">.flright {</span>
<span class="line">    float: right;</span>
<span class="line">    margin-right: 2%;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">&lt;div&gt;   </span>
<span class="line">        &lt;div className=&quot;shop&quot;&gt;</span>
<span class="line">            &lt;div className=&quot;text-area&quot; &gt;</span>
<span class="line">                &lt;div ref=&quot;editorElemMenu&quot;</span>
<span class="line">                    style=&quot;backgroundColor: &#39;#f1f1f1&#39;; border:&#39;1px solid #ccc&#39;&quot;</span>
<span class="line">                    className=&quot;editorElem-menu&quot;&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">                &lt;div style=&quot;height: 300;border: &#39;1px solid #ccc&#39;,borderTop: &#39;none&#39;&quot; ref=&quot;editorElemBody&quot; className=&quot;editorElem-body&quot;&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line"></span>
<span class="line">import { onMounted ,reactive,toRefs,defineComponent,ref} from &#39;vue&#39;</span>
<span class="line">import E from &#39;wangeditor&#39;</span>
<span class="line"></span>
<span class="line">interface DataProps {</span>
<span class="line">    editor: any;</span>
<span class="line">    editorContent: string</span>
<span class="line">    getContent:(ref?: any) =&gt; void</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">export default defineComponent({</span>
<span class="line">    name:&#39;Editor&#39;,</span>
<span class="line">     components: {</span>
<span class="line">    },</span>
<span class="line">    props: {</span>
<span class="line">        options: Object,</span>
<span class="line">        value: String,</span>
<span class="line">    },</span>
<span class="line">    setup(props, { emit }) {</span>
<span class="line">    const editorElemMenu = ref();</span>
<span class="line">    const editorElemBody = ref();</span>
<span class="line">    const data: DataProps = reactive({</span>
<span class="line">            editorContent: &#39;&#39;,</span>
<span class="line">            editor:{},</span>
<span class="line">            getContent:() =&gt; {</span>
<span class="line">                console.log(&quot;111&quot;,props)</span>
<span class="line">                data.editor.txt.html(props.value)</span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line">        onMounted(() =&gt; {</span>
<span class="line">            let _this = this;</span>
<span class="line">            const elemMenu = editorElemMenu.value;</span>
<span class="line">            const elemBody = editorElemBody.value;</span>
<span class="line">             data.editor = new E(elemMenu, elemBody)</span>
<span class="line">              // 使用 onchange 函数监听内容的变化，并实时更新到 state 中</span>
<span class="line">                    data.editor.config.onchange = (html: any) =&gt; {</span>
<span class="line">                        console.log(data.editor.txt.html())</span>
<span class="line">                         data.editorContent = data.editor.txt.html()</span>
<span class="line">                             // 向外部返回一个处理过的值</span>
<span class="line">                         emit(&#39;onEditor&#39;, data.editor.txt.html())</span>
<span class="line">                        emit(&#39;update:value&#39;, data.editor.txt.html())</span>
<span class="line">                    }</span>
<span class="line">                    data.editor.config.customUploadImg = function (files: any, insert: any ) {</span>
<span class="line">                          // files 是 input 中选中的文件列表insert 是获取图片 url 后，插入到编辑器的方法</span>
<span class="line">                          // let file;</span>
<span class="line">                          // if (files &amp;&amp; files.length) {</span>
<span class="line">                          //     file = files[0];</span>
<span class="line">                          // } else {</span>
<span class="line">                          //     return</span>
<span class="line">                          // }</span>
<span class="line">                          // 图片上传</span>
<span class="line">                          console.log(&quot;files1&quot;,files)</span>
<span class="line"></span>
<span class="line">                          const formData = new FormData();</span>
<span class="line">                          formData.append(&#39;file&#39;, files[0]);</span>
<span class="line">                          console.log(&quot;files&quot;,files,insert)</span>
<span class="line">                          // formData.append(&#39;Banners&#39;,{id:editorinfo.id,naviChildId:editorinfo.naviChildId})</span>
<span class="line">                      }</span>
<span class="line"></span>
<span class="line">                    data.editor.config.menus = [</span>
<span class="line">                        &#39;head&#39;,  // 标题</span>
<span class="line">                        &#39;bold&#39;,  // 粗体</span>
<span class="line">                        &#39;fontSize&#39;,  // 字号</span>
<span class="line">                        &#39;fontName&#39;,  // 字体</span>
<span class="line">                        &#39;italic&#39;,  // 斜体</span>
<span class="line">                        &#39;underline&#39;,  // 下划线</span>
<span class="line">                        &#39;strikeThrough&#39;,  // 删除线</span>
<span class="line">                        &#39;foreColor&#39;,  // 文字颜色</span>
<span class="line">                        &#39;backColor&#39;,  // 背景颜色</span>
<span class="line">                        &#39;link&#39;,  // 插入链接</span>
<span class="line">                        &#39;list&#39;,  // 列表</span>
<span class="line">                        &#39;justify&#39;,  // 对齐方式</span>
<span class="line">                        &#39;quote&#39;,  // 引用</span>
<span class="line">                        &#39;emoticon&#39;,  // 表情</span>
<span class="line">                        &#39;image&#39;,  // 插入图片</span>
<span class="line">                        &#39;table&#39;,  // 表格</span>
<span class="line">                        &#39;video&#39;,  // 插入视频</span>
<span class="line">                        &#39;code&#39;,  // 插入代码</span>
<span class="line">                        &#39;undo&#39;,  // 撤销</span>
<span class="line">                        &#39;redo&#39;  // 重复</span>
<span class="line">                    ]</span>
<span class="line">                    data.editor.config.uploadImgShowBase64 = true</span>
<span class="line">                    data.editor.create()</span>
<span class="line"></span>
<span class="line">                    // data.getContent()</span>
<span class="line">        })</span>
<span class="line">        const refData = toRefs(data);</span>
<span class="line">        return {</span>
<span class="line">            ...refData,</span>
<span class="line">            editorElemMenu,</span>
<span class="line">            editorElemBody</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用的组件" tabindex="-1"><a class="header-anchor" href="#调用的组件"><span>调用的组件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;style scoped&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">    &lt;div class=&quot;part_right&quot;&gt;   </span>
<span class="line">        &lt;Editor ref=&quot;Editor&quot; :value=&quot;content&quot; @onEditor=&quot;onEditor&quot;/&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line"></span>
<span class="line">import { onMounted ,reactive,toRefs,defineComponent,ref} from &#39;vue&#39;</span>
<span class="line">import Editor from &#39;@/components/tool/editor.vue&#39;</span>
<span class="line"></span>
<span class="line">interface DataProps {</span>
<span class="line">    content: string;</span>
<span class="line">    showBack:(ref?: any) =&gt; void</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">export default defineComponent({</span>
<span class="line">    name:&#39;about&#39;,</span>
<span class="line">     components: {</span>
<span class="line">         Editor</span>
<span class="line">    },</span>
<span class="line">    setup() {</span>
<span class="line">        const Editor = ref();</span>
<span class="line">        const data: DataProps = reactive({</span>
<span class="line">            content:&#39;1&#39;,</span>
<span class="line">            //获取富文本中的内容</span>
<span class="line">            onEditor:(value: string) =&gt; {</span>
<span class="line">                    console.log(&quot;父组件&quot;,value)</span>
<span class="line">            },</span>
<span class="line">            // 富文本回显</span>
<span class="line">            showBack:() =&gt; {</span>
<span class="line">                data.content = &#39;回显内容公众号qdleader&#39;</span>
<span class="line">                console.log(&quot; data.content&quot;, data.content)</span>
<span class="line">                setTimeout(() =&gt;{</span>
<span class="line">                    Editor.value.getContent()</span>
<span class="line">                })</span>
<span class="line"></span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line"></span>
<span class="line">        onMounted(() =&gt; {</span>
<span class="line">            data.showBack()</span>
<span class="line">        })</span>
<span class="line">        const refData = toRefs(data);</span>
<span class="line">        return {</span>
<span class="line">            ...refData,</span>
<span class="line">            Editor</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">})</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就完成可以在vue3加ts中使用 富文本啦</p><p>拓展。。</p><p>有的同学需要自定义上传图片的接口</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">data.editor.config.customUploadImg = function (files: any, insert: any ) {</span>
<span class="line">        // files 是 input 中选中的文件列表insert 是获取图片 url 后，插入到编辑器的方法</span>
<span class="line">        // let file;</span>
<span class="line">        // if (files &amp;&amp; files.length) {</span>
<span class="line">        //     file = files[0];</span>
<span class="line">        // } else {</span>
<span class="line">        //     return</span>
<span class="line">        // }</span>
<span class="line">        // 图片上传</span>
<span class="line">        console.log(&quot;files1&quot;,files)</span>
<span class="line"></span>
<span class="line">        const formData = new FormData();</span>
<span class="line">        formData.append(&#39;file&#39;, files[0]);</span>
<span class="line">        console.log(&quot;files&quot;,files,insert)</span>
<span class="line">        // formData.append(&#39;Banners&#39;,{id:editorinfo.id,naviChildId:editorinfo.naviChildId})</span>
<span class="line"></span>
<span class="line">        // 把请求你们服务器地址获得的图片链接，替换到下面src里面即可</span>
<span class="line">      data.editor.txt.append(&quot;&lt;img src=&#39;https://rmxgh-1305579889.cos.ap-beijing.myqcloud.com/img/64bec1a86509170772c19fc5f88d84e1.jpg&#39; /&gt;&quot;)</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const v=s(e,[["render",d],["__file","vue3_ts添加公共富文本组件.html.vue"]]),t=JSON.parse('{"path":"/vue3/vue3_ts%E6%B7%BB%E5%8A%A0%E5%85%AC%E5%85%B1%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BB%84%E4%BB%B6.html","title":"vue3+ts添加公共富文本组件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"vue3+ts添加公共富文本组件","slug":"vue3-ts添加公共富文本组件-1","link":"#vue3-ts添加公共富文本组件-1","children":[]},{"level":2,"title":"下载","slug":"下载","link":"#下载","children":[{"level":3,"title":"新建一个editor.vue 的组件","slug":"新建一个editor-vue-的组件","link":"#新建一个editor-vue-的组件","children":[]},{"level":3,"title":"调用的组件","slug":"调用的组件","link":"#调用的组件","children":[]}]}],"git":{"updatedTime":1733276255000,"contributors":[{"name":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}]},"filePathRelative":"vue3/vue3+ts添加公共富文本组件.md"}');export{v as comp,t as data};
