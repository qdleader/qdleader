import{_ as n,c as a,a as e,o as l}from"./app-KfnfuIf0.js";const i={};function p(c,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1、插入命令" tabindex="-1"><a class="header-anchor" href="#_1、插入命令"><span>1、插入命令</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">         <span class="token literal-property property">i</span> <span class="token operator">:</span>在当前位置生前插入</span>
<span class="line"></span>
<span class="line">         <span class="token constant">I</span> <span class="token operator">:</span>在当前行首插入</span>
<span class="line"></span>
<span class="line">         <span class="token constant">A</span><span class="token operator">:</span>在当前行尾插入</span>
<span class="line"></span>
<span class="line">         <span class="token literal-property property">a</span> <span class="token operator">:</span> 在当前位置后插入</span>
<span class="line"></span>
<span class="line">         <span class="token literal-property property">o</span> <span class="token operator">:</span> 在当前行之后插入一行</span>
<span class="line"></span>
<span class="line">         <span class="token constant">O</span>：在当前行之前插入一行</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-查找命令" tabindex="-1"><a class="header-anchor" href="#_2-查找命令"><span>2：查找命令</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">         <span class="token operator">/</span>text：查找text，按n健查找下一个，按<span class="token constant">N</span>健查找前一个。</span>
<span class="line"></span>
<span class="line">        <span class="token operator">?</span>text：查找text，反向查找，按n健查找下一个，按<span class="token constant">N</span>健查找前一个。</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line">六、移动命令（皆可和数字匹配用）</span>
<span class="line"></span>
<span class="line">         h  左移一个字符（20h 左移<span class="token number">20</span>个字符）</span>
<span class="line"></span>
<span class="line">         l   右移一个字符，这个命令很少用，一般用w代替</span>
<span class="line"></span>
<span class="line">         k  上移一个字符</span>
<span class="line"></span>
<span class="line">         j   下移一个字符</span>
<span class="line"></span>
<span class="line">         w  向前移动一个单词（光标停在单词首部），如果已到行尾，则转至下一行行首。此命令快，可以代替l命令</span>
<span class="line"></span>
<span class="line">         b 向后移动一个单词  2b 向后移动<span class="token number">2</span>个单词</span>
<span class="line"></span>
<span class="line">         e 同w，只不过是光标停在单词尾部</span>
<span class="line"></span>
<span class="line">         ge 同b<span class="token punctuation">,</span>光标停在单词尾部</span>
<span class="line"></span>
<span class="line">         <span class="token operator">^</span> 移动到本行第一个非空白字符上。</span>
<span class="line"></span>
<span class="line">         <span class="token number">0</span>（数字<span class="token number">0</span>）移动到本行第一个字符上，</span>
<span class="line"></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token constant">HOME</span><span class="token operator">&gt;</span> 移动到本行第一个字符。同<span class="token number">0</span>健。</span>
<span class="line"></span>
<span class="line">        $ 移动到行尾 3$ 移动到下面<span class="token number">3</span>行的行尾</span>
<span class="line"></span>
<span class="line">        gg 移动到文件头。 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span></span>
<span class="line"></span>
<span class="line">        <span class="token constant">G</span>（shift <span class="token operator">+</span> g） 移动到文件尾。 <span class="token operator">=</span> <span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">        f（find）命令也可以用于移动，fx将找到光标后第一个为x的字符，3fd将找到第三个为d的字符。</span>
<span class="line"></span>
<span class="line">        <span class="token constant">F</span> 同f，反向查找。跳到指定行，冒号<span class="token operator">+</span>行号，回车，比如跳到<span class="token number">240</span><span class="token literal-property property">行是</span><span class="token operator">:</span><span class="token number">240</span>回车。另一个方法是行号<span class="token operator">+</span><span class="token constant">G</span>，比如230G跳到<span class="token number">230</span>行。</span>
<span class="line"></span>
<span class="line">        Ctrl <span class="token operator">+</span> e 向下滚动一行</span>
<span class="line"></span>
<span class="line">        Ctrl <span class="token operator">+</span> y 向上滚动一行</span>
<span class="line"></span>
<span class="line">        Ctrl <span class="token operator">+</span> d 向下滚动半屏</span>
<span class="line"></span>
<span class="line">        Ctrl <span class="token operator">+</span> u 向上滚动半屏</span>
<span class="line"></span>
<span class="line">        Ctrl <span class="token operator">+</span> f 向下滚动一屏</span>
<span class="line"></span>
<span class="line">        Ctrl <span class="token operator">+</span> b 向上滚动一屏</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3：撤销和重做</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">       u:撤销（Undo）</span>
<span class="line"></span>
<span class="line">      U:撤销对整行的操作</span>
<span class="line"></span>
<span class="line">      Ctrl+r重做（Redo），即撤销的撤销</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-删除命令" tabindex="-1"><a class="header-anchor" href="#_4-删除命令"><span>4：删除命令</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">       x 删除当前字符dl <span class="token operator">--</span><span class="token operator">-</span>删除当前字符，dl<span class="token operator">=</span>x</span>
<span class="line"></span>
<span class="line">       3x 删除当前光标开始向后三个字符</span>
<span class="line"></span>
<span class="line">       <span class="token constant">X</span> 删除当前字符的前一个字符。<span class="token constant">X</span><span class="token operator">=</span>gh</span>
<span class="line"></span>
<span class="line">       dh 删除前一个字符</span>
<span class="line"></span>
<span class="line">       dd 删除当前行</span>
<span class="line"></span>
<span class="line">       dj 删除上一行</span>
<span class="line"></span>
<span class="line">       dk 删除下一行</span>
<span class="line"></span>
<span class="line">      10d 删除当前行开始的<span class="token number">10</span>行。</span>
<span class="line"></span>
<span class="line">      <span class="token constant">D</span> 删除当前字符至行尾。<span class="token constant">D</span><span class="token operator">=</span>d$</span>
<span class="line"></span>
<span class="line">      d$ 删除当前字符之后的所有字符（本行）</span>
<span class="line"></span>
<span class="line">       kdgg 删除当前行之前所有行（不包括当前行）</span>
<span class="line"></span>
<span class="line">       jdG（jd shift <span class="token operator">+</span> g）   删除当前行之后所有行（不包括当前行）</span>
<span class="line"></span>
<span class="line">       <span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>10d 删除<span class="token number">1</span><span class="token operator">-</span><span class="token number">10</span><span class="token literal-property property">行</span></span>
<span class="line"></span>
<span class="line">       <span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">,</span>$d 删除<span class="token number">11</span><span class="token literal-property property">行及以后所有的行</span></span>
<span class="line"></span>
<span class="line">       <span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>$d 删除所有行</span>
<span class="line"></span>
<span class="line">       <span class="token constant">J</span><span class="token punctuation">(</span>shift <span class="token operator">+</span> j<span class="token punctuation">)</span>　　删除两行之间的空行，实际上是合并两行。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-退出命令" tabindex="-1"><a class="header-anchor" href="#_5-退出命令"><span>5：退出命令</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">      :wq 保存并退出</span>
<span class="line"></span>
<span class="line">      ZZ 保存并退出</span>
<span class="line"></span>
<span class="line">     :q! 强制退出并忽略所有更改</span>
<span class="line"></span>
<span class="line">     :e! 放弃所有修改，并打开原来文件。</span>
<span class="line">\`\`\`js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)])])}const r=n(i,[["render",p]]),t=JSON.parse('{"path":"/node/vim%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768183010000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"c3ab6d103d428cdd6a361e045add7154fc9253f1","time":1768183010000,"email":"yk4545945@163.com","author":"qdleader","message":"docs(mcp): 新增Mastergo MCP配置文档，包含token获取方法"}]},"filePathRelative":"node/vim常用命令.md"}');export{r as comp,t as data};
