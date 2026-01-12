import{_ as s,c as a,a as e,o as l}from"./app-KfnfuIf0.js";const i={};function p(c,n){return l(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="langchain-python-推理后端-prompt" tabindex="-1"><a class="header-anchor" href="#langchain-python-推理后端-prompt"><span>LangChain Python 推理后端 Prompt</span></a></h1><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"></span>
<span class="line"># LangChain Python 推理后端的人工智能规则</span>
<span class="line"></span>
<span class="line">## 角色与专业领域</span>
<span class="line"></span>
<span class="line">您是 Python、LangChain、LangGraph 和可扩展 AI 应用开发方面的专家。您负责实现高质量的 AI 推理系统，遵循以下最佳实践指南。</span>
<span class="line"></span>
<span class="line">## RAG（检索增强生成）实现指南</span>
<span class="line"></span>
<span class="line">### 向量存储选择</span>
<span class="line"></span>
<span class="line">- **首选**<span class="token operator">:</span> 使用 <span class="token punctuation">[</span>FAISS<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//python.langchain.com/v0.2/docs/integrations/vectorstores/faiss/) 作为主要向量存储（在依赖项中包括 \`faiss-cpu\`）</span></span>
<span class="line">- **备选**<span class="token operator">:</span> 当 FAISS 不适用时，参考<span class="token punctuation">[</span>其他向量存储选项<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//python.langchain.com/v0.2/docs/integrations/vectorstores/)</span></span>
<span class="line"></span>
<span class="line">### RAG 开发流程</span>
<span class="line"></span>
<span class="line"><span class="token number">1</span>. 严格遵循 <span class="token punctuation">[</span>RAG 教程<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//python.langchain.com/v0.2/docs/integrations/retrievers/) 实现标准检索流程</span></span>
<span class="line"><span class="token number">2</span>. 实现透明的 LCEL 链作为首选方法，避免直接使用预构建的黑盒检索器</span>
<span class="line"><span class="token number">3</span>. 注意检索器返回的文档列表可能需要进一步处理（如使用 \`format_docs()\`）</span>
<span class="line"></span>
<span class="line">## Agent 系统开发</span>
<span class="line"></span>
<span class="line">### 核心框架</span>
<span class="line"></span>
<span class="line">使用 <span class="token punctuation">[</span>LangGraph<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//langchain-ai.github.io/langgraph/) 构建具有 LLM 的状态化多 actor 应用程序：</span></span>
<span class="line">- **简单场景**<span class="token operator">:</span> 使用<span class="token punctuation">[</span>预构建的 ReAct 代理<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//langchain-ai.github.io/langgraph/how-tos/create-react-agent/)</span></span>
<span class="line">- **复杂场景**<span class="token operator">:</span> 实现完整的 LangGraph 工作流程</span>
<span class="line"></span>
<span class="line">### 工具集成最佳实践</span>
<span class="line"></span>
<span class="line">- 优先使用 <span class="token punctuation">[</span>工具节点<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//langchain-ai.github.io/langgraph/how-tos/tool-calling/) 实现工具功能</span></span>
<span class="line">- 将 Tavily 作为首选搜索工具（在依赖项中包括 \`tavily-python\`）</span>
<span class="line">- 为兼容模型实现 <span class="token punctuation">[</span>结构化输出<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//python.langchain.com/v0.2/docs/how_to/structured_output/#the-with_structured_output-method)</span></span>
<span class="line"></span>
<span class="line">### 高级控制流程实现</span>
<span class="line"></span>
<span class="line">- <span class="token punctuation">[</span>创建子图<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//langchain-ai.github.io/langgraph/how-tos/subgraph/) 用于模块化功能</span></span>
<span class="line">- 使用<span class="token punctuation">[</span>分支功能<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//langchain-ai.github.io/langgraph/how-tos/branching/)实现并行执行</span></span>
<span class="line">- 实现<span class="token punctuation">[</span>map-reduce分支<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//langchain-ai.github.io/langgraph/how-tos/map-reduce/)用于并行数据处理</span></span>
<span class="line">- 设置正确的<span class="token punctuation">[</span>递归限制<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//langchain-ai.github.io/langgraph/how-tos/recursion-limit/#define-our-graph)防止无限循环</span></span>
<span class="line">- 创建 \`langgraph.json\` 清单文件，以确保与 LangGraph Studio 兼容</span>
<span class="line"></span>
<span class="line">### 项目结构规范</span>
<span class="line"></span>
<span class="line">- 不要在代理文件中放置主函数</span>
<span class="line">- 将 \`main.py\` 作为应用程序的统一入口点</span>
<span class="line"></span>
<span class="line">## 聊天机器人实现规范</span>
<span class="line"></span>
<span class="line">### 基础开发流程</span>
<span class="line"></span>
<span class="line"><span class="token number">1</span>. 严格遵循<span class="token punctuation">[</span>聊天机器人教程<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//python.langchain.com/v0.2/docs/tutorials/chatbot/)</span></span>
<span class="line"><span class="token number">2</span>. 实现内存组件以维护会话上下文</span>
<span class="line"><span class="token number">3</span>. 建立严格的输入验证和格式化输出机制</span>
<span class="line"></span>
<span class="line">## LangServe 集成与部署</span>
<span class="line"></span>
<span class="line">### 核心功能实现</span>
<span class="line"></span>
<span class="line">- 使用 <span class="token punctuation">[</span>LangServe<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//python.langchain.com/v0.2/docs/langserve/) 为推理逻辑创建 RESTful 接口</span></span>
<span class="line">- 实现完善的错误处理和输入验证机制</span>
<span class="line"></span>
<span class="line">### 测试与验证</span>
<span class="line"></span>
<span class="line">- 使用 <span class="token punctuation">[</span>LangServe Soak<span class="token punctuation">]</span>(https<span class="token operator">:</span><span class="token comment">//python.langchain.com/v0.2/docs/langserve/#client) 创建全面测试用例</span></span>
<span class="line">- 利用 LangServe 内置游乐场进行交互式测试与演示</span>
<span class="line"></span>
<span class="line">### 高级配置</span>
<span class="line"></span>
<span class="line">- 按需添加自定义中间件实现日志记录、CORS 或身份验证功能</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const o=s(i,[["render",p]]),r=JSON.parse('{"path":"/tool/cursor/cursor%20rules/other%20rules/LangChain%20Python%20%E6%8E%A8%E7%90%86%E5%90%8E%E7%AB%AF%20Prompt.html","title":"LangChain Python 推理后端 Prompt","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"tool/cursor/cursor rules/other rules/LangChain Python 推理后端 Prompt.md"}');export{o as comp,r as data};
