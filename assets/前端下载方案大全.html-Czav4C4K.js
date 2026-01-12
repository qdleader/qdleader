import{_ as s,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(i,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="前端下载方案大全" tabindex="-1"><a class="header-anchor" href="#前端下载方案大全"><span>前端下载方案大全</span></a></h1><h2 id="一、a-标签下载" tabindex="-1"><a class="header-anchor" href="#一、a-标签下载"><span>一、a 标签下载</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">&quot;downloadEvt(&#39;http://download?name=HAP.pdf&#39;)&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    a标签下载</span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">downloadEvt</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> fileName <span class="token operator">=</span> <span class="token string">&quot;未知文件&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">;</span></span>
<span class="line">      el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;target&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;_blank&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token doc-comment comment">/**</span>
<span class="line">       * download的属性是HTML5新增的属性</span>
<span class="line">       * href属性的地址必须是非跨域的地址，如果引用的是第三方的网站或者说是前后端分离的项目(调用后台的接口)，这时download就会不起作用。</span>
<span class="line">       * 此时，如果是下载浏览器无法解析的文件，例如.exe,.xlsx..那么浏览器会自动下载，但是如果使用浏览器可以解析的文件，比如.txt,.png,.pdf....浏览器就会采取预览模式</span>
<span class="line">       * 所以，对于.txt,.png,.pdf等的预览功能我们就可以直接不设置download属性(前提是后端响应头的Content-Type: application/octet-stream，如果为application/pdf浏览器则会判断文件为 pdf ，自动执行预览的策略)</span>
<span class="line">       */</span></span>
<span class="line">      fileName <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;download&quot;</span><span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      el<span class="token punctuation">.</span>href <span class="token operator">=</span> url<span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      el<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">​<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"></span>
<span class="line">#### 优点：</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> 可以下载txt、png、pdf等类型文件 download的属性是<span class="token constant">HTML5</span>新增的属性</span>
<span class="line"><span class="token number">2.</span> <span class="token function">href属性的地址必须是非跨域的地址，如果引用的是第三方的网站或者说是前后端分离的项目</span><span class="token punctuation">(</span>调用后台的接口<span class="token punctuation">)</span>，这时download就会不起作用。</span>
<span class="line"><span class="token number">3.</span> 此时，如果是下载浏览器无法解析的文件，例如<span class="token punctuation">.</span>exe<span class="token punctuation">,</span><span class="token punctuation">.</span>xlsx<span class="token punctuation">.</span><span class="token punctuation">.</span>那么浏览器会自动下载，但是如果使用浏览器可以解析的文件，比如<span class="token punctuation">.</span>txt<span class="token punctuation">,</span><span class="token punctuation">.</span>png<span class="token punctuation">,</span><span class="token punctuation">.</span>pdf<span class="token operator">...</span><span class="token punctuation">.</span>浏览器就会采取预览模式；所以，对于<span class="token punctuation">.</span>txt<span class="token punctuation">,</span><span class="token punctuation">.</span>png<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token function">pdf等的预览功能我们就可以直接不设置download属性</span><span class="token punctuation">(</span>前提是后端响应头的Content<span class="token operator">-</span>Type<span class="token operator">:</span></span>
<span class="line">application<span class="token operator">/</span>octet<span class="token operator">-</span>stream，如果为application<span class="token operator">/</span>pdf浏览器则会判断文件为 pdf</span>
<span class="line">，自动执行预览的策略<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">#### 缺点：</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> a标签只能做<span class="token keyword">get</span>请求，所有url有长度限制</span>
<span class="line"><span class="token number">2.</span> 无法获取下载进度 无法在header中携带token做鉴权操作 跨域限制</span>
<span class="line"><span class="token number">3.</span> 无法判断接口是否返回成功 <span class="token constant">IE</span>兼容问题</span>
<span class="line"></span>
<span class="line">## 二、form标签下载</span>
<span class="line"></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">js</span>
<span class="line"></span>
<span class="line">&lt;body&gt;</span>
<span class="line">  &lt;button</span>
<span class="line">    onclick=&quot;inputDownloadEvt(&#39;get&#39;, &#39;http://download&#39;, &#39;name&#39;, &#39;HAP.pdf&#39;)&quot;&gt;</span>
<span class="line">    form标签下载</span>
<span class="line">  &lt;/button&gt;</span>
<span class="line">  &lt;script&gt;</span>
<span class="line">    /**</span>
<span class="line">     * @param {String} method - 请求方法get/post</span>
<span class="line">     * @param {String} url</span>
<span class="line">     * @param {String} paramsKey - 请求参数名</span>
<span class="line">     * @param {String} paramsValue - 请求参数值</span>
<span class="line">     */</span>
<span class="line">    function inputDownloadEvt(method, url, paramsKey, paramsValue) {</span>
<span class="line">      const form = document.createElement(&quot;form&quot;);</span>
<span class="line">      form.style.display = &quot;none&quot;;</span>
<span class="line">      form.setAttribute(&quot;target&quot;, &quot;_blank&quot;);</span>
<span class="line">      form.setAttribute(&quot;method&quot;, method);</span>
<span class="line">      form.setAttribute(&quot;action&quot;, url);</span>
<span class="line">      const input = document.createElement(&quot;input&quot;);</span>
<span class="line">      input.setAttribute(&quot;type&quot;, &quot;hidden&quot;);</span>
<span class="line">      // 对于get请求 最终会拼成http://192.168.66.183:13666/download?name=HAP.pdf</span>
<span class="line">      input.setAttribute(&quot;name&quot;, paramsKey);</span>
<span class="line">      input.setAttribute(&quot;value&quot;, paramsValue);</span>
<span class="line">      form.appendChild(input);</span>
<span class="line">      document.body.appendChild(form);</span>
<span class="line">      form.submit();</span>
<span class="line">      document.body.removeChild(form);</span>
<span class="line">    }</span>
<span class="line">  &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">​ 优点 兼容性好，不会出现URL长度限制问题 form标签get和post都可以 缺点</span>
<span class="line">无法获取下载进度 无法在header中携带token做鉴权操作</span>
<span class="line">无法直接下载浏览器可直接预览的文件类型（txt、png、pdf会直接预览）</span>
<span class="line">无法判断接口是否返回成功 三、window.open下载</span>
<span class="line">&lt;body&gt;</span>
<span class="line">  &lt;button</span>
<span class="line">    onclick=&quot;downloadEvt(&#39;http://192.168.66.183:13666/download?name=HAP.pdf&#39;)&quot;&gt;</span>
<span class="line">    window.open下载</span>
<span class="line">  &lt;/button&gt;</span>
<span class="line">  &lt;script&gt;</span>
<span class="line">    function downloadEvt(url) {</span>
<span class="line">      window.open(url, &quot;_self&quot;);</span>
<span class="line">    }</span>
<span class="line">  &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"></span>
<span class="line">####  优点</span>
<span class="line"></span>
<span class="line">简单方便直接</span>
<span class="line"></span>
<span class="line">#### 缺点</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> 会出现<span class="token constant">URL</span>长度限制问题 需要注意url编码问题</span>
<span class="line"><span class="token number">2.</span> 无法获取下载进度 无法在header中携带token做鉴权操作</span>
<span class="line"><span class="token number">3.</span> 无法直接下载浏览器可直接预览的文件类型（txt、png、pdf会直接预览）</span>
<span class="line"><span class="token number">4.</span> 无法判断接口是否返回成功</span>
<span class="line"></span>
<span class="line">## 四、iframe下载</span>
<span class="line"></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">js</span>
<span class="line"></span>
<span class="line">&lt;body&gt;</span>
<span class="line">  &lt;button</span>
<span class="line">    onclick=&quot;downloadEvt(&#39;http://192.168.66.183:13666/download?name=HAP.pdf&#39;)&quot;&gt;</span>
<span class="line">    iframe下载</span>
<span class="line">  &lt;/button&gt;</span>
<span class="line">  &lt;script&gt;</span>
<span class="line">    // 批量下载时，动态创建a标签，会始终只下载一个文件，改为动态创建iframe标签</span>
<span class="line">    function downloadEvt(url) {</span>
<span class="line">      const iframe = document.createElement(&quot;iframe&quot;);</span>
<span class="line">      iframe.style.display = &quot;none&quot;;</span>
<span class="line">      iframe.src = url;</span>
<span class="line">      document.body.appendChild(iframe);</span>
<span class="line">      setTimeout(() =&gt; {</span>
<span class="line">        document.body.removeChild(iframe);</span>
<span class="line">      }, 200);</span>
<span class="line">    }</span>
<span class="line">  &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">​ 优点 可以下载txt、png、pdf等类型文件 缺点 无法获取下载进度</span>
<span class="line">无法在header中携带token做鉴权操作 无法判断接口是否返回成功 兼容、性能差</span>
<span class="line">五、location.href下载</span>
<span class="line">&lt;body&gt;</span>
<span class="line">  &lt;button</span>
<span class="line">    onclick=&quot;downloadEvt(&#39;http://192.168.66.183:13666/download?name=HAP.pdf&#39;)&quot;&gt;</span>
<span class="line">    location.href下载</span>
<span class="line">  &lt;/button&gt;</span>
<span class="line">  &lt;script&gt;</span>
<span class="line">    function downloadEvt(url) {</span>
<span class="line">      window.location.href = url;</span>
<span class="line">    }</span>
<span class="line">  &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"></span>
<span class="line">​#### 优点</span>
<span class="line"> 简单方便直接 可以下载大文件</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> 会出现<span class="token constant">URL</span>长度限制问题</span>
<span class="line"><span class="token number">2.</span> 需要注意url编码问题 无法获取下载进度 无法在header中携带token做鉴权操作</span>
<span class="line"><span class="token number">3.</span> 无法直接下载浏览器可直接预览的文件类型（txt、png、pdf会直接预览）</span>
<span class="line"><span class="token number">4.</span> 无法判断接口是否返回成功</span>
<span class="line"></span>
<span class="line">## 六、ajax下载（Blob <span class="token operator">-</span> 利用Blob对象生成Blob <span class="token constant">URL</span>）</span>
<span class="line"></span>
<span class="line">如果后端需要做token验证，那么a、form、iframe、window<span class="token punctuation">.</span>open、location<span class="token punctuation">.</span>href都无法在header中携带token，这时候可以使用ajax来实现。</span>
<span class="line"></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">js</span>
<span class="line"></span>
<span class="line">&lt;body&gt;</span>
<span class="line">  &lt;button</span>
<span class="line">    onclick=&quot;downLoadAjaxEvt(&#39;get&#39;, &#39;http://download?name=HAP.pdf&#39;)&quot;&gt;</span>
<span class="line">    ajax下载</span>
<span class="line">  &lt;/button&gt;</span>
<span class="line">  &lt;script&gt;</span>
<span class="line">        function downloadEvt(url, fileName = &#39;未知文件&#39;) {</span>
<span class="line">          const el = document.createElement(&#39;a&#39;);</span>
<span class="line">          el.style.display = &#39;none&#39;;</span>
<span class="line">          el.setAttribute(&#39;target&#39;, &#39;_blank&#39;);</span>
<span class="line">         /**</span>
<span class="line">           * download的属性是HTML5新增的属性</span>
<span class="line">           * href属性的地址必须是非跨域的地址，如果引用的是第三方的网站或者说是前后端分离的项目(调用后台的接口)，这时download就会不起作用。</span>
<span class="line">           * 此时，如果是下载浏览器无法解析的文件，例如.exe,.xlsx..那么浏览器会自动下载，但是如果使用浏览器可以解析的文件，比如.txt,.png,.pdf....浏览器就会采取预览模式</span>
<span class="line">           * 所以，对于.txt,.png,.pdf等的预览功能我们就可以直接不设置download属性(前提是后端响应头的Content-Type: application/octet-stream，如果为application/pdf浏览器则会判断文件为 pdf ，自动执行预览的策略)</span>
<span class="line">           */</span>
<span class="line">          fileName &amp;&amp; el.setAttribute(&#39;download&#39;, fileName);</span>
<span class="line">          el.href = url;</span>
<span class="line">          console.log(el);</span>
<span class="line">          document.body.appendChild(el);</span>
<span class="line">          el.click();</span>
<span class="line">          document.body.removeChild(el);</span>
<span class="line">        };</span>
<span class="line">    ​</span>
<span class="line">        // 根据header里的contenteType转换请求参数</span>
<span class="line">        function transformRequestData(contentType, requestData) {</span>
<span class="line">          requestData = requestData || {};</span>
<span class="line">          if (contentType.includes(&#39;application/x-www-form-urlencoded&#39;)) {</span>
<span class="line">            // formData格式：key1=value1&amp;key2=value2，方式二：qs.stringify(requestData, {arrayFormat: &#39;brackets&#39;}) -- {arrayFormat: &#39;brackets&#39;}是对于数组参数的处理</span>
<span class="line">            let str = &#39;&#39;;</span>
<span class="line">            for (const key in requestData) {</span>
<span class="line">              if (Object.prototype.hasOwnProperty.call(requestData, key)) {</span>
<span class="line">                str += </span><span class="token template-punctuation string">\`</span></span>$<span class="token punctuation">{</span>key<span class="token punctuation">}</span><span class="token operator">=</span>$<span class="token punctuation">{</span>requestData<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&amp;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">;</span>
<span class="line">              }</span>
<span class="line">            }</span>
<span class="line">            return encodeURI(str.slice(0, str.length - 1));</span>
<span class="line">          } else if (contentType.includes(&#39;multipart/form-data&#39;)) {</span>
<span class="line">            const formData = new FormData();</span>
<span class="line">            for (const key in requestData) {</span>
<span class="line">              const files = requestData[key];</span>
<span class="line">              // 判断是否是文件流</span>
<span class="line">              const isFile = files ? files.constructor === FileList || (files.constructor === Array &amp;&amp; files[0].constructor === File) : false;</span>
<span class="line">              if (isFile) {</span>
<span class="line">                for (let i = 0; i &lt; files.length; i++) {</span>
<span class="line">                  formData.append(key, files[i]);</span>
<span class="line">                }</span>
<span class="line">              } else {</span>
<span class="line">                formData.append(key, files);</span>
<span class="line">              }</span>
<span class="line">            }</span>
<span class="line">            return formData;</span>
<span class="line">          }</span>
<span class="line">          // json字符串{key: value}</span>
<span class="line">          return Object.keys(requestData).length ? JSON.stringify(requestData) : &#39;&#39;;</span>
<span class="line">        }</span>
<span class="line">        /**</span>
<span class="line">         * ajax实现文件下载、获取文件下载进度</span>
<span class="line">         * @param {String} method - 请求方法get/post</span>
<span class="line">         * @param {String} url</span>
<span class="line">         * @param {Object} [params] - 请求参数，{name: &#39;文件下载&#39;}</span>
<span class="line">         * @param {Object} [config] - 方法配置</span>
<span class="line">         */</span>
<span class="line">         function downLoadAjaxEvt(method = &#39;get&#39;, url, params, config) {</span>
<span class="line">          const _method = method.toUpperCase();</span>
<span class="line">          const _config = Object.assign({</span>
<span class="line">            contentType: _method === &#39;GET&#39; ? &#39;application/x-www-form-urlencoded&#39; : &#39;application/json&#39;,  // 请求头类型</span>
<span class="line">            fileName: &#39;未知文件&#39;,                                        // 下载文件名(必填，若为空，下载下来都是txt格式)</span>
<span class="line">            async: true,                                                // 请求是否异步-true异步、false同步</span>
<span class="line">            token: &#39;token&#39;                                              // 用户token</span>
<span class="line">          }, config);</span>
<span class="line">    ​</span>
<span class="line">          const queryParams = transformRequestData(_config.contentType, params);</span>
<span class="line">          const _url = </span><span class="token template-punctuation string">\`</span></span>$<span class="token punctuation">{</span>url<span class="token punctuation">}</span>$<span class="token punctuation">{</span>_method <span class="token operator">===</span> <span class="token string">&#39;GET&#39;</span> <span class="token operator">&amp;&amp;</span> queryParams <span class="token operator">?</span> <span class="token string">&#39;?&#39;</span> <span class="token operator">+</span> queryParams <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">;</span>
<span class="line">    ​</span>
<span class="line">          const ajax = new XMLHttpRequest();</span>
<span class="line">          ajax.open(_method, _url, _config.async);</span>
<span class="line">          ajax.setRequestHeader(&#39;Authorization&#39;, _config.token);</span>
<span class="line">          ajax.setRequestHeader(&#39;Content-Type&#39;, _config.contentType);</span>
<span class="line">          // responseType若不设置，会导致下载的文件可能打不开</span>
<span class="line">          ajax.responseType = &#39;blob&#39;;</span>
<span class="line">          // 获取文件下载进度</span>
<span class="line">          ajax.addEventListener(&#39;progress&#39;, (progress) =&gt; {</span>
<span class="line">            const percentage = ((progress.loaded / progress.total) * 100).toFixed(2);</span>
<span class="line">            const msg = </span><span class="token template-punctuation string">\`</span></span>下载进度 $<span class="token punctuation">{</span>percentage<span class="token punctuation">}</span><span class="token operator">%</span><span class="token operator">...</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">;</span>
<span class="line">            console.log(msg);</span>
<span class="line">          });</span>
<span class="line">          ajax.onload = function () {</span>
<span class="line">            if (this.status === 200 || this.status === 304) {</span>
<span class="line">              // 通过FileReader去判断接口返回是json还是文件流</span>
<span class="line">              const fileReader = new FileReader();</span>
<span class="line">              fileReader.onloadend = (e) =&gt; {</span>
<span class="line">                if (this.getResponseHeader(&#39;content-type&#39;).includes(&#39;application/json&#39;)) {</span>
<span class="line">                  const result = JSON.parse(fileReader.result || &#39;{message: 服务器出现问题，请联系管理员}&#39;);</span>
<span class="line">                  alert(result.message);</span>
<span class="line">                } else {</span>
<span class="line">                  // 两种解码方式，区别自行百度: decodeURIComponent/decodeURI（主要获取后缀名，否则低版本浏览器会一律识别为txt，导致下载下来的都是txt）</span>
<span class="line">                  const _fileName = decodeURIComponent((this.getResponseHeader(&#39;content-disposition&#39;) || &#39;; filename=&quot;未知文件&quot;&#39;).split(&#39;;&#39;)[1].trim().slice(9));</span>
<span class="line">                  /**</span>
<span class="line">                  * Blob.type一个字符串，表明该 Blob 对象所包含数据的 MIME 类型。如果类型未知，则该值为空字符串。</span>
<span class="line">                  * 对于pdf：type为application/pdf  同时 a标签 不设置download属性, 可以直接预览</span>
<span class="line">                  */</span>
<span class="line">                  const blob = new Blob([this.response]);</span>
<span class="line">                  const href = URL.createObjectURL(blob);</span>
<span class="line">                  downloadEvt(href, _fileName);</span>
<span class="line">                  // 释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象</span>
<span class="line">                  URL.revokeObjectURL(href);</span>
<span class="line">                }</span>
<span class="line">              };</span>
<span class="line">              // 调用readAsText读取文件，少了readAsText将不会触发onloadend事件</span>
<span class="line">              fileReader.readAsText(this.response);</span>
<span class="line">            } else {</span>
<span class="line">              alert(&#39;服务器出现问题，请联系管理员&#39;);</span>
<span class="line">            }</span>
<span class="line">          };</span>
<span class="line">          // send(string): string：仅用于 POST 请求</span>
<span class="line">          ajax.send(queryParams);</span>
<span class="line">        }</span>
<span class="line">  &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"></span>
<span class="line">​ responseType responseType若不设置，会导致下载的文件可能打不开ajax<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&#39;blob&#39;</span><span class="token punctuation">;</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token number">1.</span>文件下载的接口存在返回失败的情况（例如：服务器连接不上、接口报错等），对于下载失败的情况我们需要在页面上弹出失败提示，而不是将失败信息写进文件里等用户打开，这时候可以使用FileReader去根据响应头里的content<span class="token operator">-</span>type判断接口是否返回成功；</span>
<span class="line"><span class="token number">2.</span>如果content<span class="token operator">-</span>type返回application<span class="token operator">/</span>json表示文件流返回失败</span>
<span class="line"></span>
<span class="line">如果是其他格式就认为文件流已经返回。</span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getResponseHeader</span><span class="token punctuation">(</span><span class="token string">&#39;content-disposition&#39;</span><span class="token punctuation">)</span></span>
<span class="line">后端返回的文件名称，主要获取后缀名，否则某些浏览器会一律识别为txt，导致下载下来的都是txt</span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;文件类型&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token number">1</span><span class="token punctuation">.</span>Blob<span class="token punctuation">.</span>type一个字符串，表明该 Blob 对象所包含数据的 <span class="token constant">MIME</span></span>
<span class="line">类型。如果类型未知，则该值为空字符串； <span class="token number">2.</span>对于pdf：type为application<span class="token operator">/</span>pdf 同时</span>
<span class="line">a标签 不设置download属性<span class="token punctuation">,</span> 可以直接预览</span>
<span class="line">axios中其实已经提供了获取文件上传和下载进度的事件，这里我使用的是原生ajax（axios雷同，只需要修改请求方法）。</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> 可以下载txt、png、pdf等类型文件 可以在header中携带token做鉴权操作</span>
<span class="line"><span class="token number">2.</span> 可以获取文件下载进度 可以判断接口是否返回成功</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> 兼容性问题，<span class="token constant">IE10</span>以下不可用</span>
<span class="line">将后端返回的文件流全部获取后才会下载</span>
<span class="line"></span>
<span class="line">## 七、ajax下载（Data <span class="token constant">URL</span> <span class="token operator">-</span> base64编码后的url）</span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>button</span>
<span class="line">    onclick<span class="token operator">=</span><span class="token string">&quot;downLoadAjaxEvt(&#39;get&#39;, &#39;http://download?name=HAP.pdf&#39;)&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token function">ajax下载</span><span class="token punctuation">(</span>base64<span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">downloadEvt</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> fileName <span class="token operator">=</span> <span class="token string">&#39;未知文件&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span></span>
<span class="line">          el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token doc-comment comment">/**</span>
<span class="line">           * download的属性是HTML5新增的属性</span>
<span class="line">           * href属性的地址必须是非跨域的地址，如果引用的是第三方的网站或者说是前后端分离的项目(调用后台的接口)，这时download就会不起作用。</span>
<span class="line">           * 此时，如果是下载浏览器无法解析的文件，例如.exe,.xlsx..那么浏览器会自动下载，但是如果使用浏览器可以解析的文件，比如.txt,.png,.pdf....浏览器就会采取预览模式</span>
<span class="line">           * 所以，对于.txt,.png,.pdf等的预览功能我们就可以直接不设置download属性(前提是后端响应头的Content-Type: application/octet-stream，如果为application/pdf浏览器则会判断文件为 pdf ，自动执行预览的策略)</span>
<span class="line">           */</span></span>
<span class="line">          fileName <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;download&#39;</span><span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          el<span class="token punctuation">.</span>href <span class="token operator">=</span> url<span class="token punctuation">;</span></span>
<span class="line">          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          el<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    ​</span>
<span class="line">        <span class="token comment">// 根据header里的contenteType转换请求参数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">transformRequestData</span><span class="token punctuation">(</span><span class="token parameter">contentType<span class="token punctuation">,</span> requestData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          requestData <span class="token operator">=</span> requestData <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>contentType<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// formData格式：key1=value1&amp;key2=value2，方式二：qs.stringify(requestData, {arrayFormat: &#39;brackets&#39;}) -- {arrayFormat: &#39;brackets&#39;}是对于数组参数的处理</span></span>
<span class="line">            <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> requestData<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>requestData<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                str <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>requestData<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">encodeURI</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>contentType<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;multipart/form-data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> requestData<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token keyword">const</span> files <span class="token operator">=</span> requestData<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">              <span class="token comment">// 判断是否是文件流</span></span>
<span class="line">              <span class="token keyword">const</span> isFile <span class="token operator">=</span> files <span class="token operator">?</span> files<span class="token punctuation">.</span>constructor <span class="token operator">===</span> FileList <span class="token operator">||</span> <span class="token punctuation">(</span>files<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array <span class="token operator">&amp;&amp;</span> files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> File<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">              <span class="token keyword">if</span> <span class="token punctuation">(</span>isFile<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> files<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                  formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> files<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> files<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">return</span> formData<span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          <span class="token comment">// json字符串{key: value}</span></span>
<span class="line">          <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>requestData<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>requestData<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token doc-comment comment">/**</span>
<span class="line">         * ajax实现文件下载、获取文件下载进度</span>
<span class="line">         * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">method</span> - 请求方法get/post</span>
<span class="line">         * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">url</span></span>
<span class="line">         * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">params</span><span class="token punctuation">]</span></span> - 请求参数，<span class="token punctuation">{</span>name: &#39;文件下载&#39;<span class="token punctuation">}</span></span>
<span class="line">         * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">config</span><span class="token punctuation">]</span></span> - 方法配置</span>
<span class="line">         */</span></span>
<span class="line">         <span class="token keyword">function</span> <span class="token function">downLoadAjaxEvt</span><span class="token punctuation">(</span>method <span class="token operator">=</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">const</span> _method <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">const</span> _config <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">contentType</span><span class="token operator">:</span> _method <span class="token operator">===</span> <span class="token string">&#39;GET&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 请求头类型</span></span>
<span class="line">            <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;未知文件&#39;</span><span class="token punctuation">,</span>                                       <span class="token comment">// 下载文件名(必填，若为空，下载下来都是txt格式)</span></span>
<span class="line">            <span class="token literal-property property">async</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                                               <span class="token comment">// 请求是否异步-true异步、false同步</span></span>
<span class="line">            <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">&#39;token&#39;</span>                                             <span class="token comment">// 用户token</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    ​</span>
<span class="line">          <span class="token keyword">const</span> queryParams <span class="token operator">=</span> <span class="token function">transformRequestData</span><span class="token punctuation">(</span>_config<span class="token punctuation">.</span>contentType<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">const</span> _url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>_method <span class="token operator">===</span> <span class="token string">&#39;GET&#39;</span> <span class="token operator">&amp;&amp;</span> queryParams <span class="token operator">?</span> <span class="token string">&#39;?&#39;</span> <span class="token operator">+</span> queryParams <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    ​</span>
<span class="line">          <span class="token keyword">const</span> ajax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          ajax<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>_method<span class="token punctuation">,</span> _url<span class="token punctuation">,</span> _config<span class="token punctuation">.</span>async<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          ajax<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">,</span> _config<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          ajax<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> _config<span class="token punctuation">.</span>contentType<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token comment">// responseType若不设置，会导致下载的文件可能打不开</span></span>
<span class="line">          ajax<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&#39;blob&#39;</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token comment">// 获取文件下载进度</span></span>
<span class="line">          ajax<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;progress&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">progress</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> percentage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>progress<span class="token punctuation">.</span>loaded <span class="token operator">/</span> progress<span class="token punctuation">.</span>total<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">下载进度 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>percentage<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          ajax<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token comment">// 通过FileReader去判断接口返回是json还是文件流</span></span>
<span class="line">              <span class="token keyword">const</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">              fileReader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">              fileReader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getResponseHeader</span><span class="token punctuation">(</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;服务器出现问题，请联系管理员&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token comment">// 两种解码方式，区别自行百度: decodeURIComponent/decodeURI（主要获取后缀名，否则某些浏览器会一律识别为txt，导致下载下来的都是txt）</span></span>
<span class="line">                  <span class="token keyword">const</span> _fileName <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getResponseHeader</span><span class="token punctuation">(</span><span class="token string">&#39;content-disposition&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;; filename=&quot;未知文件&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                  <span class="token comment">// 也可以用FileSaver（需提前引入https://github.com/eligrey/FileSaver.js）: saveAs(fileReader.result, _fileName);</span></span>
<span class="line">                  <span class="token function">downloadEvt</span><span class="token punctuation">(</span>fileReader<span class="token punctuation">.</span>result<span class="token punctuation">,</span> _fileName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;服务器出现问题，请联系管理员&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token comment">// send(string): string：仅用于 POST 请求</span></span>
<span class="line">          ajax<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>queryParams<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span></span>
<span class="line">​ fileSaver 网上介绍很多，可以自己百度下 优点 可以下载txt、png、pdf等类型文件</span>
<span class="line">可以在header中携带token做鉴权操作 可以获取文件下载进度 可以判断接口是否返回成功</span>
<span class="line">缺点 兼容性问题，<span class="token constant">IE10</span>以下不可用 将后端返回的文件流全部获取后才会下载</span>
<span class="line">八、大文件下载注意点 fileSaver</span>
<span class="line">批量下载时，总量不超过2G可以用下这个，但是每个浏览器允许下载的最大文件不一样<span class="token operator">~</span></span>
<span class="line"></span>
<span class="line">## ajax下载</span>
<span class="line"></span>
<span class="line">如果后端需要对下载接口做token鉴权，此时需要使用ajax获取文件流（第六、七点），可以了解下ajax文件下载原理。</span>
<span class="line">简单来说，文件下载依赖浏览器特性。前端获取到服务器端生成的字节流，此时数据是存在于js的内存中的，是不可以直接保存在本地的，利用Blob对象和window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span>createObjectURL对象生成一个虚拟的<span class="token constant">URL</span>地址，然后在利用浏览器的特性进行下载。</span>
<span class="line">因此对于ajax下载大文件时，会出现浏览器崩溃情况，此时可以考虑使用链接直接下载或使用分片下载</span>
<span class="line"></span>
<span class="line">## 链接下载</span>
<span class="line"></span>
<span class="line">链接下载需要后端一边去下载要打包的文件，一边把打包好的东西写入这个链接。存在的问题是，如果文件很大，那么这个链接需要一直保持，相当于这个接口一直开着没有结束；而且一旦中间出了什么问题，已经下载的东西也全部废了，因此推荐使用分片下载。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])])}const o=s(t,[["render",l]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%B0%8Ftip/%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7/%E6%96%87%E4%BB%B6%E7%B1%BB/%E5%89%8D%E7%AB%AF%E4%B8%8B%E8%BD%BD%E6%96%B9%E6%A1%88%E5%A4%A7%E5%85%A8.html","title":"前端下载方案大全","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端小tip/常用工具/文件类/前端下载方案大全.md"}');export{o as comp,u as data};
