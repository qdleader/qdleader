import{_ as n,c as a,a as e,o as p}from"./app-KfnfuIf0.js";const l={};function t(i,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="论文优化提示词" tabindex="-1"><a class="header-anchor" href="#论文优化提示词"><span>论文优化提示词</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>role<span class="token operator">&gt;</span>专业中文写作优化助手<span class="token operator">&lt;</span><span class="token operator">/</span>role<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>task<span class="token operator">&gt;</span></span>
<span class="line">对提供的中文文本进行全面优化，提升文章质量和可读性</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>task<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>optimization_areas<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">-</span> 纠正拼写和语法错误</span>
<span class="line"><span class="token operator">-</span> 提高表达清晰度</span>
<span class="line"><span class="token operator">-</span> 增强语言简洁性</span>
<span class="line"><span class="token operator">-</span> 改善整体可读性</span>
<span class="line"><span class="token operator">-</span> 拆分冗长句子</span>
<span class="line"><span class="token operator">-</span> 消除重复内容</span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>optimization_areas<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>instructions<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token number">1.</span> 仅提供优化后的中文文本</span>
<span class="line">    <span class="token number">2.</span> 保持原文的核心意思和风格</span>
<span class="line">    <span class="token number">3.</span> 不要包含任何解释或修改说明</span>
<span class="line">    <span class="token number">4.</span> 直接呈现最终优化结果</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>instructions<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>input<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">[</span>文章内容<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中文摘要任务" tabindex="-1"><a class="header-anchor" href="#中文摘要任务"><span>中文摘要任务</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>instruct<span class="token operator">&gt;</span></span>
<span class="line">将以下文本压缩为<span class="token number">100</span>字的简洁摘要。摘要应：</span>
<span class="line"><span class="token operator">-</span> 捕捉原文的核心要点和主要信息</span>
<span class="line"><span class="token operator">-</span> 保持清晰易懂的语言</span>
<span class="line"><span class="token operator">-</span> 避免复杂句式和专业术语</span>
<span class="line"><span class="token operator">-</span> 保持逻辑连贯性</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>instruct<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>output_requirement<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">-</span> 严格控制在<span class="token number">100</span>字以内</span>
<span class="line"><span class="token operator">-</span> 使用中文响应</span>
<span class="line"><span class="token operator">-</span> 保持信息准确性</span>
<span class="line"><span class="token operator">-</span> 确保易于阅读理解</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>output_requirement<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>input<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">[</span>在此处粘贴需要摘要的文本<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nature-风格润色" tabindex="-1"><a class="header-anchor" href="#nature-风格润色"><span>Nature 风格润色</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>role<span class="token operator">&gt;</span>You are an expert academic editor specializing <span class="token keyword">in</span> sophisticated English enhancement<span class="token operator">&lt;</span><span class="token operator">/</span>role<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>task<span class="token operator">&gt;</span>Transform text from basic <span class="token function">English</span> <span class="token punctuation">(</span><span class="token constant">A0</span> level<span class="token punctuation">)</span> to elegant<span class="token punctuation">,</span> scholarly language <span class="token keyword">while</span> maintaining the original meaning<span class="token operator">&lt;</span><span class="token operator">/</span>task<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>style_guidelines<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">-</span> Emulate the precise<span class="token punctuation">,</span> authoritative style <span class="token keyword">of</span> Nature journal publications</span>
<span class="line"><span class="token operator">-</span> Elevate vocabulary <span class="token keyword">with</span> domain<span class="token operator">-</span>appropriate academic terminology</span>
<span class="line"><span class="token operator">-</span> Transform simple sentence structures into more complex<span class="token punctuation">,</span> sophisticated constructions</span>
<span class="line"><span class="token operator">-</span> Incorporate scholarly transitions and discourse markers</span>
<span class="line"><span class="token operator">-</span> Maintain formal academic register throughout</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style_guidelines<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>constraints<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">-</span> Preserve the core meaning <span class="token keyword">of</span> the original text completely</span>
<span class="line"><span class="token operator">-</span> Avoid unnecessarily complex jargon that obscures meaning</span>
<span class="line"><span class="token operator">-</span> Ensure grammatical accuracy and idiomatic correctness</span>
<span class="line"><span class="token operator">-</span> Do not add <span class="token keyword">new</span> <span class="token class-name">information</span> or alter factual content</span>
<span class="line"><span class="token operator">-</span> Balance sophistication <span class="token keyword">with</span> clarity appropriate <span class="token keyword">for</span> scholarly audiences</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>constraints<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>process<span class="token operator">&gt;</span></span>
<span class="line"><span class="token number">1.</span> Analyze the original text <span class="token keyword">for</span> key meaning components</span>
<span class="line"><span class="token number">2.</span> Identify vocabulary and phrases suitable <span class="token keyword">for</span> enhancement</span>
<span class="line"><span class="token number">3.</span> Restructure simple sentences into more elegant constructions</span>
<span class="line"><span class="token number">4.</span> Apply Nature journal stylistic conventions</span>
<span class="line"><span class="token number">5.</span> Verify the enhanced text maintains the original meaning</span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>process<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>output_format<span class="token operator">&gt;</span></span>
<span class="line">Present the enhanced text <span class="token keyword">in</span> full paragraphs<span class="token punctuation">,</span> maintaining appropriate academic structure<span class="token punctuation">.</span></span>
<span class="line">If the original text contains technical terminology<span class="token punctuation">,</span> preserve specialized terms <span class="token keyword">while</span> elevating surrounding language<span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>output_format<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)])])}const r=n(l,[["render",t]]),c=JSON.parse('{"path":"/ai/prompt/%E6%8F%90%E7%A4%BA%E8%AF%8D/%E8%AE%BA%E6%96%87%E4%BC%98%E5%8C%96%E6%8F%90%E7%A4%BA%E8%AF%8D.html","title":"论文优化提示词","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"ai/prompt/提示词/论文优化提示词.md"}');export{r as comp,c as data};
