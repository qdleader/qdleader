import{_ as s,c as a,a as p,o as t}from"./app-DFnxdJ0h.js";const e={};function c(o,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="循环回调" tabindex="-1"><a class="header-anchor" href="#循环回调"><span>循环回调</span></a></h1><p>1.循环回调</p><p>现在是是这种情况，有两个接口，有一个接口需要用到另一个接口返回数组中的一个属性作为参数。</p><p>有同学说，那你直接用第一个接口返回的数组遍历调用第二个接口不就好啦。。，但是您呢个保证返回的顺序吗。</p><p>显然是无法保证的。。</p><p>那咋办。</p><p>来喽来喽-。-</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">        <span class="token function">moduleRecommend</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">uid</span><span class="token operator">:</span> uidPub</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;17、金刚区模块列表和首页显示模块列表&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>ret <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">let</span> <span class="token function-variable function">asyncF</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">courseList</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token literal-property property">course_type</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">//1音频 2视频</span></span>
<span class="line">                            <span class="token literal-property property">module_id</span><span class="token operator">:</span> item<span class="token punctuation">.</span>module_id<span class="token punctuation">,</span> <span class="token comment">//用户获取各模块课程列表</span></span>
<span class="line">                            <span class="token literal-property property">uid</span><span class="token operator">:</span> uidPub<span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">pageSize</span><span class="token operator">:</span> _this<span class="token punctuation">.</span>pageSize</span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res1</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span></span>
<span class="line">                                <span class="token string">&quot;17、金刚区模块列表和首页显示模块列表数组内容&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                                res1</span>
<span class="line">                            <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            item<span class="token punctuation">.</span>children <span class="token operator">=</span> res1<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token comment">// console.log(newArr1)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">                                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>index_list<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span></span>
<span class="line">                                        <span class="token string">&quot;res.data.index_list&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                                        res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>index_list</span>
<span class="line">                                    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                    _this<span class="token punctuation">.</span>homelist <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>index_list<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">                                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">22222</span><span class="token punctuation">,</span>_this<span class="token punctuation">.</span>homelist<span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>index_list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">await</span> <span class="token function">asyncF</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>index_list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const i=s(e,[["render",c]]),u=JSON.parse('{"path":"/%E9%A1%B9%E7%9B%AE%E4%B8%AD%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98/%E5%BE%AA%E7%8E%AF%E5%9B%9E%E8%B0%83.html","title":"循环回调","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"项目中遇到的问题/循环回调.md"}');export{i as comp,u as data};
