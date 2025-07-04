import{_ as s,c as a,a as i,o as l}from"./app-B--KPTI1.js";const e={};function t(r,n){return l(),a("div",null,n[0]||(n[0]=[i(`<p>#003- 快速排序</p><p>快排核心思想是 ：</p><p>选定一个基准x，将比x小的值放到左边，比x大的值放到右边。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">const partition = (arr, left, right) =&gt; {</span>
<span class="line">	let x = arr[left];</span>
<span class="line">	let i = left;</span>
<span class="line">	let j = right;</span>
<span class="line">	</span>
<span class="line">	while(i &lt; j) {</span>
<span class="line">		//先从前往后找小的，没找的的话一直继续</span>
<span class="line">			while( i &lt; j &amp;&amp; arr[j] &gt; x) {</span>
<span class="line">				j --;</span>
<span class="line">			}</span>
<span class="line">			//找到了，将值填入坑里面，a[j]又变成了坑</span>
<span class="line">			if(i &lt; j) {</span>
<span class="line">				a[i] = a[j];</span>
<span class="line">			}</span>
<span class="line">			</span>
<span class="line">			//然后从前往后找大的，没找到继续找。</span>
<span class="line">			while(i &lt; j &amp;&amp; arr[i] &lt; x) {</span>
<span class="line">				i ++;</span>
<span class="line">			}</span>
<span class="line">			//找到了，将值填入之前的坑里。</span>
<span class="line">			if(i &lt; j) {</span>
<span class="line">				a[j] = a[i]</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		//将基准值填入坑</span>
<span class="line">		a[i] = x;</span>
<span class="line">		return i;</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	const quickSort = (arr,left,right) =&gt; {</span>
<span class="line">		const length = arr.length;</span>
<span class="line">		const start = left || 0;</span>
<span class="line">		const end = right !== undefined ? right : length - 1;</span>
<span class="line">		</span>
<span class="line">		if(start &lt; end) {</span>
<span class="line">			const index = partition(arr, start, end;)</span>
<span class="line">			quickSort(arr, start, index - 1);//调整基准值左边</span>
<span class="line">			quickSort(arr,index + 1,end); //调整基准值右边</span>
<span class="line">		}</span>
<span class="line">		return arr;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">使用：</span>
<span class="line">const newArr = [2, 3, 1, 4, 6, 5, 9, 8, 7];</span>
<span class="line"></span>
<span class="line">// 测试下</span>
<span class="line">let result = quickSort(newArr);</span>
<span class="line">console.log(result);   // [1, 2, 3, 4, 5, 6, 7, 8, 9]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未完待续。。。</p><p>#快排算法2</p><p>算法参考某个元素值，将小于它的值放到左数组中，大于它的值放在右数组中。然后进行递归进行左右数组的操作。返回合并的数组就是已经排好顺序的数组了。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function quickSort(arr) {</span>
<span class="line">	if(arr.length &lt; = 1) {</span>
<span class="line">		return arr;</span>
<span class="line">	}</span>
<span class="line">	let leftArr = [];</span>
<span class="line">	let rightArr = [];</span>
<span class="line">	let q = arr[0];</span>
<span class="line">	</span>
<span class="line">	for(let i = 1; i &lt; arr.length; i ++) {</span>
<span class="line">		if(arr[i] &gt; q) {</span>
<span class="line">			rightArr.push(arr[i])</span>
<span class="line">		} else {</span>
<span class="line">			leftArr.push(arr[i])</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return [].concat(quickSort(leftArr),[q],quickSort(rightArr));</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">module.exports = quickSort;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="http://math.hws.edu/eck/jsdemo/sortlab.html" target="_blank" rel="noopener noreferrer">一个容易理解的快排动画</a></p>`,9)]))}const d=s(e,[["render",t]]),p=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S003-%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1751593802000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"3ed7ece53189e584b32f934a400de1f057911f25","time":1751593802000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(es6): 添加ES2025模式匹配文档示例"}]},"filePathRelative":"常见算法/S003-快速排序.md"}');export{d as comp,p as data};
