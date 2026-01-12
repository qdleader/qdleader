import{_ as n,c as a,a as p,o as e}from"./app-KfnfuIf0.js";const l={};function o(c,s){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="方块游戏" tabindex="-1"><a class="header-anchor" href="#方块游戏"><span>方块游戏</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">请帮我创建一个色块识别小挑战游戏，这是一个纯<span class="token constant">HTML</span>前端项目：玩家需要在网格中找出颜色不同的那一个色块。游戏包含<span class="token number">100</span>个关卡，分为<span class="token number">6</span>个难度阶段，具有完整的计分系统、排行榜和成就系统。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>作为提示词专家，编写一个详细的提示词，让其他大模型也能实现相同质量的色块识别游戏网站。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">请帮我创建一个色块识别小挑战游戏，这是一个纯<span class="token constant">HTML</span>前端项目。</span>
<span class="line"></span>
<span class="line">## 🎮 游戏概述</span>
<span class="line"></span>
<span class="line">创建一个色块识别游戏，玩家需要在网格中找出颜色不同的那一个色块。游戏包含<span class="token number">100</span>个关卡，分为<span class="token number">6</span>个难度阶段，具有完整的计分系统、排行榜和成就系统。</span>
<span class="line"></span>
<span class="line">## 📋 核心需求</span>
<span class="line"></span>
<span class="line">### 关卡设计</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> <span class="token operator">**</span><span class="token number">100</span>个关卡<span class="token operator">**</span>，分为<span class="token number">6</span>个难度阶段：</span>
<span class="line">  <span class="token operator">-</span> 第<span class="token number">1</span><span class="token operator">-</span><span class="token number">10</span><span class="token function">关：入门阶段</span> <span class="token punctuation">(</span><span class="token number">2</span>×<span class="token number">2</span>网格，<span class="token number">35</span>秒<span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">-</span> 第<span class="token number">11</span><span class="token operator">-</span><span class="token number">25</span><span class="token function">关：初级阶段</span> <span class="token punctuation">(</span><span class="token number">3</span>×<span class="token number">3</span>网格，<span class="token number">30</span>秒<span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">-</span> 第<span class="token number">26</span><span class="token operator">-</span><span class="token number">45</span><span class="token function">关：中级阶段</span> <span class="token punctuation">(</span><span class="token number">4</span>×<span class="token number">4</span>网格，<span class="token number">25</span>秒<span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">-</span> 第<span class="token number">46</span><span class="token operator">-</span><span class="token number">70</span><span class="token function">关：高级阶段</span> <span class="token punctuation">(</span><span class="token number">5</span>×<span class="token number">5</span>网格，<span class="token number">20</span>秒<span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">-</span> 第<span class="token number">71</span><span class="token operator">-</span><span class="token number">90</span><span class="token function">关：专家阶段</span> <span class="token punctuation">(</span><span class="token number">6</span>×<span class="token number">6</span>网格，<span class="token number">18</span>秒<span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">-</span> 第<span class="token number">91</span><span class="token operator">-</span><span class="token number">100</span><span class="token function">关：宗师阶段</span> <span class="token punctuation">(</span><span class="token number">7</span>×<span class="token number">7</span>和<span class="token number">8</span>×<span class="token number">8</span>网格，<span class="token number">15</span>秒<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">### 页面结构</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> <span class="token operator">**</span>首页<span class="token operator">**</span>：</span>
<span class="line">   <span class="token operator">-</span> 游戏标题 🎨 色块识别小挑战</span>
<span class="line">   <span class="token operator">-</span> 昵称输入框</span>
<span class="line">   <span class="token operator">-</span> 可折叠的游戏规则说明</span>
<span class="line">   <span class="token operator">-</span> 排行榜展示（前<span class="token number">3</span>名）</span>
<span class="line">   <span class="token operator">-</span> 开始游戏按钮</span>
<span class="line">   <span class="token operator">-</span> 深色<span class="token operator">/</span>浅色主题切换</span>
<span class="line"></span>
<span class="line"><span class="token number">2.</span> <span class="token operator">**</span>游戏页面<span class="token operator">**</span>：</span>
<span class="line">   <span class="token operator">-</span> 顶部状态栏：关卡、得分、倒计时、返回、排行榜、主题切换</span>
<span class="line">   <span class="token operator">-</span> 关卡信息：当前关卡、难度标签、网格大小、进度</span>
<span class="line">   <span class="token operator">-</span> 色块网格：动态生成不同大小的网格</span>
<span class="line">   <span class="token operator">-</span> 过关弹窗：显示得分和进度</span>
<span class="line">   <span class="token operator">-</span> 游戏结束弹窗：最终成绩和成就</span>
<span class="line">   <span class="token operator">-</span> 排行榜弹窗：完整排行榜</span>
<span class="line"></span>
<span class="line">### 颜色算法（关键：确保挑战性）</span>
<span class="line"></span>
<span class="line"><span class="token operator">**</span>必须严格按照以下算法实现颜色差异<span class="token operator">**</span>：</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 第<span class="token number">1</span><span class="token operator">-</span><span class="token number">10</span>关：颜色差异从<span class="token number">23.5</span>递减到<span class="token number">10</span></span>
<span class="line"><span class="token operator">-</span> 第<span class="token number">11</span><span class="token operator">-</span><span class="token number">25</span>关：颜色差异从<span class="token number">9.6</span>递减到<span class="token number">4</span></span>
<span class="line"><span class="token operator">-</span> 第<span class="token number">26</span><span class="token operator">-</span><span class="token number">45</span>关：颜色差异从<span class="token number">3.92</span>递减到<span class="token number">2</span></span>
<span class="line"><span class="token operator">-</span> 第<span class="token number">46</span><span class="token operator">-</span><span class="token number">70</span>关：颜色差异从<span class="token number">1.98</span>递减到<span class="token number">1.5</span></span>
<span class="line"><span class="token operator">-</span> 第<span class="token number">71</span><span class="token operator">-</span><span class="token number">90</span>关：颜色差异从<span class="token number">1.48</span>递减到<span class="token number">1</span></span>
<span class="line"><span class="token operator">-</span> 第<span class="token number">91</span><span class="token operator">-</span><span class="token number">100</span>关：颜色差异从<span class="token number">0.95</span>递减到<span class="token number">0.5</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">**</span>颜色生成策略<span class="token operator">**</span>：</span>
<span class="line"><span class="token operator">-</span> 使用<span class="token constant">HSL</span>颜色模式</span>
<span class="line"><span class="token operator">-</span> 饱和度：<span class="token number">70</span><span class="token operator">-</span><span class="token number">90</span><span class="token operator">%</span></span>
<span class="line"><span class="token operator">-</span> 亮度：<span class="token number">50</span><span class="token operator">-</span><span class="token number">65</span><span class="token operator">%</span></span>
<span class="line"><span class="token operator">-</span> 三种差异策略随机选择：</span>
<span class="line">  <span class="token operator">-</span> 色相差异（<span class="token number">40</span><span class="token operator">%</span>概率）</span>
<span class="line">  <span class="token operator">-</span> 饱和度差异（<span class="token number">30</span><span class="token operator">%</span>概率）</span>
<span class="line">  <span class="token operator">-</span> 亮度差异（<span class="token number">30</span><span class="token operator">%</span>概率）</span>
<span class="line"></span>
<span class="line">### 计分系统</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 基础分：<span class="token number">100</span>分</span>
<span class="line"><span class="token operator">-</span> 时间奖励：剩余时间 × <span class="token number">2</span></span>
<span class="line"><span class="token operator">-</span> <span class="token function">速度奖励：</span><span class="token punctuation">(</span><span class="token number">3000</span> <span class="token operator">-</span> 点击时间<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100</span></span>
<span class="line"><span class="token operator">-</span> 关卡奖励：关卡数 × <span class="token number">10</span></span>
<span class="line"></span>
<span class="line">### 成就系统</span>
<span class="line"></span>
<span class="line">根据通关数显示称号：</span>
<span class="line"><span class="token operator">-</span> 🎮 <span class="token function">色彩学徒</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">9</span>关<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">-</span> 👁️ <span class="token function">锐眼新手</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">-</span><span class="token number">24</span>关<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">-</span> 🌟 <span class="token function">色彩达人</span> <span class="token punctuation">(</span><span class="token number">25</span><span class="token operator">-</span><span class="token number">44</span>关<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">-</span> ⭐ <span class="token function">色彩高手</span> <span class="token punctuation">(</span><span class="token number">45</span><span class="token operator">-</span><span class="token number">69</span>关<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">-</span> 🔥 <span class="token function">色彩专家</span> <span class="token punctuation">(</span><span class="token number">70</span><span class="token operator">-</span><span class="token number">89</span>关<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">-</span> 💎 <span class="token function">色彩大师</span> <span class="token punctuation">(</span><span class="token number">90</span><span class="token operator">-</span><span class="token number">99</span>关<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">-</span> 👑 <span class="token function">色彩宗师</span> <span class="token punctuation">(</span><span class="token number">100</span>关完成<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">### 数据存储</span>
<span class="line"></span>
<span class="line">使用localStorage保存：</span>
<span class="line"><span class="token operator">-</span> 排行榜数据（最多<span class="token number">10</span>条记录）</span>
<span class="line"><span class="token operator">-</span> 主题设置</span>
<span class="line"><span class="token operator">-</span> 玩家昵称</span>
<span class="line"></span>
<span class="line">### 视觉设计要求</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> <span class="token operator">**</span>现代化<span class="token constant">UI</span><span class="token operator">**</span>：渐变背景、圆角设计、阴影效果</span>
<span class="line"><span class="token operator">-</span> <span class="token operator">**</span>响应式布局<span class="token operator">**</span>：适配手机和桌面</span>
<span class="line"><span class="token operator">-</span> <span class="token operator">**</span>流畅动画<span class="token operator">**</span>：按钮悬停、色块交互、弹窗动画</span>
<span class="line"><span class="token operator">-</span> <span class="token operator">**</span>双主题支持<span class="token operator">**</span>：深色和浅色主题</span>
<span class="line"><span class="token operator">-</span> <span class="token operator">**</span>配色方案<span class="token operator">**</span>：</span>
<span class="line">  <span class="token operator">-</span> <span class="token function">主色：紫色</span> <span class="token punctuation">(</span>#8B5CF6<span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token function">辅助色：青色</span> <span class="token punctuation">(</span>#06B6D4<span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">-</span> <span class="token function">强调色：橙色</span> <span class="token punctuation">(</span>#<span class="token constant">F59E0B</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">### 交互细节</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 色块悬停放大效果</span>
<span class="line"><span class="token operator">-</span> 正确点击绿色边框反馈</span>
<span class="line"><span class="token operator">-</span> 错误点击红色边框反馈</span>
<span class="line"><span class="token operator">-</span> 倒计时警告颜色变化</span>
<span class="line"><span class="token operator">-</span> 按钮点击缩放动画</span>
<span class="line"><span class="token operator">-</span> 弹窗弹跳出现动画</span>
<span class="line"></span>
<span class="line">### 技术要求</span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> <span class="token operator">**</span>纯<span class="token constant">HTML</span><span class="token operator">/</span><span class="token constant">CSS</span><span class="token operator">/</span>JavaScript实现<span class="token operator">**</span></span>
<span class="line"><span class="token operator">-</span> <span class="token operator">**</span>单文件<span class="token constant">HTML</span><span class="token operator">**</span>（所有代码内联）</span>
<span class="line"><span class="token operator">-</span> <span class="token operator">**</span>不使用外部框架<span class="token operator">**</span></span>
<span class="line"><span class="token operator">-</span> <span class="token operator">**</span>兼容现代浏览器<span class="token operator">**</span></span>
<span class="line"><span class="token operator">-</span> <span class="token operator">**</span>代码结构清晰<span class="token operator">**</span></span>
<span class="line"></span>
<span class="line">### 重要约束</span>
<span class="line"></span>
<span class="line"><span class="token number">1.</span> <span class="token operator">**</span>颜色差异算法必须精确实现<span class="token operator">**</span>，确保游戏足够有挑战性</span>
<span class="line"><span class="token number">2.</span> <span class="token operator">**</span>必须包含完整的<span class="token number">100</span>关卡系统<span class="token operator">**</span></span>
<span class="line"><span class="token number">3.</span> <span class="token operator">**</span>排行榜功能必须完整<span class="token operator">**</span>，包括数据持久化</span>
<span class="line"><span class="token number">4.</span> <span class="token operator">**</span>所有弹窗和交互必须完整实现<span class="token operator">**</span></span>
<span class="line"><span class="token number">5.</span> <span class="token operator">**</span>主题切换功能必须正常工作<span class="token operator">**</span></span>
<span class="line"><span class="token number">6.</span> <span class="token operator">**</span>游戏状态管理必须完善<span class="token operator">**</span></span>
<span class="line"></span>
<span class="line">请创建一个完整的单页面<span class="token constant">HTML</span>文件，包含所有必要的功能，确保可以直接在浏览器中打开运行，游戏体验流畅且具有足够的挑战性。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)])])}const i=n(l,[["render",o]]),r=JSON.parse('{"path":"/tool/cursor/%E6%9C%89%E8%B6%A3%E7%9A%84%E5%AE%9E%E7%8E%B0/%E6%96%B9%E5%9D%97%E6%B8%B8%E6%88%8F.html","title":"方块游戏","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"tool/cursor/有趣的实现/方块游戏.md"}');export{i as comp,r as data};
