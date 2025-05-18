import{_ as s,c as e,a as i,o as a}from"./app-CKfc45Zi.js";const l={};function t(d,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="commit时候报错" tabindex="-1"><a class="header-anchor" href="#commit时候报错"><span>commit时候报错</span></a></h1><p>commit时候报错，Oops! Something went wrong! :(提交不上去</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">$ git commit -m  &#39;修改打包配置&#39;</span>
<span class="line">husky &gt; pre-commit (node v14.15.4)</span>
<span class="line">Stashing changes... [started]</span>
<span class="line">Stashing changes... [skipped]</span>
<span class="line">→ No partially staged files found...</span>
<span class="line">Running linters... [started]</span>
<span class="line">Running tasks for src/**/*.{js,vue} [started]</span>
<span class="line">eslint --fix [started]</span>
<span class="line">eslint --fix [failed]</span>
<span class="line">→</span>
<span class="line">Running tasks for src/**/*.{js,vue} [failed]</span>
<span class="line">→</span>
<span class="line">Running linters... [failed]</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">× eslint --fix found some errors. Please fix them and try committing again.</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Oops! Something went wrong! :(</span>
<span class="line"></span>
<span class="line">ESLint: 5.15.3.</span>
<span class="line">ESLint couldn&#39;t find a configuration file. To set up a configuration file for this project, please run:</span>
<span class="line"></span>
<span class="line">eslint --init</span>
<span class="line"></span>
<span class="line">ESLint looked for configuration files in E:\\20201010project\\common_admin\\src\\utils and its ancestors. If it found none, it then looked in your home directory.</span>
<span class="line"></span>
<span class="line">If you think you already have a configuration file or if you need more help, please stop by the ESLint chat room: https://gitter.im/eslint/eslint</span>
<span class="line">husky &gt; pre-commit hook failed (add --no-verify to bypass)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决"><span>解决</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">git commit --no-verify -m &quot;添加登录名称配置&quot;  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,5)]))}const c=s(l,[["render",t]]),o=JSON.parse(`{"path":"/git/commit%E6%97%B6%E5%80%99%E6%8A%A5%E9%94%99.html","title":"commit时候报错","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1747530378000,"contributors":[{"name":"qdleader","username":"qdleader","email":"62106726+qdleader@users.noreply.github.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"35946fb0727bfe016751f2fe179132b69c4f3fda","time":1747530378000,"email":"62106726+qdleader@users.noreply.github.com","author":"前端架构师","message":"Merge branch 'master' of github.com:qdleader/qdleader"}]},"filePathRelative":"git/commit时候报错.md"}`);export{c as comp,o as data};
