import{_ as s,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const t={};function l(o,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"></span>
<span class="line">#### js 变量名使用小驼峰命名</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token comment">// 推荐</span></span>
<span class="line"><span class="token keyword">const</span> productName <span class="token operator">=</span> <span class="token string">&#39;book&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 不推荐</span></span>
<span class="line"><span class="token keyword">const</span> product_name <span class="token operator">=</span> <span class="token string">&#39;book&#39;</span></span>
<span class="line"></span>
<span class="line">#### css 变量使用 <span class="token constant">BEM</span> 的命名规则</span>
<span class="line"></span>
<span class="line">html</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 推荐 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;card&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>h2 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;card__title&quot;</span><span class="token operator">&gt;</span>Welcome<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;card__text&quot;</span><span class="token operator">&gt;</span>This is a sample card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;card__button card__button--primary&quot;</span><span class="token operator">&gt;</span>Learn More<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">​</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 不推荐 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;card&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>h2 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;cardTitle&quot;</span><span class="token operator">&gt;</span>Welcome<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;cardText&quot;</span><span class="token operator">&gt;</span>This is a sample card<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;button button-primary&quot;</span><span class="token operator">&gt;</span>Learn More<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">#### 常量是用全部大写、并用下划线连接</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token comment">// 推荐</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">MAX_VALUE</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 不推荐</span></span>
<span class="line"><span class="token keyword">const</span> maxValue <span class="token operator">=</span> <span class="token number">100</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.3</span><span class="token number">.4</span> 函数命名语义化，采用动词前缀，can<span class="token operator">/</span>validate<span class="token operator">/</span>has<span class="token operator">/</span>find<span class="token operator">/</span>get<span class="token operator">/</span>set<span class="token operator">/</span>is 等</span>
<span class="line">js</span>
<span class="line"><span class="token comment">// 推荐◊</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">canEdit</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> user<span class="token punctuation">.</span>isAdmin<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 不推荐</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> user<span class="token punctuation">.</span>isAdmin<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">#### 二<span class="token punctuation">.</span> 代码结构和组织</span>
<span class="line"></span>
<span class="line">清晰的文件和文件夹结构： 项目的文件和文件夹结构是否有意义，易于理解</span>
<span class="line">规范的目录结构和文件命名可以让你更快的找到你需要的代码，并且可以让你更容易的维护和扩展。</span>
<span class="line"></span>
<span class="line">#### 推荐用法</span>
<span class="line"></span>
<span class="line">###### 按功能划分文件夹</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line">└── src</span>
<span class="line">    ├── assets                        <span class="token comment">// 存放项目内部静态资源</span></span>
<span class="line">    ├── components                    <span class="token comment">// 存放可复用的组件</span></span>
<span class="line">    │   ├── Button                    <span class="token comment">// Button组件</span></span>
<span class="line">    │   │   ├── Button<span class="token punctuation">.</span>js</span>
<span class="line">    │   │   └── button<span class="token punctuation">.</span>css</span>
<span class="line">    │   ├── Form                      <span class="token comment">// Form组件</span></span>
<span class="line">    │   │   ├── Form<span class="token punctuation">.</span>js</span>
<span class="line">    │   │   └── form<span class="token punctuation">.</span>css</span>
<span class="line">    │   └── <span class="token operator">...</span>                       <span class="token comment">// 其他组件</span></span>
<span class="line">    ├── pages                         <span class="token comment">// 存放页面</span></span>
<span class="line">    ├── services                      <span class="token comment">// 存放与后台交互的服务</span></span>
<span class="line">    ├── stores                        <span class="token comment">// 存放与状态管理相关的store</span></span>
<span class="line">    ├── utils                         <span class="token comment">// 存放工具函数</span></span>
<span class="line">    └──<span class="token operator">...</span></span>
<span class="line"></span>
<span class="line">###### 按业务划分文件夹</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line">└── src</span>
<span class="line">    ├── authentication                 <span class="token comment">// 认证模块</span></span>
<span class="line">    │   ├── components                 <span class="token comment">// 认证相关组件</span></span>
<span class="line">    │   ├── styles                     <span class="token comment">// 认证模块样式</span></span>
<span class="line">    │   └── <span class="token operator">...</span>                        <span class="token comment">// 其他认证模块文件</span></span>
<span class="line">    ├── dashboard                      <span class="token comment">// 仪表板模块</span></span>
<span class="line">    │   ├── components                 <span class="token comment">// 仪表板相关组件</span></span>
<span class="line">    │   ├── styles                     <span class="token comment">// 仪表板模块样式</span></span>
<span class="line">    │   └── <span class="token operator">...</span>                        <span class="token comment">// 其他仪表板模块文件</span></span>
<span class="line">    └── <span class="token operator">...</span>                            <span class="token comment">// 其他模块</span></span>
<span class="line"></span>
<span class="line">#### 不推荐用法</span>
<span class="line"></span>
<span class="line">使用一个文件夹承载所有文件</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line">└── src</span>
<span class="line">    ├── file1<span class="token punctuation">.</span>js</span>
<span class="line">    ├── file1<span class="token punctuation">.</span>css</span>
<span class="line">    ├── file2<span class="token punctuation">.</span>js</span>
<span class="line">    ├── file2<span class="token punctuation">.</span>css</span>
<span class="line">    ├── file3<span class="token punctuation">.</span>js</span>
<span class="line">    ├── file3<span class="token punctuation">.</span>css</span>
<span class="line">    ├── file4<span class="token punctuation">.</span>js</span>
<span class="line">    ├── file4<span class="token punctuation">.</span>css</span>
<span class="line">    ├── file5<span class="token punctuation">.</span>js</span>
<span class="line">    ├── file5<span class="token punctuation">.</span>css</span>
<span class="line">    ├── <span class="token operator">...</span></span>
<span class="line">    └── longListofFiles<span class="token punctuation">.</span>js</span>
<span class="line"></span>
<span class="line">###### 层次结构过于复杂</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line">└── src</span>
<span class="line">    ├── module1</span>
<span class="line">    │   ├── sub<span class="token operator">-</span>module1</span>
<span class="line">    │   │   ├── unnecessarilyLongFileName<span class="token punctuation">.</span>js</span>
<span class="line">    │   │   ├── unnecessarilyLongFileName2<span class="token punctuation">.</span>js</span>
<span class="line">    │   │   └── <span class="token operator">...</span></span>
<span class="line">    │   ├── unnecessarilyLongFileName<span class="token punctuation">.</span>js</span>
<span class="line">    │   ├── unnecessarilyLongFileName2<span class="token punctuation">.</span>js</span>
<span class="line">    │   └── <span class="token operator">...</span></span>
<span class="line">    ├── module2</span>
<span class="line">    │   ├── sub<span class="token operator">-</span>module2</span>
<span class="line">    │   │   ├── unnecessarilyLongFileName<span class="token punctuation">.</span>js</span>
<span class="line">    │   │   ├── unnecessarilyLongFileName2<span class="token punctuation">.</span>js</span>
<span class="line">    │   │   └── <span class="token operator">...</span></span>
<span class="line">    │   ├── unnecessarilyLongFileName<span class="token punctuation">.</span>js</span>
<span class="line">    │   ├── unnecessarilyLongFileName2<span class="token punctuation">.</span>js</span>
<span class="line">    │   └── <span class="token operator">...</span></span>
<span class="line">    └── unnecessarilyLongFileName<span class="token punctuation">.</span>js</span>
<span class="line"></span>
<span class="line">###### 命名无意义</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line">            └── src</span>
<span class="line">               ├── misc1</span>
<span class="line">               │   ├── <span class="token number">1</span><span class="token punctuation">.</span>js</span>
<span class="line">               │   ├── <span class="token number">1</span><span class="token punctuation">.</span>css</span>
<span class="line">               │   └── <span class="token number">1</span><span class="token punctuation">.</span>js</span>
<span class="line">               ├── misc2</span>
<span class="line">               │   └── <span class="token number">2</span><span class="token punctuation">.</span>js</span>
<span class="line">               └── <span class="token operator">...</span></span>
<span class="line"></span>
<span class="line">推荐命名方式</span>
<span class="line"></span>
<span class="line">文件夹名称其他可能的名称意义</span>
<span class="line">js</span>
<span class="line">src<span class="token operator">/</span>source<span class="token operator">/</span> <span class="token punctuation">,</span> app<span class="token operator">/</span> <span class="token punctuation">,</span> code<span class="token operator">/</span>源代码文件夹</span>
<span class="line"><span class="token keyword">public</span><span class="token operator">/</span><span class="token keyword">static</span><span class="token operator">/</span> <span class="token punctuation">,</span> assets_public<span class="token operator">/</span>静态资源文件夹，存放不经过编译的资源</span>
<span class="line">dist<span class="token operator">/</span>build<span class="token operator">/</span> <span class="token punctuation">,</span> output<span class="token operator">/</span> <span class="token punctuation">,</span> deploy<span class="token operator">/</span>打包输出目录</span>
<span class="line">assets<span class="token operator">/</span>resources<span class="token operator">/</span> <span class="token punctuation">,</span> media<span class="token operator">/</span> <span class="token punctuation">,</span> files<span class="token operator">/</span>存放项目所需的静态资源，如图片、字体等</span>
<span class="line">components<span class="token operator">/</span>widgets<span class="token operator">/</span> <span class="token punctuation">,</span> ui_components<span class="token operator">/</span>可复用的组件</span>
<span class="line">pages<span class="token operator">/</span>views<span class="token operator">/</span> <span class="token punctuation">,</span> screens<span class="token operator">/</span> <span class="token punctuation">,</span> layouts<span class="token operator">/</span>页面级组件，与路由一一对应</span>
<span class="line">styles<span class="token operator">/</span>css<span class="token operator">/</span> <span class="token punctuation">,</span> scss<span class="token operator">/</span> <span class="token punctuation">,</span> sass<span class="token operator">/</span>全局样式文件</span>
<span class="line">utils<span class="token operator">/</span>helpers<span class="token operator">/</span> <span class="token punctuation">,</span> tools<span class="token operator">/</span>工具类文件夹，存放一些辅助函数和工具类</span>
<span class="line">services<span class="token operator">/</span>api<span class="token operator">/</span> <span class="token punctuation">,</span> http<span class="token operator">/</span> <span class="token punctuation">,</span> network<span class="token operator">/</span>与后端通信的服务、<span class="token constant">API</span>请求等</span>
<span class="line">hooks<span class="token operator">/</span>custom_hooks<span class="token operator">/</span> <span class="token punctuation">,</span> react_hooks<span class="token operator">/</span>React自定义Hook函数</span>
<span class="line"></span>
<span class="line">constants<span class="token operator">/</span>constants_and_enums<span class="token operator">/</span> <span class="token punctuation">,</span> enums<span class="token operator">/</span>存放常量文件</span>
<span class="line">config<span class="token operator">/</span>settings<span class="token operator">/</span> <span class="token punctuation">,</span>configs<span class="token operator">/</span>项目配置文件tests<span class="token operator">/</span>specs<span class="token operator">/</span> <span class="token punctuation">,</span> unit_tests<span class="token operator">/</span> <span class="token punctuation">,</span> tests<span class="token operator">/</span>单元测试文件夹</span>
<span class="line"> docs<span class="token operator">/</span>documents<span class="token operator">/</span> <span class="token punctuation">,</span> guides<span class="token operator">/</span>项目文档n</span>
<span class="line"> ode_modules<span class="token operator">/</span>packages<span class="token operator">/</span> <span class="token punctuation">,</span> deps<span class="token operator">/</span>Node<span class="token punctuation">.</span>js模块依赖</span>
<span class="line"> build<span class="token operator">/</span>scripts<span class="token operator">/</span> <span class="token punctuation">,</span> webpack_config<span class="token operator">/</span>构建脚本及相关配置文件</span>
<span class="line"> <span class="token keyword">public</span><span class="token operator">/</span>static_files<span class="token operator">/</span> <span class="token punctuation">,</span> public_assets<span class="token operator">/</span>公共资源文件夹，存放不经过编译的资源</span>
<span class="line"> mocks<span class="token operator">/</span>fake_data<span class="token operator">/</span> <span class="token punctuation">,</span> test_data<span class="token operator">/</span>模拟数据，用于前端开发中的接口模拟</span>
<span class="line"> translations<span class="token operator">/</span>i18n<span class="token operator">/</span> <span class="token punctuation">,</span> localization<span class="token operator">/</span>国际化文件夹，存放多语言翻译文件</span>
<span class="line"> logs<span class="token operator">/</span>log_files<span class="token operator">/</span> <span class="token punctuation">,</span> log_reports<span class="token operator">/</span>存放日志文件</span>
<span class="line"></span>
<span class="line">#### 三<span class="token punctuation">.</span> 注释和文档</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> 是否提供了足够的注释</span>
<span class="line"><span class="token number">1.1</span> <span class="token literal-property property">文件注释</span><span class="token operator">:</span> 在每个组件文件的顶部添加文件注释，包括作者信息、创建时间、最后修改时间等。可以使用注释块或文档注释。</span>
<span class="line">js</span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@file</span> MyComponent.js</span>
<span class="line"> * <span class="token keyword">@description</span> This is a custom component for ...</span>
<span class="line"> * <span class="token keyword">@created</span> 2023-01-01</span>
<span class="line"> * <span class="token keyword">@last-modified</span> 2023-02-01</span>
<span class="line"> * <span class="token keyword">@author</span> John Doe</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.2</span> 组件注释： 在每个组件的定义上方添加注释，说明组件的作用、用法、参数等信息。</span>
<span class="line"></span>
<span class="line">js</span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * MyComponent - A custom component for ...</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@component</span></span>
<span class="line"> * <span class="token keyword">@example</span></span>
<span class="line"> <span class="token example">* <span class="token code language-javascript"><span class="token operator">&lt;</span>MyComponent prop1<span class="token operator">=</span><span class="token string">&quot;value1&quot;</span> prop2<span class="token operator">=</span><span class="token string">&quot;value2&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span></span></span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.3</span> 函数和方法注释： 在每个函数或方法的定义上方添加注释，包括函数的作用、参数说明、返回值等信息。</span>
<span class="line">js</span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Calculate the sum of two numbers.</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span> - The first number.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span> - The second number.</span>
<span class="line"> * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> The sum of a and b.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">addNumbers</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.4</span> <span class="token constant">TODO</span> 注释： 在需要添加功能或修复问题的地方添加 <span class="token constant">TODO</span> 注释，描述需要完成的任务，并在注释中留下相关的联系方式或参考信息。</span>
<span class="line">arduino复制代码<span class="token comment">// TODO: Implement error handling for edge case</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.5</span> <span class="token constant">BUG</span> 注释： 在发现 bug 但尚未修复的情况下，可以添加 <span class="token constant">BUG</span> 注释，描述问题，并留下相关信息。</span>
<span class="line">sql复制代码<span class="token comment">// BUG: This function crashes when input is null</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.6</span> fix注释： 刚修复的bug，可以添加注释，注明修复了什么问题。</span>
<span class="line">arduino复制代码<span class="token comment">// fix: xxx has been fixed</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.7</span> 重要提示： 对于特别重要或复杂的代码块，添加一些重要提示，帮助其他开发人员更好地理解代码。</span>
<span class="line">less复制代码<span class="token comment">// IMPORTANT: This algorithm has a time complexity of O(n^2), optimize if possible.</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.8</span> 版本历史： 在代码的关键变更处（如修复 bug、添加功能）添加注释，记录版本历史。</span>
<span class="line">arduino复制代码<span class="token comment">// v1.1.0 - Added new feature XYZ</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.9</span> 文档链接： 如果有相关的文档或在线资源，可以在注释中添加链接，方便开发人员查阅。</span>
<span class="line">arduino复制代码<span class="token comment">// See documentation for more details: https://example.com/docs</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.10</span> <span class="token literal-property property">代码片段引用</span><span class="token operator">:</span> 引用了其他开源项目的一段代码，在注释中声明代码来源。</span>
<span class="line">bash复制代码<span class="token comment">/*</span>
<span class="line">fork by https://github.com/ElemeFE/element/blob/dev/build/md-loader/index.js</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> 是否有清晰的<span class="token constant">README</span>文档，介绍项目的结构和用法？</span>
<span class="line"><span class="token number">2.1</span> 项目名称和描述： 在文件的顶部，明确项目的名称和简短描述。</span>
<span class="line">bash复制代码# 项目名称</span>
<span class="line">​</span>
<span class="line">一个简短的项目描述，概述项目的目标和用途。</span>
<span class="line"></span>
<span class="line"><span class="token number">2.2</span> 徽章： 如果适用，可以添加一些徽章，如npm下载量，当前版本号等，以提供更多信息。</span>
<span class="line">perl复制代码<span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token constant">NPM</span> version<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>img<span class="token punctuation">.</span>shields<span class="token punctuation">.</span>io<span class="token operator">/</span>npm<span class="token operator">/</span>v<span class="token operator">/</span>@kdcloudjs<span class="token operator">/</span>kdesign<span class="token operator">-</span>icons<span class="token punctuation">.</span>svg<span class="token operator">?</span>style<span class="token operator">=</span>flat<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token keyword">package</span><span class="token operator">/</span>@kdcloudjs<span class="token operator">/</span>kdesign<span class="token operator">-</span>icons<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token constant">NPM</span> downloads<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>img<span class="token punctuation">.</span>shields<span class="token punctuation">.</span>io<span class="token operator">/</span>npm<span class="token operator">/</span>dm<span class="token operator">/</span>@kdcloudjs<span class="token operator">/</span>kdesign<span class="token operator">-</span>icons<span class="token operator">?</span>style<span class="token operator">=</span>flat<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token keyword">package</span><span class="token operator">/</span>@kdcloudjs<span class="token operator">/</span>kdesign<span class="token operator">-</span>icons<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"> 徽章生成方法可以参考lpd<span class="token operator">-</span>ios<span class="token punctuation">.</span>github<span class="token punctuation">.</span>io<span class="token operator">/</span><span class="token number">2017</span><span class="token operator">/</span><span class="token number">05</span><span class="token operator">/</span><span class="token number">03</span><span class="token operator">/</span>…</span>
<span class="line"><span class="token number">2.3</span> 目录： 如果项目结构较为复杂，可以添加一个目录，列出主要文件和文件夹。</span>
<span class="line">scss复制代码## 目录</span>
<span class="line"><span class="token operator">-</span> <span class="token punctuation">[</span>docs<span class="token operator">/</span><span class="token punctuation">]</span><span class="token punctuation">(</span>docs<span class="token operator">/</span><span class="token punctuation">)</span> <span class="token operator">-</span> 项目文档</span>
<span class="line"><span class="token operator">-</span> <span class="token punctuation">[</span>src<span class="token operator">/</span><span class="token punctuation">]</span><span class="token punctuation">(</span>src<span class="token operator">/</span><span class="token punctuation">)</span> <span class="token operator">-</span> 源代码</span>
<span class="line"><span class="token operator">-</span> <span class="token punctuation">[</span>tests<span class="token operator">/</span><span class="token punctuation">]</span><span class="token punctuation">(</span>tests<span class="token operator">/</span><span class="token punctuation">)</span> <span class="token operator">-</span> 测试代码</span>
<span class="line">​</span>
<span class="line"></span>
<span class="line"><span class="token number">2.4</span> 安装说明： 提供项目的安装步骤，包括所需的依赖项和如何安装它们。</span>
<span class="line">shell复制代码## 安装</span>
<span class="line">​</span>
<span class="line"></span>
<span class="line">### 使用 npm 或 yarn 安装</span>
<span class="line"></span>
<span class="line">​</span>
<span class="line">$ npm install @kdcloudjs<span class="token operator">/</span>kdesign <span class="token operator">--</span>save</span>
<span class="line"></span>
<span class="line"># 或者</span>
<span class="line"></span>
<span class="line">$ yarn add @kdcloudjs<span class="token operator">/</span>kdesign</span>
<span class="line">​</span>
<span class="line"></span>
<span class="line"><span class="token number">2.5</span> 使用说明： 提供简单的使用示例或指导，包括必要的命令或配置信息。</span>
<span class="line">shell复制代码## 使用</span>
<span class="line">​</span>
<span class="line">运行以下命令启动项目：</span>
<span class="line">​</span>
<span class="line">$ npm start</span>
<span class="line"></span>
<span class="line">$ yarn start</span>
<span class="line">​</span>
<span class="line"></span>
<span class="line"><span class="token number">2.6</span> 贡献指南： 如果你希望其他人贡献到项目中，提供一些关于如何贡献的指南。</span>
<span class="line">ini复制代码## 贡献</span>
<span class="line">​</span>
<span class="line">如果你想为项目做出贡献，请查看<span class="token punctuation">[</span>贡献指南<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token constant">CONTRIBUTING</span><span class="token punctuation">.</span>md<span class="token punctuation">)</span>。</span>
<span class="line"></span>
<span class="line"><span class="token number">2.7</span> 许可证： 包含适用的许可证信息，以明确项目的使用条款。</span>
<span class="line">ini复制代码## 许可证</span>
<span class="line">​</span>
<span class="line">本项目基于 <span class="token punctuation">[</span><span class="token constant">MIT</span> 许可证<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token constant">LICENSE</span><span class="token punctuation">)</span> 发布。</span>
<span class="line"></span>
<span class="line"><span class="token number">2.8</span> 版本历史：记录项目的版本历史，包括每个版本的变更。</span>
<span class="line">diff复制代码​</span>
<span class="line"><span class="token operator">-</span> <span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">-</span> <span class="token function">初始发布</span> <span class="token punctuation">(</span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.9</span> 联系方式： 提供与项目相关的联系信息，如作者的电子邮件或项目的主页。</span>
<span class="line">perl复制代码## 联系</span>
<span class="line">​</span>
<span class="line">有任何问题或建议，请发送电子邮件至 author@example<span class="token punctuation">.</span>com。</span>
<span class="line"></span>
<span class="line"><span class="token number">2.10</span> 附加资源： 如果有相关的文档、示例、演示或其他资源，提供链接。</span>
<span class="line">markdown复制代码## 更多资源</span>
<span class="line">​</span>
<span class="line"><span class="token operator">-</span> <span class="token punctuation">[</span>项目文档<span class="token punctuation">]</span><span class="token punctuation">(</span>docs<span class="token operator">/</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">-</span> <span class="token punctuation">[</span>示例应用<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>example<span class="token punctuation">.</span>com<span class="token operator">/</span>demo<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.11</span> 贴心提示： 在文件底部，可以添加一些关于问题报告、建议和其他注意事项的贴心提示。</span>
<span class="line">less复制代码## 注意事项</span>
<span class="line">​</span>
<span class="line">如发现任何问题，请在 <span class="token punctuation">[</span>问题页面<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>yourusername<span class="token operator">/</span>yourproject<span class="token operator">/</span>issues<span class="token punctuation">)</span> 中报告。</span>
<span class="line"></span>
<span class="line"><span class="token number">3.</span> 是否有良好的<span class="token constant">API</span>文档，如果是一个可重用的库或组件？</span>
<span class="line"><span class="token number">3.1</span> 对于暴露出去的api需要列清楚使用方法，对于需要迭代版本的需注明版本号</span>
<span class="line">typescript复制代码<span class="token operator">|</span> 属性 <span class="token operator">|</span> 说明 <span class="token operator">|</span> 类型 <span class="token operator">|</span> 默认值 <span class="token operator">|</span> 可选值 <span class="token operator">|</span> 版本 <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> block <span class="token operator">|</span> 开启该属性按钮将撑满父元素 <span class="token operator">|</span> boolean <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">false</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">false</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> bordered <span class="token operator">|</span> 是否带边框 <span class="token operator">|</span> boolean <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">false</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> disabled <span class="token operator">|</span> 按钮禁用状态 <span class="token operator">|</span> boolean <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">false</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">false</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> ghost <span class="token operator">|</span> 幽灵属性，使按钮背景透明 <span class="token operator">|</span> boolean <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">false</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">false</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> loading <span class="token operator">|</span> 按钮加载状态（加载中的按钮将不能触发点击事件） <span class="token operator">|</span> boolean <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">false</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">false</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> shape <span class="token operator">|</span> 按钮形状 <span class="token operator">|</span> string <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&#39;&#39;</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&#39;&#39;</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">circle</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">round</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">none</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> size <span class="token operator">|</span> 按钮尺寸 <span class="token operator">|</span> string <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">middle</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">small</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">middle</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">large</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> type <span class="token operator">|</span> 按钮类型 <span class="token operator">|</span> string <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">second</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">second</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">primary</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ghost</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">text</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> onClick <span class="token operator">|</span> 点击按钮时的回调 <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">-</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">-</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> htmlType <span class="token operator">|</span> 设置 button 原生的 type 值 <span class="token operator">|</span> string <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">-</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">submit</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">button</span><span class="token template-punctuation string">\`</span></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">reset</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token number">1.0</span><span class="token number">.0</span> <span class="token operator">|</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.2</span> 暴露出去的api是否真实有效，尽可能都演示在demo中。</span>
<span class="line"><span class="token number">3.3</span> 演示demo规范</span>
<span class="line"></span>
<span class="line">演示demo需要对所使用的<span class="token constant">API</span>及组件默认行为和样式等进行尽可能详细的说明。避免让用户自己去推测，降低用户学习和使用成本。</span>
<span class="line">每个组件的第一个demo，应该是组件最基本的用法，即展示组件在不传参数或者传入最基本参数情况下的效果。后面的demo应该尽可能按照参数的使用频率来排序。</span>
<span class="line">每个demo所展示的<span class="token constant">API</span>应该尽量精简，尽量不要一个demo中展示多个<span class="token constant">API</span>的用法。</span>
<span class="line">当<span class="token constant">API</span>是枚举值时，demo中应尽量展示每个枚举值的效果。</span>
<span class="line">演示demo代码，组件的参数大于三个或单行过长时需要每个参数占用一行来展示，避免出现横向滚动条。</span>
<span class="line">一个标题尽量展示一个demo，避免一个标题中展示多个demo。</span>
<span class="line">boolean类型的参数，在demo中展示，设置为<span class="token boolean">true</span>的时候，不需要显式的设置为<span class="token boolean">true</span>，直接写参数名字即可。</span>
<span class="line"></span>
<span class="line"><span class="token number">4.</span> 是否更新了变更日志（Changelog）？</span>
<span class="line"><span class="token number">4.1</span> 同步更新相关文档。代码更新后有无更新日志记录，api文档，注释，<span class="token constant">README</span>等，保证代码与说明统一</span>
<span class="line"><span class="token number">4.2</span> 明确发布周期</span>
<span class="line">markdown复制代码#### 发布周期</span>
<span class="line">​</span>
<span class="line"><span class="token operator">-</span> 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）</span>
<span class="line"><span class="token operator">-</span> 次版本号：每月发布一个带有新特性的向下兼容的版本。</span>
<span class="line"><span class="token operator">-</span> 主版本号：含有破坏性更新和新特性，不在发布周期内。</span>
<span class="line"></span>
<span class="line"><span class="token number">4.3</span> issue一一对应。每一个问题的修复，后面都贴有对应的issue</span>
<span class="line">less复制代码## <span class="token punctuation">[</span><span class="token number">1.7</span><span class="token number">.13</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>compare<span class="token operator">/</span>v1<span class="token punctuation">.</span><span class="token number">7.12</span><span class="token operator">...</span>v1<span class="token punctuation">.</span><span class="token number">7.13</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">2023-06-02</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token operator">*</span> anchor</span>
<span class="line">  <span class="token operator">*</span> 纵向锚点增加背景色 fix <span class="token punctuation">[</span>#<span class="token number">360</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">360</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">*</span> modal</span>
<span class="line">  <span class="token operator">*</span> 修复maskClassName不生效 fix <span class="token punctuation">[</span>#<span class="token number">413</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">413</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">*</span> stepper</span>
<span class="line">  <span class="token operator">*</span> 修复大数字时自增或自减操作丢失精度 fix <span class="token punctuation">[</span>#<span class="token number">385</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">385</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">*</span> select</span>
<span class="line">  <span class="token operator">*</span> 多选时onChange第二个参数返回nodes数组 fix <span class="token punctuation">[</span>#<span class="token number">388</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">388</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">*</span> 修复单选初始化时设置value无行选中效果问题 fix <span class="token punctuation">[</span>#<span class="token number">387</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">387</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">*</span> tree</span>
<span class="line">  <span class="token operator">*</span> 多选时onChange第二个参数返回nodes数组 fix <span class="token punctuation">[</span>#<span class="token number">388</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">388</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">*</span> 修复单选初始化时设置value无行选中效果问题 fix <span class="token punctuation">[</span>#<span class="token number">387</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">387</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">*</span> 去除多选时行选中效果 fix <span class="token punctuation">[</span>#<span class="token number">401</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">401</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">*</span> tree<span class="token operator">-</span>select</span>
<span class="line">  <span class="token operator">*</span> 多选时onChange第二个参数返回nodes数组 fix <span class="token punctuation">[</span>#<span class="token number">388</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">388</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">*</span> 修复单选初始化时设置value无行选中效果问题 fix <span class="token punctuation">[</span>#<span class="token number">387</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">387</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">*</span> color<span class="token operator">-</span>picker</span>
<span class="line">  <span class="token operator">*</span> 新增颜色类型下拉面板选项背景色的design token <span class="token punctuation">[</span>#<span class="token number">386</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">386</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">*</span> 修复在窗口尺寸变化时首页退出登录的问题 <span class="token punctuation">[</span>#<span class="token number">399</span><span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>kdcloudone<span class="token operator">/</span>kdesign<span class="token operator">/</span>issues<span class="token operator">/</span><span class="token number">399</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">四<span class="token punctuation">.</span> 可读性和维护性</span>
<span class="line"><span class="token number">1.</span> 清晰的函数和组件： 函数和组件是否足够小，功能单一</span>
<span class="line">单一职责原则（Single Responsibility Principle）： 每个函数或方法应该只负责一个明确的任务或功能。这有助于确保函数的职责清晰，代码更易于理解和维护。</span>
<span class="line">javascript复制代码<span class="token comment">// 不好的例子</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">handleUserDataAndRenderUI</span><span class="token punctuation">(</span><span class="token parameter">userData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 处理用户数据</span></span>
<span class="line">  <span class="token comment">// 渲染 UI</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 好的例子</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">handleUserData</span><span class="token punctuation">(</span><span class="token parameter">userData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 处理用户数据</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">renderUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 渲染 UI</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span> 精简代码</span>
<span class="line"><span class="token number">2.1</span> 利用<span class="token constant">ES6</span>新增的语法</span>
<span class="line"><span class="token constant">ES6</span>引入了箭头函数、解构赋值、模板字符串等新语法，可以更加简洁地实现某些功能，减少代码的嵌套。例如使用箭头函数来代替常规函数的写法，使用解构赋值来快速提取需要的数据。</span>
<span class="line">ini复制代码<span class="token comment">// bad</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token keyword">const</span> add <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">number</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// bad</span></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> age <span class="token operator">=</span> user<span class="token punctuation">.</span>age<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> user<span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line">​</span>
<span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// bad</span></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> age <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.2</span> 利用函数</span>
<span class="line">将嵌套的代码块封装在一个函数中，避免代码的深度嵌套。这不仅有利于代码的可读性，还可以方便地对代码进行管理和维护。</span>
<span class="line">kotlin复制代码<span class="token comment">// bad</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">xxx</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.3</span> 利用条件语句</span>
<span class="line">使用<span class="token keyword">switch</span> 替换 多层级<span class="token keyword">if</span><span class="token operator">/</span><span class="token keyword">else</span></span>
<span class="line">kotlin复制代码<span class="token comment">// bad</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">      <span class="token keyword">break</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">      <span class="token keyword">break</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">      <span class="token keyword">break</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">      <span class="token keyword">break</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.4</span> 使用多态替换条件语句</span>
<span class="line">typescript复制代码<span class="token comment">// bad</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">calculate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">operator</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">​</span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>operator <span class="token operator">===</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    result <span class="token operator">=</span> a <span class="token operator">+</span> b</span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>operator <span class="token operator">===</span> <span class="token string">&#39;multiply&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    result <span class="token operator">=</span> a <span class="token operator">*</span> b</span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>operator <span class="token operator">===</span> <span class="token string">&#39;divide&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    result <span class="token operator">=</span> a <span class="token operator">/</span> b</span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>operator <span class="token operator">===</span> <span class="token string">&#39;subtract&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    result <span class="token operator">=</span> a <span class="token operator">-</span> b</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> result</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line">​</span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Add</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Multiply</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">*</span> b</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Divide</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">/</span> b</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Subtract</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">-</span> b</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">&#39;multiply&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Multiply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">&#39;divide&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Divide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">&#39;subtract&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Subtract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">calculate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">operator</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">  result <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>operator<span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">apply</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> result</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.5</span> 避免深度嵌套</span>
<span class="line">scss复制代码<span class="token comment">// 不好的例子</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>condition1<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>condition2<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition3<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 好的例子</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>condition1 <span class="token operator">&amp;&amp;</span> condition2 <span class="token operator">&amp;&amp;</span> condition3<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"></span>
<span class="line"><span class="token number">3.</span> 避免长函数和方法： 函数和方法是否过长，难以理解</span>
<span class="line"><span class="token number">3.1</span> 函数长度限制</span>
<span class="line">设置一个合理的函数长度限制。一般而言，函数不应该超过一屏幕的大小。如果函数变得太长，考虑将其拆分为多个小函数，每个函数执行一个特定的子任务。</span>
<span class="line">scss复制代码<span class="token comment">// 不好的例子</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">complexFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 长长的代码块</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 好的例子</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">helperFunction1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">helperFunction2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">complexFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">helperFunction1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">helperFunction2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.2</span> 提取共享代码</span>
<span class="line">如果发现函数中有一些通用的代码块被多次使用，考虑将这些代码块提取到单独的函数中，以便在不同的上下文中共享。</span>
<span class="line">php复制代码<span class="token comment">// bad</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">processUser</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">processAdmin</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">sharedCode</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">===</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">processUser</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">sharedCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">processAdmin</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">sharedCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">4.</span> 使用设计模式</span>
<span class="line"><span class="token number">4.1</span> 单例模式</span>
<span class="line">单例模式（Singleton Pattern）是一种创建型设计模式，它确保一个类只有一个实例，并提供一个全局访问点让程序能够访问该实例。单例模式通常用于全局配置、日志记录、数据库连接等场景。</span>
<span class="line">javascript复制代码<span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line">  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">5.</span> 避免全局变量和函数： 是否避免了在全局范围内声明变量和函数</span>
<span class="line">使用全局变量和函数可能会导致全局污染、命名冲突和代码耦合，以下方式不推荐使用：</span>
<span class="line"></span>
<span class="line">直接在全局范围内声明变量</span>
<span class="line">javascript复制代码<span class="token comment">// globalVariables.js</span></span>
<span class="line"><span class="token keyword">const</span> globalVariable1 <span class="token operator">=</span> <span class="token string">&#39;Global variable 1&#39;</span></span>
<span class="line"><span class="token keyword">const</span> globalVariable2 <span class="token operator">=</span> <span class="token string">&#39;Global variable 2&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">globalFunction1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Global function 1&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">globalFunction2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Global function 2&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">scss复制代码<span class="token comment">// main.js</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalVariable1<span class="token punctuation">)</span> <span class="token comment">// 直接在全局范围内使用全局变量</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalVariable2<span class="token punctuation">)</span></span>
<span class="line">​</span>
<span class="line"><span class="token function">globalFunction1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 直接在全局范围内调用全局函数</span></span>
<span class="line"><span class="token function">globalFunction2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">直接在原型上添加方法</span>
<span class="line">javascript复制代码Array<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">customMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I am a custom method on the Array prototype&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">全局函数和变量直接导致的命名冲突</span>
<span class="line">javascript复制代码<span class="token keyword">function</span> <span class="token function">utilityFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Utility function&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 在其他地方的代码</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">utilityFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Another utility function with the same name&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">避免使用全局变量和函数，可以采用以下方式来解决：</span>
<span class="line"></span>
<span class="line">模块化设计模式</span>
<span class="line">javascript复制代码<span class="token comment">// module.js</span></span>
<span class="line"><span class="token keyword">const</span> moduleVariable <span class="token operator">=</span> <span class="token string">&#39;Module variable&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">moduleFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Module function&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> moduleVariable<span class="token punctuation">,</span> moduleFunction <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">// main.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> moduleVariable<span class="token punctuation">,</span> moduleFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./module&#39;</span></span>
<span class="line">​</span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleVariable<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">moduleFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">立即执行函数表达式（<span class="token constant">IIFE</span>）</span>
<span class="line"><span class="token function">javascript复制代码</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> iifeVariable <span class="token operator">=</span> <span class="token string">&#39;IIFE variable&#39;</span></span>
<span class="line">​</span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">iifeFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;IIFE function&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line">  <span class="token comment">// 在这里可以使用 iifeVariable 和 iifeFunction</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 这里无法访问 iifeVariable 和 iifeFunction</span></span>
<span class="line"></span>
<span class="line">闭包</span>
<span class="line">javascript复制代码<span class="token comment">// closure.js</span></span>
<span class="line"><span class="token keyword">const</span> closureFunction <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> closureVariable <span class="token operator">=</span> <span class="token string">&#39;Closure variable&#39;</span></span>
<span class="line">​</span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">closureInnerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Closure inner function&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    variable<span class="token operator">:</span> closureVariable<span class="token punctuation">,</span></span>
<span class="line">    innerFunction<span class="token operator">:</span> closureInnerFunction<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">​</span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>closureFunction<span class="token punctuation">.</span>variable<span class="token punctuation">)</span> <span class="token comment">// 使用变量</span></span>
<span class="line">closureFunction<span class="token punctuation">.</span><span class="token function">innerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 使用函数</span></span>
<span class="line"></span>
<span class="line"><span class="token number">6.</span> 模块化设计： 代码是否被合理地模块化，减少耦合度</span>
<span class="line">不推荐用法</span>
<span class="line"></span>
<span class="line">单一模块负责多个不相关的功能</span>
<span class="line">javascript复制代码<span class="token comment">// module.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token parameter">userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 获取用户信息的逻辑</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateUserProfile</span><span class="token punctuation">(</span><span class="token parameter">userId<span class="token punctuation">,</span> newProfile</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 更新用户资料的逻辑</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">renderUserPage</span><span class="token punctuation">(</span><span class="token parameter">userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 渲染用户页面的逻辑</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">handlePageNavigation</span><span class="token punctuation">(</span><span class="token parameter">pageId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 处理页面导航的逻辑</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">直接在模块内创建依赖</span>
<span class="line">javascript复制代码<span class="token comment">// userModule.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getOrderDetails <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./orderModule&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token parameter">userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 获取用户信息的逻辑</span></span>
<span class="line">  <span class="token keyword">const</span> orderDetails <span class="token operator">=</span> <span class="token function">getOrderDetails</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">循环依赖</span>
<span class="line">javascript复制代码<span class="token comment">// moduleA.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> funcB <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./moduleB&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 使用 funcB</span></span>
<span class="line">  <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">// moduleB.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> funcA <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./moduleA&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 使用 funcA</span></span>
<span class="line">  <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">暴露不必要的全局变量</span>
<span class="line">javascript复制代码<span class="token keyword">const</span> unnecessaryGlobal <span class="token operator">=</span> <span class="token string">&#39;Unnecessary global variable&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>unnecessaryGlobal<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">直接操作 <span class="token constant">DOM</span></span>
<span class="line">javascript复制代码<span class="token keyword">function</span> <span class="token function">manipulateDOM</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;Manipulated content&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">推荐用法</span>
<span class="line"></span>
<span class="line">按功能划分模块</span>
<span class="line">javascript复制代码<span class="token comment">// userModule.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token parameter">userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 获取用户信息的逻辑</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">// orderModule.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getOrderDetails</span><span class="token punctuation">(</span><span class="token parameter">orderId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 获取订单详情的逻辑</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">// main.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getUserInfo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./userModule&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getOrderDetails <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./orderModule&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> orderDetails <span class="token operator">=</span> <span class="token function">getOrderDetails</span><span class="token punctuation">(</span><span class="token number">456</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">使用依赖注入</span>
<span class="line">arduino复制代码<span class="token comment">// userModule.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token parameter">userId<span class="token punctuation">,</span> logger</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 获取用户信息的逻辑</span></span>
<span class="line">  logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Fetching user info&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">// loggerModule.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">log</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">// main.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getUserInfo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./userModule&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createLogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./loggerModule&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> logger<span class="token punctuation">)</span> <span class="token comment">// 依赖注入</span></span>
<span class="line"></span>
<span class="line">发布<span class="token operator">-</span>订阅模式</span>
<span class="line">scss复制代码<span class="token comment">// eventBus.js</span></span>
<span class="line"><span class="token keyword">const</span> subscribers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>subscribers<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    subscribers<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  subscribers<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">publish</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>subscribers<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    subscribers<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">// userService.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> publish <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./eventBus&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateUserProfile</span><span class="token punctuation">(</span><span class="token parameter">userId<span class="token punctuation">,</span> newProfile</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 更新用户资料的逻辑</span></span>
<span class="line">  <span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;userProfileUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> userId<span class="token punctuation">,</span> newProfile <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">// userModule.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> subscribe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./eventBus&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&#39;userProfileUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 处理用户资料更新的逻辑</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">五<span class="token punctuation">.</span> 错误处理和边界情况</span>
<span class="line"><span class="token number">1.</span> 是否有适当的错误处理机制，避免未处理的异常</span>
<span class="line">统一接口请求报错处理、函数运行报错使用 <span class="token keyword">try</span><span class="token operator">/</span>catch <span class="token function">包装、框架自带的处理</span><span class="token punctuation">(</span>react<span class="token punctuation">)</span></span>
<span class="line"><span class="token number">1.1</span> 使用 Axios 进行网络请求，可以使用拦截器来处理请求和响应，以及捕获错误</span>
<span class="line">javascript复制代码<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 请求拦截器</span></span>
<span class="line">axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 在请求发送前可以进行一些处理</span></span>
<span class="line">    <span class="token keyword">return</span> config<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 处理请求错误</span></span>
<span class="line">    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 响应拦截器</span></span>
<span class="line">axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 在响应之前可以进行一些处理</span></span>
<span class="line">    <span class="token keyword">return</span> response<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 处理响应错误</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 服务器返回错误状态码</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Request failed with status:&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>request<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 请求未收到响应</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;No response received for the request.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 其他错误</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error in request:&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line">    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.2</span> 在函数内使用 <span class="token keyword">try</span><span class="token operator">/</span>catch 包装可以捕获函数执行过程中的错误，防止错误导致整个应用崩溃</span>
<span class="line">vbnet复制代码<span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 可能出错的代码</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;An error occurred:&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.3</span> 在 React 中，可以使用错误边界（Error Boundaries）来捕获组件树中任何位置的 JavaScript 错误，并记录这些错误，同时展示备用 <span class="token constant">UI</span></span>
<span class="line">javascript复制代码<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 错误边界组件</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ErrorBoundary</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>hasError<span class="token punctuation">,</span> setHasError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>errorInfo<span class="token punctuation">,</span> setErrorInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line">  <span class="token comment">// 捕获 JavaScript 错误</span></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">handleError</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> errorInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setHasError</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">setError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">setErrorInfo</span><span class="token punctuation">(</span>errorInfo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line">    <span class="token comment">// 添加错误处理器</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> handleError<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line">    <span class="token comment">// 移除错误处理器（清理工作）</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> handleError<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 空依赖数组表示只在组件挂载和卸载时执行</span></span>
<span class="line">​</span>
<span class="line">  <span class="token comment">// 渲染备用 UI 或正常子组件</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>发生错误：<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>error <span class="token operator">&amp;&amp;</span> error<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>组件树位置：<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>pre<span class="token operator">&gt;</span><span class="token punctuation">{</span>errorInfo <span class="token operator">&amp;&amp;</span> errorInfo<span class="token punctuation">.</span>componentStack<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>pre<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> children<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token operator">&lt;</span>ErrorBoundary<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>ErrorBoundary<span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span> 是否考虑了边界情况和异常输入</span>
<span class="line"><span class="token number">2.1</span> 特殊字符输入渲染</span>
<span class="line">默认属性值： 在组件定义中，为属性设置默认值，以防止在没有提供必要属性时出现错误</span>
<span class="line">javascript复制代码<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> myProp <span class="token operator">=</span> <span class="token string">&quot;Default Value&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">空值合并操作符：空值合并操作符（<span class="token operator">??</span>）只在左侧的值为 <span class="token keyword">null</span> 或 <span class="token keyword">undefined</span> 时使用右侧的值。而逻辑或运算符（<span class="token operator">||</span>）运算符在左侧值为假值时（如空字符串、<span class="token number">0</span>、<span class="token boolean">false</span>、<span class="token number">NaN</span>、<span class="token keyword">null</span>、<span class="token keyword">undefined</span>）也会选择右侧的值， 在一些场景需要针对某些假值做特殊处理时，可以采用空值合并操作符</span>
<span class="line"><span class="token function">javascript复制代码</span><span class="token punctuation">(</span>value <span class="token operator">??</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> doSomething<span class="token punctuation">;</span> <span class="token comment">// 针对传入值不为null、undefined、空字符串的情况</span></span>
<span class="line"><span class="token comment">// 补充案例</span></span>
<span class="line"><span class="token keyword">const</span> val1 <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">??</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// 0</span></span>
<span class="line"><span class="token keyword">const</span> val2 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token operator">??</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span> <span class="token comment">// bar</span></span>
<span class="line"><span class="token keyword">const</span> val3 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">??</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span> <span class="token comment">// bar</span></span>
<span class="line"><span class="token keyword">const</span> val4 <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token operator">??</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span> <span class="token comment">// bar</span></span>
<span class="line"></span>
<span class="line">当需要根据数组长度进行渲染时：避免直接使用数组的 length 做条件渲染，而是需要拿到 length 属性与 <span class="token number">0</span> 做比较</span>
<span class="line">javascript复制代码data<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>No items<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// 当data.length为0时，页面会直接渲染0</span></span>
<span class="line">data<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>No items<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.2</span> 点击区域边界处理</span>
<span class="line"></span>
<span class="line">模态框（弹窗）关闭： 当用户点击模态框外部区域时，通常希望关闭模态框。需要确保在模态框外的点击事件不会误操作。在处理多层模态框的情况下，需要确保在打开多个模态框时，点击模态框以外的区域时能够正确地关闭最上层的模态框，而不是关闭所有模态框。</span>
<span class="line">可选择框：当用户点击可选择框时通常希望点击选择框的任何位置都能选中，包括点击可选择框除文字外的空白部位</span>
<span class="line">弹出框关闭按钮：当用户点击弹出框关闭按钮时通常希望只点击关闭按钮能关闭，但有时按钮的点击区域样式设置会比较大<span class="token operator">/</span>小，导致可点击范围变大<span class="token operator">/</span>小</span>
<span class="line"></span>
<span class="line"><span class="token number">2.3</span> 拖动的边界处理</span>
<span class="line"></span>
<span class="line">拖动元素： 当用户需要通过鼠标或触摸手势拖动一个元素时，需要考虑元素在屏幕上的拖动范围，以防止拖动超出指定的边界</span>
<span class="line">拖动排序： 在可拖动排序的列表或表格中，拖动一个元素到新位置时，需要确保拖动操作不会使元素超出容器的边界或影响其他元素的位置</span>
<span class="line">拖动调整大小： 对于可调整大小的元素，用户可能希望通过拖动边缘或角来改变元素的尺寸。在这种情况下，需要确保拖动不会使元素的尺寸超出预定的范围（包含自定义尺寸或视口大小）</span>
<span class="line"></span>
<span class="line"><span class="token number">2.4</span> 滚动的边界处理</span>
<span class="line"></span>
<span class="line">无限滚动加载： 在无限滚动加载的场景中，需要根据用户滚动的位置来触发加载新内容。在这种情况下，需要考虑何时停止加载新内容，以防止加载过多或加载不足</span>
<span class="line">可变换位置弹出框： 在滚动时，需要考虑弹出框的边界，以防止弹出框超出可视区域</span>
<span class="line"></span>
<span class="line"><span class="token number">2.5</span> 键盘操作的边界处理</span>
<span class="line"></span>
<span class="line">焦点管理： 确保用户可以使用键盘（例如 Tab 键）在页面上的交互元素之间进行导航。考虑设置合适的焦点顺序，并确保焦点不会丢失在界面之外。</span>
<span class="line">键盘快捷键： 如果你的应用程序支持键盘快捷键，确保这些快捷键是易于记忆和使用的。避免与浏览器或操作系统的默认快捷键冲突，同时需要考虑键盘操作的边界，以防止操作超出预定的范围</span>
<span class="line"></span>
<span class="line">scss复制代码<span class="token keyword">const</span> <span class="token function-variable function">handleResize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>isResizing<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> newWidth <span class="token operator">=</span> width <span class="token operator">+</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>clientX <span class="token operator">-</span> startX<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> newHeight <span class="token operator">=</span> height <span class="token operator">+</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>clientY <span class="token operator">-</span> startY<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line">    <span class="token comment">// 边界处理（边界大小自行定义或不能超过窗口大小）</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>newWidth <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token operator">&amp;&amp;</span> newHeight <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setWidth</span><span class="token punctuation">(</span>newWidth<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">setHeight</span><span class="token punctuation">(</span>newHeight<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">setStartX</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>clientX<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">setStartY</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>clientY<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.</span> 是否进行了输入验证和过滤</span>
<span class="line"><span class="token number">3.1</span> 避免重复提交处理</span>
<span class="line">使用防抖节流函数处理重复提交</span>
<span class="line">ini复制代码<span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> timer<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> isThrottled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isThrottled<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      isThrottled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        isThrottled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">在发起请求时，设置一个标志位，表示当前请求正在进行中，确保在请求完成前不再发起相同类型的请求</span>
<span class="line">javascript复制代码<span class="token keyword">function</span> <span class="token function">createRequestHandler</span><span class="token punctuation">(</span><span class="token parameter">requestFunction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> isRequesting <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果正在请求中，不执行重复请求</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>isRequesting<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;A request is already in progress. Please wait.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line">    <span class="token comment">// 设置请求标志位为true，表示请求开始</span></span>
<span class="line">    isRequesting <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 执行实际的请求操作</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">requestFunction</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Request failed:&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 请求完成后的处理</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Request completed.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line">      <span class="token comment">// 重置请求标志位为false，表示请求结束</span></span>
<span class="line">      isRequesting <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 示例：使用createRequestHandler包装一个请求函数</span></span>
<span class="line"><span class="token keyword">const</span> wrappedRequest <span class="token operator">=</span> <span class="token function">createRequestHandler</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">makeRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 模拟异步请求，实际情况中会使用fetch或其他Ajax库</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Actual request logic here.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">​</span>
<span class="line"><span class="token comment">// 示例：连续调用wrappedRequest</span></span>
<span class="line"><span class="token function">wrappedRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 请求开始</span></span>
<span class="line"><span class="token function">wrappedRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出提示，不执行重复请求</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.2</span> 表单验证正确后提交</span>
<span class="line">在表单的 onSubmit 事件处理函数中执行最终的验证（包含长度验证、格式验证、数字范围验证、一致性验证、特殊字符验证、正则表达式验证、唯一性验证等），检查是否有错误。如果没有错误，则执行提交表单的操作；否则，阻止表单的默认提交行为，并显示错误信息。</span>
<span class="line">六<span class="token punctuation">.</span> 性能优化</span>
<span class="line"><span class="token number">1.</span> 避免不必要的重渲染： 是否避免了不必要的 <span class="token constant">DOM</span> 重绘和重新计算</span>
<span class="line">使用 React<span class="token punctuation">.</span>useMemo、 React<span class="token punctuation">.</span>useCallback、React<span class="token punctuation">.</span>memo 等函数避免父组件重渲染时导致子组件不必要的重渲染</span>
<span class="line">javascript复制代码<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useMemo<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 子组件</span></span>
<span class="line"><span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 父组件</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">ParentComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 使用 useMemo 缓存计算结果</span></span>
<span class="line">  <span class="token keyword">const</span> doubledValue <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 使用 useCallback 缓存回调函数</span></span>
<span class="line">  <span class="token keyword">const</span> handleClick <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevCount</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> prevCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Parent Component<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>ChildComponent value<span class="token operator">=</span><span class="token punctuation">{</span>doubledValue<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> ParentComponent<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span> 懒加载和代码分割： 是否使用了懒加载和代码分割以提高性能</span>
<span class="line"><span class="token number">2.1</span> 懒加载</span>
<span class="line">使用 React<span class="token punctuation">.</span>lazy、Suspense懒加载</span>
<span class="line">javascript复制代码<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./MyComponent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.2</span> 代码分割</span>
<span class="line">配置 webpack 的 splitChunks 进行代码分割</span>
<span class="line">less复制代码module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 将所有类型的 chunk 都进行代码分割</span></span>
<span class="line">      <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span> <span class="token comment">// 设置模块最小大小，小于此值的模块不进行代码分割</span></span>
<span class="line">      <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 设置模块最大大小，超过此值的模块将被拆分成更小的块</span></span>
<span class="line">      <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 模块被引用的次数达到 minChunks 才进行代码分割</span></span>
<span class="line">      <span class="token literal-property property">maxAsyncRequests</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 按需加载时，并行请求的最大数量</span></span>
<span class="line">      <span class="token literal-property property">maxInitialRequests</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 入口点的最大并行请求数量</span></span>
<span class="line">      <span class="token literal-property property">automaticNameDelimiter</span><span class="token operator">:</span> <span class="token string">&quot;~&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 文件名之间的连接符</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 根据模块和缓存组键自动生成名称</span></span>
<span class="line">      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 匹配 node_modules 中的模块</span></span>
<span class="line">          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;vendor&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 分割出的 chunk 名称</span></span>
<span class="line">          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 在所有类型的 chunk 中进行分割</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.</span> 优化资源加载： 是否合理使用 <span class="token constant">CDN</span>，压缩图片，减少 <span class="token constant">HTTP</span> 请求</span>
<span class="line"><span class="token number">3.1</span> 合理使用 <span class="token constant">CDN</span></span>
<span class="line">尽量将静态资源（如图片、字体等）托管在 <span class="token constant">CDN</span> 上，减少本地资源的请求次数，提高性能</span>
<span class="line">ini复制代码<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;https://cdn.example.com/image.png&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.2</span> 压缩图片</span>
<span class="line">使用图片压缩工具（如 imagemin<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin）进行图片压缩</span>
<span class="line">javascript复制代码<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.(png|jpe?g|gif|svg)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;file-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;images/[name].[hash].[ext]&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 输出图片的文件名和路径</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;image-webpack-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 使用 image-webpack-loader 进行图片压缩</span></span>
<span class="line">            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">mozjpeg</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">progressive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token comment">// 设置 JPEG 图片的质量</span></span>
<span class="line">              <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">optipng</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 禁用 OptiPNG，因为 file-loader 已经处理了图片优化</span></span>
<span class="line">              <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">pngquant</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token string">&quot;65-90&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 设置 PNG 图片的质量范围</span></span>
<span class="line">                <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">gifsicle</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">interlaced</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">webp</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token comment">// 设置 WebP 图片的质量</span></span>
<span class="line">              <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.3</span> 压缩和合并资源</span>
<span class="line">通过工具如 Webpack 将多个 <span class="token constant">CSS</span> 和 JavaScript 文件压缩和合并，可以减少 <span class="token constant">HTTP</span> 请求和文件大小，从而提高网站加载速度</span>
<span class="line"><span class="token number">3.4</span> 使用缓存</span>
<span class="line">通过设置 <span class="token constant">HTTP</span> 缓存头或使用浏览器缓存机制，可以缓存已加载的资源，从而减少重复的 <span class="token constant">HTTP</span> 请求</span>
<span class="line"><span class="token number">3.5</span> 使用预加载和预渲染</span>
<span class="line">xml复制代码<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 预加载样式表 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;preload&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;styles.css&quot;</span> <span class="token keyword">as</span><span class="token operator">=</span><span class="token string">&quot;style&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 预加载脚本 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;preload&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;app.js&quot;</span> <span class="token keyword">as</span><span class="token operator">=</span><span class="token string">&quot;script&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 预渲染页面 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;prerender&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;/path-to-page&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">4.</span> 避免不必要的循环和计算： 代码中是否有冗余的循环和计算</span>
<span class="line"><span class="token number">4.1</span> 使用 React<span class="token punctuation">.</span>useMemo 缓存昂贵的计算结果</span>
<span class="line">scss复制代码<span class="token keyword">const</span> expensiveResult <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 昂贵的计算逻辑</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">someExpensiveCalculation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dependency<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">4.2</span> 当 useState 的初始值为一个比较复杂计算时，通常情况下最好不要将这个计算结果单独拆分出来</span>
<span class="line">javascript复制代码<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token function">calculateInitialCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">calculateInitialCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 一些复杂的计算逻辑</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">在这个例子中，calculateInitialCount 是一个用于计算初始 count 值的函数。虽然你可以将其拆分成两个步骤，但是这样可能会导致计算逻辑被不必要地执行多次</span>
<span class="line">ini复制代码<span class="token keyword">const</span> initialCount <span class="token operator">=</span> <span class="token function">calculateInitialCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">4.3</span> 选择适当的数据结构以便更轻松地执行所需的操作</span>
<span class="line">例如，如果需要频繁的查找和删除操作，使用 Set 或 Map 可能比数组更高效</span>
<span class="line"><span class="token number">4.4</span> 使用 Web Workers</span>
<span class="line">对于大量计算密集型的任务，可以考虑使用 Web Workers。Web Workers 可以在后台线程中运行，不会阻塞主线程，从而提高应用的响应性</span>
<span class="line">七<span class="token punctuation">.</span> 测试和质量保证</span>
<span class="line"><span class="token number">1.</span> 单元测试覆盖： 是否有足够的单元测试覆盖率？</span>
<span class="line">使用Jest等测试框架编写单元测试，确保每个函数和组件的行为符合预期。</span>
<span class="line">scss复制代码<span class="token comment">// 示例测试用例</span></span>
<span class="line"><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;adds 1 + 2 to equal 3&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">执行 jest <span class="token operator">--</span>coverage 就能在当前目录的coverage文件夹中看到代码覆盖率相关的信息了<span class="token punctuation">.</span>如果需要执行指定文件的单测可以使用 <span class="token operator">--</span>testPatchPatter 参数</span>
<span class="line"></span>
<span class="line">文件更改后，需更新单测用例，保证单测能正常跑通保证单测覆盖率</span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span> 端到端测试： 是否进行了端到端测试，模拟真实用户行为？</span>
<span class="line">使用Cypress等工具编写端到端测试，确保整个应用的流程正常运行。</span>
<span class="line">dart复制代码<span class="token comment">// 示例Cypress测试</span></span>
<span class="line"><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;should display login form&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&#39;exist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">重要业务逻辑，可以使用 Jest<span class="token operator">/</span>Cypress 来做端到端测试</span>
<span class="line"></span>
<span class="line"><span class="token number">3</span> 持续集成和持续交付： 是否有持续集成和持续交付流程？</span>
<span class="line">yaml复制代码# 不好的例子</span>
<span class="line"></span>
<span class="line"># 缺乏持续集成和持续交付</span>
<span class="line"></span>
<span class="line"># 好的例子</span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">CI</span><span class="token operator">/</span><span class="token constant">CD</span></span>
<span class="line"><span class="token literal-property property">on</span><span class="token operator">:</span></span>
<span class="line">  <span class="token literal-property property">push</span><span class="token operator">:</span></span>
<span class="line">    <span class="token literal-property property">branches</span><span class="token operator">:</span></span>
<span class="line">      <span class="token operator">-</span> main</span>
<span class="line"><span class="token literal-property property">jobs</span><span class="token operator">:</span></span>
<span class="line">  <span class="token literal-property property">build</span><span class="token operator">:</span></span>
<span class="line">    runs<span class="token operator">-</span>on<span class="token operator">:</span> ubuntu<span class="token operator">-</span>latest</span>
<span class="line">    <span class="token literal-property property">steps</span><span class="token operator">:</span></span>
<span class="line">      <span class="token operator">-</span> name<span class="token operator">:</span> Checkout code</span>
<span class="line">        <span class="token literal-property property">uses</span><span class="token operator">:</span> actions<span class="token operator">/</span>checkout@v2</span>
<span class="line">      <span class="token operator">-</span> name<span class="token operator">:</span> Install dependencies</span>
<span class="line">        <span class="token literal-property property">run</span><span class="token operator">:</span> npm install</span>
<span class="line">      <span class="token operator">-</span> name<span class="token operator">:</span> Run tests</span>
<span class="line">        <span class="token literal-property property">run</span><span class="token operator">:</span> npm test</span>
<span class="line">      <span class="token operator">-</span> name<span class="token operator">:</span> Deploy</span>
<span class="line">        <span class="token literal-property property">run</span><span class="token operator">:</span> npm run deploy</span>
<span class="line"></span>
<span class="line">使用<span class="token constant">CI</span><span class="token operator">/</span><span class="token constant">CD</span>工具（如Jenkins、Travis <span class="token constant">CI</span>）确保每次提交都通过自动化测试并能够顺利部署</span>
<span class="line"></span>
<span class="line">八<span class="token punctuation">.</span> 兼容性和可访问性</span>
<span class="line"><span class="token number">1.</span> 跨浏览器测试： 代码是否在主流浏览器上正常运行？</span>
<span class="line"><span class="token number">1.1</span> 针对 ie 浏览器（ie11）进行兼容</span>
<span class="line"></span>
<span class="line">使用 Babel 兼容 <span class="token constant">ES6</span><span class="token operator">+</span> 代码：</span>
<span class="line"></span>
<span class="line">bash复制代码# 安装 Babel 相关依赖</span>
<span class="line">npm install @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env <span class="token operator">--</span>save<span class="token operator">-</span>dev</span>
<span class="line"></span>
<span class="line">json复制代码<span class="token comment">// .babelrc 或 babel.config.js 配置文件</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">使用 polyfill 兼容 Promise</span>
<span class="line"></span>
<span class="line">perl复制代码# 安装 core<span class="token operator">-</span>js</span>
<span class="line">npm install core<span class="token operator">-</span>js@<span class="token number">3</span> <span class="token operator">--</span>save</span>
<span class="line"></span>
<span class="line">arduino复制代码<span class="token comment">// 在项目的入口文件中引入 polyfill</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&#39;core-js/stable&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">&#39;regenerator-runtime/runtime&#39;</span></span>
<span class="line"></span>
<span class="line">使用 Babel 兼容箭头函数</span>
<span class="line"></span>
<span class="line">bash复制代码# 安装 Babel 相关依赖</span>
<span class="line">npm install @babel<span class="token operator">/</span>plugin<span class="token operator">-</span>transform<span class="token operator">-</span>arrow<span class="token operator">-</span>functions <span class="token operator">--</span>save<span class="token operator">-</span>dev</span>
<span class="line"></span>
<span class="line">json复制代码<span class="token comment">// .babelrc 或 babel.config.js 配置文件</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-transform-arrow-functions&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">使用 polyfill 兼容不支持的 <span class="token constant">DOM</span> 方法和属性</span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">// 使用 classList polyfill</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">&#39;classList&#39;</span> <span class="token keyword">in</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;classlist-polyfill&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.2</span> 针对 safari 浏览器进行兼容</span>
<span class="line"></span>
<span class="line">对日期格式进行兼容</span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">// 使用标准的日期格式</span></span>
<span class="line"><span class="token keyword">const</span> currentDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 生成当前日期</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用库（如 moment.js）处理日期</span></span>
<span class="line"><span class="token keyword">const</span> formattedDate <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span>currentDate<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">对 LocalStorage 进行兼容性</span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">// Safari在隐私模式下可能禁用了LocalStorage</span></span>
<span class="line"><span class="token comment">// 检查LocalStorage是否可用</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Storage <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 可以使用LocalStorage</span></span>
<span class="line">  localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 处理LocalStorage不可用的情况</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">更多兼容性问题可以参考以下网站：</span>
<span class="line"></span>
<span class="line">Can <span class="token constant">I</span> Use</span>
<span class="line"><span class="token constant">MDN</span> Web Docs</span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span> 移动设备兼容性： 代码在移动设备上是否有良好的兼容性？</span>
<span class="line"><span class="token number">2.1</span> 响应式设计</span>
<span class="line">使用响应式设计，确保你的网站或应用在不同尺寸的移动设备上都有良好的显示效果</span>
<span class="line">arduino复制代码<span class="token comment">/* 方案一：使用媒体查询来适应不同屏幕尺寸 */</span></span>
<span class="line">@media screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 768px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* 在小屏幕下的样式 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">css复制代码<span class="token comment">/* 方案二：使用相对单位rem，根据根元素的字体大小调整布局 */</span></span>
<span class="line">html <span class="token punctuation">{</span></span>
<span class="line">  font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span> <span class="token comment">/* 基础字体大小 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">body <span class="token punctuation">{</span></span>
<span class="line">  font<span class="token operator">-</span>size<span class="token operator">:</span> 1rem<span class="token punctuation">;</span> <span class="token comment">/* 相对于根元素的字体大小，等于16px */</span></span>
<span class="line">  <span class="token literal-property property">margin</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span> <span class="token comment">/* 与根元素字体大小相关的边距 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">css复制代码<span class="token comment">/* 方案三：视窗单位，通过使用vw（视口宽度的百分比）和vh（视口高度的百分比）等单位，可以根据设备屏幕的大小来设置元素的大小。 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* VM示例：根据视口宽度和高度调整元素大小 */</span></span>
<span class="line">body <span class="token punctuation">{</span></span>
<span class="line">  font<span class="token operator">-</span>size<span class="token operator">:</span> 4vw<span class="token punctuation">;</span> <span class="token comment">/* 相对于视口宽度的字体大小 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">section <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">width</span><span class="token operator">:</span> 80vw<span class="token punctuation">;</span> <span class="token comment">/* 相对于视口宽度的宽度 */</span></span>
<span class="line">  <span class="token literal-property property">height</span><span class="token operator">:</span> 50vh<span class="token punctuation">;</span> <span class="token comment">/* 相对于视口高度的高度 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.2</span> 触摸事件兼容性</span>
<span class="line">javascript复制代码<span class="token comment">// 使用触摸事件处理方式，而不仅仅是鼠标事件，以提供更好的移动设备体验</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 示例：点击事件处理</span></span>
<span class="line">element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchstart&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 处理触摸开始事件的逻辑</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.3</span> Viewport 设置</span>
<span class="line">xml复制代码<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 使用适当的Viewport设置，确保在移动设备上显示的内容不会缩放 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Viewport 设置 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.4</span> 字体和图像优化</span>
<span class="line">css复制代码<span class="token comment">/* 使用适合移动设备的字体和图像优化策略，以减小加载时间 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 使用 Web 字体 */</span></span>
<span class="line">body <span class="token punctuation">{</span></span>
<span class="line">  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">&#39;Roboto&#39;</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 使用响应式图像 */</span></span>
<span class="line">img <span class="token punctuation">{</span></span>
<span class="line">  max<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token literal-property property">height</span><span class="token operator">:</span> auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.</span> 无障碍性： 是否遵循无障碍标准，确保应用对残障用户友好？</span>
<span class="line"><span class="token number">3.1</span> 必要的 aria 属性</span>
<span class="line">xml复制代码<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> aria<span class="token operator">-</span>labe：提供一个可读文本来描述不具备语义的元素的目的 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>button aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">&quot;搜索&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>svg aria<span class="token operator">-</span>hidden<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;icon-search&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 搜索图标的 <span class="token constant">SVG</span> 图形 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">xml复制代码<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> aria<span class="token operator">-</span>describedby：将元素关联到另一个提供额外说明的元素 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;username&quot;</span><span class="token operator">&gt;</span>用户名：<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;username&quot;</span> aria<span class="token operator">-</span>describedby<span class="token operator">=</span><span class="token string">&quot;username-description&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;username-description&quot;</span><span class="token operator">&gt;</span>请输入您的用户名，最多<span class="token number">20</span>个字符。<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.2</span> 语义化 <span class="token constant">HTML</span> 标签</span>
<span class="line">xml复制代码<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span>nav<span class="token operator">&gt;</span>： 定义页面导航链接的容器，增强页面结构 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>nav<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>首页<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>关于我们<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;/contact&quot;</span><span class="token operator">&gt;</span>联系我们<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">xml复制代码<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span>article<span class="token operator">&gt;</span>： 表示独立的、完整的、可操作的内容单元 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>article<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>新技术改变生活<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>一些关于新技术如何改变我们日常生活的文章内容。<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>article<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.3</span> 键盘辅助支持</span>
<span class="line">xml复制代码<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 焦点管理：确保通过键盘可以轻松导航和操作页面元素 <span class="token operator">--</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>button tabindex<span class="token operator">=</span><span class="token string">&quot;0&quot;</span><span class="token operator">&gt;</span>可通过键盘聚焦的按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">javascript复制代码<span class="token comment">//  事件处理：提供通过键盘触发的事件来操作页面元素</span></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myButton&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keypress&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">&#39;Enter&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 执行按钮点击操作</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">更多兼容性问题可以参考以下网站：</span>
<span class="line"></span>
<span class="line"><span class="token constant">MDN</span> Web Docs Accessibility</span>
<span class="line"><span class="token constant">W3C</span> Accessibility</span>
<span class="line"></span>
<span class="line">九<span class="token punctuation">.</span> 日志和监控</span>
<span class="line"><span class="token number">1.</span> 代码中添加足够的日志： 日志是否足够详细，方便调试和追踪问题？</span>
<span class="line"><span class="token number">1.1</span> 日志级别： 使用不同的日志级别来标识日志的重要性，例如 debug、info、warn、error。确保在生产环境中只输出必要级别的日志，以避免信息泄漏。</span>
<span class="line">javascript复制代码<span class="token comment">// 示例</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;This is a debug message.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;This is an informational message.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;This is a warning message.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;This is an error message.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.2</span> 清晰的信息： 每条日志应该包含足够的信息，以便于理解问题。包括有关上下文、变量值等的相关信息。</span>
<span class="line">go复制代码<span class="token comment">// 示例</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Failed to load resource:&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> url<span class="token punctuation">,</span> status <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.3</span> 异常堆栈： 在捕获和记录异常时，包含堆栈信息以便于追踪问题的根本原因。</span>
<span class="line">go复制代码<span class="token comment">// 示例</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 一些可能抛出异常的代码</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;An error occurred:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.4</span> 唯一标识符： 在日志中包含唯一的标识符，以便于将相关日志关联在一起，特别是在处理分布式系统或微服务时。</span>
<span class="line">javascript复制代码<span class="token comment">// 示例</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;User authentication successful&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> userId<span class="token punctuation">,</span> requestId <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.5</span> 日志上报： 配置日志上报系统，将日志信息发送到服务器或第三方服务，以便于集中存储和分析。</span>
<span class="line"><span class="token number">1.6</span> 用户行为日志： 记录用户的关键行为，以便在用户报告问题时更好地理解他们的操作。</span>
<span class="line"><span class="token number">1.7</span> 日志监控工具： 使用专业的日志监控工具，例如 Sentry、LogRocket 等，以便于实时监控和分析日志。</span>
<span class="line"><span class="token number">1.8</span> 版本信息： 在日志中包含应用程序的版本信息，有助于区分问题是在哪个版本中引入的。</span>
<span class="line">javascript复制代码<span class="token comment">// 示例</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;App version: 1.2.3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1.9</span> 开发环境日志： 在开发环境中输出更详细的日志信息，以便于调试和开发过程。</span>
<span class="line"><span class="token number">1.10</span> 安全性考虑： 避免在生产环境中输出敏感信息，确保日志中不包含用户隐私数据。</span>
<span class="line"><span class="token number">2</span> 性能监控工具： 是否集成了性能监控工具，追踪关键指标如加载时间、资源使用等？</span>
<span class="line"><span class="token number">2.1</span> 测量关键指标： 覆盖页面加载的关键性能指标，如首次内容渲染（<span class="token constant">FCP</span>）、可交互时间（<span class="token constant">TTI</span>）、页面加载时间（<span class="token constant">PLT</span>）。</span>
<span class="line"><span class="token number">2.2</span> 使用 Performance <span class="token constant">API</span>： 利用浏览器提供的 Performance <span class="token constant">API</span> 来收集性能数据。这包括使用 performance<span class="token punctuation">.</span>timing 对象和 performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 方法。</span>
<span class="line">javascript复制代码<span class="token comment">// 示例</span></span>
<span class="line"><span class="token keyword">const</span> timing <span class="token operator">=</span> window<span class="token punctuation">.</span>performance<span class="token punctuation">.</span>timing<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Page load time:&#39;</span><span class="token punctuation">,</span> timing<span class="token punctuation">.</span>loadEventEnd <span class="token operator">-</span> timing<span class="token punctuation">.</span>navigationStart<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.3</span> 资源加载监控： 监控页面中的各个资源（如图片、脚本、样式表）的加载性能。可使用 performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">&#39;resource&#39;</span><span class="token punctuation">)</span> 方法。</span>
<span class="line">ini复制代码<span class="token comment">// 示例</span></span>
<span class="line"><span class="token keyword">const</span> resources <span class="token operator">=</span> window<span class="token punctuation">.</span>performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">&#39;resource&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">resources<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">resource</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Resource load time:&#39;</span><span class="token punctuation">,</span> resource<span class="token punctuation">.</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.4</span> 错误监控： 监控前端错误，包括 JavaScript 错误和资源加载错误。使用 window<span class="token punctuation">.</span>onerror 事件捕获 JavaScript 错误。</span>
<span class="line">ini复制代码<span class="token comment">// 示例</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> source<span class="token punctuation">,</span> lineno<span class="token punctuation">,</span> colno<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;JavaScript error:&#39;</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> source<span class="token punctuation">,</span> lineno<span class="token punctuation">,</span> colno<span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.5</span> 用户体验度量： 使用 User Timing <span class="token constant">API</span> 进行自定义用户体验度量，以便更好地了解用户与页面的交互。</span>
<span class="line">arduino复制代码<span class="token comment">// 示例</span></span>
<span class="line">performance<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span><span class="token string">&#39;start-of-process&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 执行一些操作</span></span>
<span class="line">performance<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span><span class="token string">&#39;end-of-process&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">performance<span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span><span class="token string">&#39;process-time&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;start-of-process&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;end-of-process&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.6</span> 网络请求监控： 监控网络请求的性能，包括请求时间、响应时间、状态码等。可以使用 window<span class="token punctuation">.</span>fetch 或 XMLHttpRequest，并记录相关信息。</span>
<span class="line">javascript复制代码<span class="token comment">// 示例</span></span>
<span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://api.example.com/data&#39;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Request time:&#39;</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;date&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 处理数据</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Fetch error:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.7</span> 使用现成工具： 考虑使用现成的前端性能监控工具，例如 Google Analytics、New Relic、SpeedCurve 等，它们提供了丰富的性能数据和分析工具。</span>
<span class="line"><span class="token number">2.8</span> 实时监控： 配置实时监控，以及时发现和解决性能问题。这可以通过将性能数据发送到监控平台或使用实时监控工具实现。</span>
<span class="line"><span class="token number">2.9</span> 设备和浏览器兼容性： 考虑不同设备和浏览器的性能差异，确保性能监控工具在各种环境中都能正常工作。</span>
<span class="line"><span class="token number">2.10</span> 定期分析和优化： 定期分析性能数据，识别瓶颈，并进行相应的优化。不断迭代，确保应用程序性能得到持续改进。</span>
<span class="line">十<span class="token punctuation">.</span> React 相关</span>
<span class="line"><span class="token number">1.</span> useEffect 依赖项检查</span>
<span class="line">错误的依赖项导致Effect不更新</span>
<span class="line">scss复制代码<span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Effect triggered&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span> <span class="token constant">JSX</span>中的逻辑与（<span class="token operator">&amp;&amp;</span>）运算符的写法不支持 ie11</span>
<span class="line">因为<span class="token constant">IE11</span>对于<span class="token constant">JSX</span>的转译支持有限，无法正确解析一些特定的语法</span>
<span class="line">javascript复制代码<span class="token comment">// 不推荐写法</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span>isLoggedIn <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Welcome<span class="token punctuation">,</span> User<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 推荐写法：利用三元表达式</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> isLoggedIn <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span>isLoggedIn <span class="token operator">?</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Welcome<span class="token punctuation">,</span> User<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3.</span> setState 的参数为引用类型时，记得需要保证不为统一引用类型</span>
<span class="line">javascript复制代码<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 错误示例：直接修改原数组，不会触发重新渲染</span></span>
<span class="line">    items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;New Item&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">setItems</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleFixedClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 修正：创建一个新的数组副本，并传递给setState</span></span>
<span class="line">    <span class="token keyword">const</span> updatedItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">,</span> <span class="token string">&#39;New Item&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">setItems</span><span class="token punctuation">(</span>updatedItems<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>Add <span class="token function">Item</span> <span class="token punctuation">(</span>Incorrect<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleFixedClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>Add <span class="token function">Item</span> <span class="token punctuation">(</span>Correct<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> MyComponent<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">4.</span> 列表元素不要使用 index 作为 key</span>
<span class="line"><span class="token number">4.1</span> 性能问题</span>
<span class="line">当列表中的元素发生重排（顺序变动）时，使用索引作为 key 可能导致 React 误认为相邻的元素是相同的，从而导致不必要的重新渲染。这可能会影响性能，特别是在大型列表中</span>
<span class="line"><span class="token number">4.2</span> 不正确的渲染</span>
<span class="line">如果列表中的元素可能会在其他地方被改变（例如，排序、筛选等），使用索引作为 key 可能导致 React 错误地认为元素没有变化，从而导致不正确的渲染。这可能导致 <span class="token constant">UI</span> 不一致性和 bug</span>
<span class="line"><span class="token number">5.</span> 对 setTimeout、setInterval、addEventListener 的清除操作</span>
<span class="line">javascript复制代码<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 添加setInterval</span></span>
<span class="line">    <span class="token keyword">const</span> intervalId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 添加settimeout</span></span>
<span class="line">    <span class="token keyword">const</span> intervalId <span class="token operator">=</span> <span class="token function">settimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 添加事件监听器</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 在组件卸载时清除</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">clearInterval</span><span class="token punctuation">(</span>intervalId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>intervalId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> handleClick<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 空依赖数组表示只在组件挂载和卸载时执行</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">6.</span> 使用函数式组件，尽量不要使用类组件</span>
<span class="line"><span class="token number">6.1</span> Hooks 的引入</span>
<span class="line">React <span class="token number">16.8</span> 引入了 Hooks，使得函数式组件可以拥有类似于类组件的状态管理和生命周期等功能。使用 Hooks，函数式组件可以更方便地处理状态、副作用等，避免了类组件中使用 <span class="token keyword">class</span> 关键字和繁琐的生命周期方法</span>
<span class="line"><span class="token number">6.2</span> 更易于测试</span>
<span class="line">函数式组件更容易进行单元测试。由于函数式组件更纯粹，没有生命周期方法和状态的概念，测试库可以更容易地对其进行测试</span>
<span class="line"><span class="token number">6.3</span> 更好的逻辑组织</span>
<span class="line">使用 Hooks 可以更好地组织组件的逻辑，将相关的逻辑拆分成独立的 Hook 函数，使组件更易于理解和维护</span>
<span class="line"><span class="token number">7.</span> 合理使用useMemo与useCallback</span>
<span class="line">javascript复制代码<span class="token comment">// useMemo 将会返回上一次计算的结果，而不会重新执行计算函数。</span></span>
<span class="line"><span class="token keyword">const</span> expensiveCalculation <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 执行昂贵的计算</span></span>
<span class="line">    <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// useCallback 用于记忆函数引用，只有在依赖项发生变化时才重新创建函数。它也接收一个函数和一个依赖数组，并返回一个记忆后的函数。</span></span>
<span class="line"><span class="token keyword">const</span> handleClick <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 处理点击事件</span></span>
<span class="line">  <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>onClick<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">结合React<span class="token punctuation">.</span>memo 避免子组件重复刷新</span>
<span class="line">javascript复制代码<span class="token comment">// 子组件</span></span>
<span class="line"><span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Rendering ChildComponent...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">            Click me</span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 父组件</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">ParentComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> expensiveCalculation <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Calculating...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 使用 useCallback 缓存回调函数，以确保仅在依赖项 data 变化时重新创建</span></span>
<span class="line">  <span class="token keyword">const</span> handleClick <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Button clicked!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 处理点击事件</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Rendering ParentComponent...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token comment">/* 使用 React.memo 包裹子组件 */</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span>ChildComponent onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">{</span><span class="token comment">/* 使用 expensiveCalculation */</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">{</span>expensiveCalculation<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">8.</span> 确保每一个组件都有displayName，方便调试</span>
<span class="line">ini复制代码<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 组件的代码</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">MyComponent<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">9.</span> 组件名使用大驼峰，属性名称与style样式属性使用小驼峰</span>
<span class="line">javascript复制代码<span class="token comment">// Good</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>backgroundColor<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>my component<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Not recommended (不推荐)</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">my_component</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>background_color<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;background-color&#39;</span><span class="token operator">:</span> background_color <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>my component<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token number">10.</span> 组件需要开放实例方法时，使用useImperativeHandle，开放出去的dom元素使用dom字段标识</span>
<span class="line">javascript复制代码<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useImperativeHandle<span class="token punctuation">,</span> forwardRef<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span></span>
<span class="line">​</span>
<span class="line"><span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> domRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// 使用 useImperativeHandle 暴露特定的方法给父组件</span></span>
<span class="line">  <span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    dom<span class="token operator">:</span> domRef<span class="token punctuation">.</span>current<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">​</span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>domRef<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token comment">/* 子组件的内容 */</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 在父组件中使用子组件</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">ParentComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> childRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">​</span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 通过 ref 调用子组件的 dom</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>childRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      childRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>dom</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">​</span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>ChildComponent ref<span class="token operator">=</span><span class="token punctuation">{</span>childRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)])])}const i=s(t,[["render",l]]),u=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E8%A7%84%E8%8C%83/%E6%B1%87%E6%80%BB%E7%AF%87.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"前端规范/汇总篇.md"}');export{i as comp,u as data};
