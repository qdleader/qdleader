import{_ as s,c as a,a as p,o as t}from"./app-DFnxdJ0h.js";const e={};function o(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="wangeditor-中添加自定义-html-内容" tabindex="-1"><a class="header-anchor" href="#wangeditor-中添加自定义-html-内容"><span>wangEditor 中添加自定义 html 内容</span></a></h1><p>问题描述</p><p>wangEditor V5 版本是不支持自定义 html 的，他会把里面的 html 标签全部转化成别的标签，导致自定义的 html 内容无法显示出来。</p><p>解决方案 使用 wangEditor V4 版本</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><h3 id="编辑器的引入-vue2-v4-版本" tabindex="-1"><a class="header-anchor" href="#编辑器的引入-vue2-v4-版本"><span>编辑器的引入（Vue2+V4 版本）</span></a></h3><h4 id="_1-下载-这里我使用的是-npm-包管理器下载" tabindex="-1"><a class="header-anchor" href="#_1-下载-这里我使用的是-npm-包管理器下载"><span>1.下载，这里我使用的是 npm 包管理器下载</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">npm i wangeditor <span class="token operator">--</span>save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-在项目中引入-可以直接在代码中引入-或新建作为一个组件" tabindex="-1"><a class="header-anchor" href="#_2-在项目中引入-可以直接在代码中引入-或新建作为一个组件"><span>2.在项目中引入，可以直接在代码中引入，或新建作为一个组件</span></a></h4><h2 id="二、编辑器的配置" tabindex="-1"><a class="header-anchor" href="#二、编辑器的配置"><span>二、编辑器的配置</span></a></h2><p>首先要在 vue 生命周期的的挂载阶段创建编辑器的实例，中间配置相关选项，最后创建编辑器，代码如下:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>//给div盒子命名以引入编辑器 //这里是编辑器<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">E</span> <span class="token keyword">from</span> <span class="token string">&quot;wangeditor&quot;</span><span class="token punctuation">;</span> <span class="token comment">//导入编辑器</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">//保存this指针的目的是为了后续在editor作用域内能访问到全局作用域中的数据</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">E</span><span class="token punctuation">(</span><span class="token string">&quot;#editor&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建编辑器实例</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//以下是配置选项，可按需删改</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">;</span> <span class="token comment">//设置编辑器高度的代码</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>placeholder <span class="token operator">=</span></span>
<span class="line">      <span class="token string">&quot;请输入您的内容，最大字数1000，支持插入图片及调整排布&quot;</span><span class="token punctuation">;</span> <span class="token comment">//设置常驻内容</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>focus <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">//设置是否加载页面后就获取焦点</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>zIndex <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//设置编辑器的层级</span></span>
<span class="line">    <span class="token comment">// 配置菜单栏</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>menus <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;head&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;fontName&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;fontSize&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;lineHeight&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;backColor&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;justify&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;italic&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;underline&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;table&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 忽略粘贴过来的图片</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>pasteIgnoreImg <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 限制图片大小</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgMaxSize <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span> <span class="token comment">// 2M</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgMaxLength <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 一次最多上传 1 个图片</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgShowBase64 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 上传图片时可自定义传递一些参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgParams <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">userid</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userid<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 如果需要将参数拼接到 url 中，可再加上如下配置。</span></span>
<span class="line">    <span class="token comment">// this.editor.config.uploadImgParamsWithUrl = true</span></span>
<span class="line">    <span class="token comment">// 文件名</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadFileName <span class="token operator">=</span> <span class="token string">&quot;img&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 图片上传的服务器接口</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgServer <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>serverhttp<span class="token punctuation">;</span> <span class="token comment">//serverhttp是你自己的服务器地址</span></span>
<span class="line">    <span class="token comment">// timeout 即上传接口等待的最大时间，默认是 10 秒钟，可以自己修改。</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgTimeout <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 配置alt选项</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>showLinkImgAlt <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 隐藏插入网络图片的功能</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>showLinkImg <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 配置超链接</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>showLinkImgHref <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 可使用回调函数，对上传图片的不同阶段，做相应处理。代码示例如下。</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">linkImgCallback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">src<span class="token punctuation">,</span> alt<span class="token punctuation">,</span> href</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// console.log(that.coverphoto);</span></span>
<span class="line">      that<span class="token punctuation">.</span>coverphoto<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// console.log(this.coverphoto);</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// // 监听事件</span></span>
<span class="line">    <span class="token comment">// this.editor.config.onblur = function (newHtml) {</span></span>
<span class="line">    <span class="token comment">//     console.log(&#39;onblur&#39;, newHtml) // 获取最新的 html 内容</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line">    <span class="token comment">// this.editor.config.onfocus = function (newHtml) {</span></span>
<span class="line">    <span class="token comment">//     console.log(&#39;onfocus&#39;, newHtml) // 获取最新的 html 内容</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line">    <span class="token comment">// 创建编辑区域</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>editor<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 销毁编辑器  离开页面时必须销毁编辑器，否则会增加内存消耗</span></span>
<span class="line">    <span class="token comment">// this.editor.destroy()</span></span>
<span class="line">    <span class="token comment">// this.editor = null</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>v4 文档 https://www.wangeditor.com/v4/</p>`,13)]))}const i=s(e,[["render",o]]),u=JSON.parse('{"path":"/tool/%E5%AF%8C%E6%96%87%E6%9C%AC/wangEditor%E4%B8%AD%E6%B7%BB%E5%8A%A0%E8%87%AA%E5%AE%9A%E4%B9%89html%E5%86%85%E5%AE%B9.html","title":"wangEditor 中添加自定义 html 内容","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"tool/富文本/wangEditor中添加自定义html内容.md"}');export{i as comp,u as data};
