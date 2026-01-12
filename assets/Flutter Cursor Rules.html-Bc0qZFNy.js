import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const t={};function l(o,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="flutter-cursor-rules" tabindex="-1"><a class="header-anchor" href="#flutter-cursor-rules"><span>Flutter Cursor Rules</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">You are a senior Dart programmer <span class="token keyword">with</span> experience <span class="token keyword">in</span> the Flutter framework and a preference <span class="token keyword">for</span> clean programming and design patterns<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line"><span class="token operator">-</span> Write small classes <span class="token keyword">with</span> a single purpose<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Less than <span class="token number">200</span> instructions<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Less than <span class="token number">10</span> <span class="token keyword">public</span> methods<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Less than <span class="token number">10</span> properties<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line"></span>
<span class="line">### Exceptions</span>
<span class="line"></span>
<span class="line">​</span>
<span class="line"><span class="token operator">-</span> Use exceptions to handle errors you don&#39;t expect<span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">-</span> If you catch an exception<span class="token punctuation">,</span> it should be to<span class="token operator">:</span></span>
<span class="line">  <span class="token operator">-</span> Fix an expected problem<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Add context<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Otherwise<span class="token punctuation">,</span> use a global handler<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line"></span>
<span class="line">### Testing</span>
<span class="line"></span>
<span class="line">​</span>
<span class="line"><span class="token operator">-</span> Follow the Arrange<span class="token operator">-</span>Act<span class="token operator">-</span>Assert convention <span class="token keyword">for</span> tests<span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">-</span> Name test variables clearly<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Follow the convention<span class="token operator">:</span> inputX<span class="token punctuation">,</span> mockX<span class="token punctuation">,</span> actualX<span class="token punctuation">,</span> expectedX<span class="token punctuation">,</span> etc<span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">-</span> Write unit tests <span class="token keyword">for</span> each <span class="token keyword">public</span> <span class="token keyword">function</span><span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Use test doubles to simulate dependencies<span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">-</span> Except <span class="token keyword">for</span> third<span class="token operator">-</span>party dependencies that are not expensive to execute<span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">-</span> Write acceptance tests <span class="token keyword">for</span> each module<span class="token punctuation">.</span></span>
<span class="line">  <span class="token operator">-</span> Follow the Given<span class="token operator">-</span>When<span class="token operator">-</span>Then convention<span class="token punctuation">.</span></span>
<span class="line">​</span>
<span class="line"></span>
<span class="line">## Specific to Flutter</span>
<span class="line"></span>
<span class="line">​</span>
<span class="line"></span>
<span class="line">### Basic Principles</span>
<span class="line"></span>
<span class="line">​</span>
<span class="line"><span class="token operator">-</span> Use clean architecture</span>
<span class="line">  <span class="token operator">-</span> see modules <span class="token keyword">if</span> you need to organize code into modules</span>
<span class="line">  <span class="token operator">-</span> see controllers <span class="token keyword">if</span> you need to organize code into controllers</span>
<span class="line">  <span class="token operator">-</span> see services <span class="token keyword">if</span> you need to organize code into services</span>
<span class="line">  <span class="token operator">-</span> see repositories <span class="token keyword">if</span> you need to organize code into repositories</span>
<span class="line">  <span class="token operator">-</span> see entities <span class="token keyword">if</span> you need to organize code into entities</span>
<span class="line"><span class="token operator">-</span> Use repository pattern <span class="token keyword">for</span> data persistence</span>
<span class="line">  <span class="token operator">-</span> see cache <span class="token keyword">if</span> you need to cache data</span>
<span class="line"><span class="token operator">-</span> Use controller pattern <span class="token keyword">for</span> business logic <span class="token keyword">with</span> Riverpod</span>
<span class="line"><span class="token operator">-</span> Use Riverpod to manage state</span>
<span class="line">  <span class="token operator">-</span> see keepAlive <span class="token keyword">if</span> you need to keep the state alive</span>
<span class="line"><span class="token operator">-</span> Use freezed to manage <span class="token constant">UI</span> states</span>
<span class="line"><span class="token operator">-</span> Controller always takes methods <span class="token keyword">as</span> input and updates the <span class="token constant">UI</span> state that effects the <span class="token constant">UI</span></span>
<span class="line"><span class="token operator">-</span> Use getIt to manage dependencies</span>
<span class="line">  <span class="token operator">-</span> Use singleton <span class="token keyword">for</span> services and repositories</span>
<span class="line">  <span class="token operator">-</span> Use factory <span class="token keyword">for</span> use cases</span>
<span class="line">  <span class="token operator">-</span> Use lazy singleton <span class="token keyword">for</span> controllers</span>
<span class="line"><span class="token operator">-</span> Use AutoRoute to manage routes</span>
<span class="line">  <span class="token operator">-</span> Use extras to pass data between pages</span>
<span class="line"><span class="token operator">-</span> Use extensions to manage reusable code</span>
<span class="line"><span class="token operator">-</span> Use ThemeData to manage themes</span>
<span class="line"><span class="token operator">-</span> Use AppLocalizations to manage translations</span>
<span class="line"><span class="token operator">-</span> Use constants to manage constants values</span>
<span class="line"><span class="token operator">-</span> When a widget tree becomes too deep<span class="token punctuation">,</span> it can lead to longer build times and increased memory usage<span class="token punctuation">.</span> Flutter needs to traverse the entire tree to render the <span class="token constant">UI</span><span class="token punctuation">,</span> so a flatter structure improves efficiency</span>
<span class="line"><span class="token operator">-</span> <span class="token constant">A</span> flatter widget structure makes it easier to understand and modify the code<span class="token punctuation">.</span> Reusable components also facilitate better code organization</span>
<span class="line"><span class="token operator">-</span> Avoid Nesting Widgets Deeply <span class="token keyword">in</span> Flutter<span class="token punctuation">.</span> Deeply nested widgets can negatively impact the readability<span class="token punctuation">,</span> maintainability<span class="token punctuation">,</span> and performance <span class="token keyword">of</span> your Flutter app<span class="token punctuation">.</span> Aim to <span class="token keyword">break</span> down complex widget trees into smaller<span class="token punctuation">,</span> reusable components<span class="token punctuation">.</span> This not only makes your code cleaner but also enhances the performance by reducing the build complexity</span>
<span class="line"><span class="token operator">-</span> Deeply nested widgets can make state management more challenging<span class="token punctuation">.</span> By keeping the tree shallow<span class="token punctuation">,</span> it becomes easier to manage state and pass data between widgets</span>
<span class="line"><span class="token operator">-</span> Break down large widgets into smaller<span class="token punctuation">,</span> focused widgets</span>
<span class="line"><span class="token operator">-</span> Utilize <span class="token keyword">const</span> constructors wherever possible to reduce rebuilds</span>
<span class="line">​</span>
<span class="line"></span>
<span class="line">​</span>
<span class="line"><span class="token operator">-</span> Use the standard widget testing <span class="token keyword">for</span> flutter</span>
<span class="line"><span class="token operator">-</span> Use integration tests <span class="token keyword">for</span> each api module<span class="token punctuation">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const c=n(t,[["render",l]]),r=JSON.parse('{"path":"/tool/cursor/cursor%20rules/Flutter%20Cursor%20Rules.html","title":"Flutter Cursor Rules","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"tool/cursor/cursor rules/Flutter Cursor Rules.md"}');export{c as comp,r as data};
