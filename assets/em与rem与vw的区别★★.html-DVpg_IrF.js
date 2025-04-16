import{_ as p,c as a,a as m,o as t}from"./app-DFnxdJ0h.js";const n={};function s(r,e){return t(),a("div",null,e[0]||(e[0]=[m(`<h1 id="em与rem的区别★★" tabindex="-1"><a class="header-anchor" href="#em与rem的区别★★"><span>em与rem的区别★★</span></a></h1><p>首先em 的特点呢</p><blockquote><p>1 em 值并不是固定的 2.em 会继承父级元素字体的大小</p></blockquote><p>em 在使用时候</p><p>body 声明font-size= 62.5% 然后将原来的px值除10，就是对应的多少em了，但是当你父集设置了1.2em时候，父集中的字体显示确实是12px，</p><p>但子集再设置1.2em时候，会发现，子集的字体比12px大多了。</p><p>这是因为：</p><p>em的值不是固定的，会继承父元素的大小。 浏览器默认都是1em = 16px</p><p>这个em值继承其父级元素body的大小，也就是16px * 62.5% * 1.2=12px, 而其子级，em则继承父集的字体高，也就是12px。所以p的1.2em就不再是12px，而是14.4px。</p><p>重新计算那些被放大的字体的em数值。避免字体大小的重复声明，也就是避免以上提到的1.2 * 1.2= 1.44的现象。比如说你在#content中声明了字体大小为1.2em，那么在声明p的字体大小时就只能是1em，而不是1.2em, 因为此em非彼em，它因继承#content的字体高而变为了1em=12px。</p><p>em 在字体首行空两个字符处</p><p>在 中文的文章中，一般会在段首空两格。如果用px作为单位，对12px字体来说需要空出24px，对14px字体来说需要空出28px……这样换算非常不通 用。如果用上em单位，这个问题就很好解决了，1个字的大小就是1em，那两个字的大小就是2em。因此，只需这样定义就行了：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">text-indent:2em</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="rem特点" tabindex="-1"><a class="header-anchor" href="#rem特点"><span>rem特点</span></a></h2><p>区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应</p><p>使用时候，直接设置html为 font-size 100px，里面rem直接就是你量的px除100，就是对应的rem，不会受父集元素影响。</p><h2 id="vw" tabindex="-1"><a class="header-anchor" href="#vw"><span>vw</span></a></h2><p>vw viewpoint width 是相对于窗口的宽度的单位。 vh viewpoint height 是相对于窗口高度的单位。</p><p>vw : 1vw 等于视窗宽度的1% vh : 1vh 等于视窗高度的1%</p><p>vmin：vw和vh中较小的那个。 vmax：vw和vh中较大的那个。</p><h2 id="dvh" tabindex="-1"><a class="header-anchor" href="#dvh"><span>dvh</span></a></h2><p>单位dvh反映当前视口高度。[与单元vh]不同，该单元不包括用户代理的界面，并随着当前视口高度的变化而更新。 单位dvh反映了用户代理的界面当前占用了多少垂直视口高度。例如，当您在移动设备上向下滚动页面时，这将发生变化，因为移动 URL 栏会移出您的屏幕。</p><p>单位dvw反映用户可见的当前视口宽度。该值是动态的，因此将根据当前视口宽度而变化。</p><p>px：绝对单位，页面按精确像素展示</p>`,24)]))}const i=p(n,[["render",s]]),h=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/css%E7%B1%BB/em%E4%B8%8Erem%E4%B8%8Evw%E7%9A%84%E5%8C%BA%E5%88%AB%E2%98%85%E2%98%85.html","title":"em与rem的区别★★","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"前端面试/css类/em与rem与vw的区别★★.md"}');export{i as comp,h as data};
