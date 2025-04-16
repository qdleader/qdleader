import{_ as s,c as a,a as e,o as i}from"./app-DFnxdJ0h.js";const l={};function d(u,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="b-002经典闭包★★" tabindex="-1"><a class="header-anchor" href="#b-002经典闭包★★"><span>B-002经典闭包★★</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">function fun(n,o) {</span>
<span class="line">  console.log(o)</span>
<span class="line">  return {</span>
<span class="line">    fun: function(m) {</span>
<span class="line">      return fun(m,n)</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">var a = fun(0); a.fun(1); a.fun(2); a.fun(3)</span>
<span class="line"></span>
<span class="line">var b = fun(0).fun(1).fun(2).fun(3)</span>
<span class="line"></span>
<span class="line">var c = fun(0).fun(1); c.fun(2); c.fun(3)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案：</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">var a = fun(0);a.fun(1);a.fun(2);a.fun(3)  //undefined 0 0 0</span>
<span class="line">var b = fun(0).fun(1).fun(2).fun(3)   //undefined 0 1 2</span>
<span class="line">var c = fun(0).fun(1);c.fun(2);c.fun(3) //undefined 0 1 1</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">第一行var a = fun(0);a.fun(1);a.fun(2);a.fun(3)  </span>
<span class="line"></span>
<span class="line">可以得知，第一个fun(0)是在调用第一层fun函数。第二个fun(1)是在调用前一个fun的返回值的fun函数，所以：</span>
<span class="line"></span>
<span class="line">第后面几个fun(1),fun(2),fun(3),函数都是在调用第二层fun函数。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">在第一次调用fun(0)时，o为undefined；</span>
<span class="line"></span>
<span class="line">第二次调用fun(1)时m为1，此时fun闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层fun函数fun(1,0);所以o为0；</span>
<span class="line"></span>
<span class="line">第三次调用fun(2)时m为2，但依然是调用a.fun，所以还是闭包了第一次调用时的n，所以内部调用第一层的fun(2,0);所以o为0</span>
<span class="line"></span>
<span class="line">第四次同理；</span>
<span class="line"></span>
<span class="line">即：最终答案为undefined,0,0,0</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">2、第二行var b = fun(0).fun(1).fun(2).fun(3)</span>
<span class="line"></span>
<span class="line">var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?</span>
<span class="line">先从fun(0)开始看，肯定是调用的第一层fun函数；而他的返回值是一个对象，所以第二个fun(1)调用的是第二层fun函数，后面几个也是调用的第二层fun函数。</span>
<span class="line"></span>
<span class="line">在第一次调用第一层fun(0)时，o为undefined；</span>
<span class="line"></span>
<span class="line">第二次调用 .fun(1)时m为1，此时fun闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层fun函数fun(1,0);所以o为0；</span>
<span class="line"></span>
<span class="line">第三次调用 .fun(2)时m为2，此时当前的fun函数不是第一次执行的返回对象，而是第二次执行的返回对象。而在第二次执行第一层fun函数时时(1,0)所以n=1,o=0,返回时闭包了第二次的n，遂在第三次调用第三层fun函数时m=2,n=1，即调用第一层fun函数fun(2,1)，所以o为1；</span>
<span class="line"></span>
<span class="line">第四次调用 .fun(3)时m为3，闭包了第三次调用的n，同理，最终调用第一层fun函数为fun(3,2)；所以o为2；</span>
<span class="line"></span>
<span class="line">即最终答案：undefined,0,1,2</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line">3、第三行 c = fun(0).fun(1);c.fun(2);c.fun(3)</span>
<span class="line"></span>
<span class="line">根据前面两个例子，可以得知：</span>
<span class="line"></span>
<span class="line">fun(0)为执行第一层fun函数，.fun(1)执行的是fun(0)返回的第二层fun函数，这里语句结束，遂c存放的是fun(1)的返回值，而不是fun(0)的返回值，所以c中闭包的也是fun(1)第二次执行的n的值。c.fun(2)执行的是fun(1)返回的第二层fun函数，c.fun(3)执行的也是fun(1)返回的第二层fun函数。</span>
<span class="line"></span>
<span class="line">在第一次调用第一层fun(0)时，o为undefined；</span>
<span class="line"></span>
<span class="line">第二次调用 .fun(1)时m为1，此时fun闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层fun函数fun(1,0);所以o为0；</span>
<span class="line"></span>
<span class="line">第三次调用 .fun(2)时m为2，此时fun闭包的是第二次调用的n=1，即m=2，n=1，并在内部调用第一层fun函数fun(2,1);所以o为1；</span>
<span class="line"></span>
<span class="line">第四次.fun(3)时同理，但依然是调用的第二次的返回值，遂最终调用第一层fun函数fun(3,1)，所以o还为1</span>
<span class="line"></span>
<span class="line">即最终答案：undefined,0,1,1</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const p=s(l,[["render",d]]),v=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/js%E7%B1%BB/%E9%97%AD%E5%8C%85%E7%B1%BB/B-002%E7%BB%8F%E5%85%B8%E9%97%AD%E5%8C%85.html","title":"B-002经典闭包★★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/js类/闭包类/B-002经典闭包.md"}');export{p as comp,v as data};
