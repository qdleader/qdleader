import{_ as n,c as s,a as l,o as i}from"./app-BKjY4pef.js";const a="/qdleader/assets/2-DtJQcKOI.jpg",t={};function d(c,e){return i(),s("div",null,e[0]||(e[0]=[l('<p><img src="'+a+`" alt=""></p><p>相关知识点</p><blockquote><p>1节点： 树中的每个元素称为一个节点</p></blockquote><blockquote><p>2根节点:位于整棵树顶点的节点，它没有父节点。</p></blockquote><blockquote><p>3子节点：其他节点的后代</p></blockquote><blockquote><p>4叶子节点：没有子节点的元素成为叶子节点</p></blockquote><blockquote><p>5二叉树：二叉树就是一种数据结构，它的组织关系就像自然界的树一样。官方的定义为：是一个有限元素的集合。该集合或者为空，或者由一个称为根的元素，及两个不相交的，被分别称为左子树和右子树的二叉树组成。</p></blockquote><blockquote><p>6二叉查找树：二叉查找树也叫二叉搜索树（BST）,它只允许我们在左节点存储比父节点更小的值，右节点存储比父节点更大的值，上图展示的就是一颗二叉查找树。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">1.首先创建一个类，表示二叉查找树。</span>
<span class="line"></span>
<span class="line">function BinarySearchTree() {</span>
<span class="line">	var Node = function(key) {</span>
<span class="line">		this.key = key;</span>
<span class="line">		this.left = null;</span>
<span class="line">		this.right = null</span>
<span class="line">	}</span>
<span class="line">	var root = null</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#向树中插入一个键</p><blockquote><p>向树中插入一个新的键，首页应该创建一个用来表示新节点的Node类实例，因此需要new一下Node类并传入需要插入的key值，它会自动初始化为左右节点为null的一个新节点</p></blockquote><blockquote><p>然后，需要做一些判断先判断树是否为空，若为空，新插入的节点就作为根节点，如不为空，调用一个辅助方法insertNode()方法，将根节点和新节点传入</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">this.insert = function (key) {</span>
<span class="line">	let newNode = new Node(key);</span>
<span class="line">	if(root === null) {</span>
<span class="line">		root = newNode</span>
<span class="line">	} else {</span>
<span class="line">		insertNode(root, newNode)</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>定义一下insertNode() 方法，这个方法会通过递归得调用自身，来找到新添加节点的合适位置</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">let insertNode = function(node, newNode) {</span>
<span class="line">	if(newNode.key &lt;= node.key) {</span>
<span class="line">		if(node.left === null) {</span>
<span class="line">			node.left = newNode</span>
<span class="line">		} else {</span>
<span class="line">			insertNode(node.left,newNode)</span>
<span class="line">		}</span>
<span class="line">	} else {</span>
<span class="line">		if(node.right === null) {</span>
<span class="line">			node.right = newNode</span>
<span class="line">		} else {</span>
<span class="line">			insertNode(node.right, newNode)</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未完待续。。。</p>`,16)]))}const r=n(t,[["render",d]]),o=JSON.parse('{"path":"/%E5%B8%B8%E8%A7%81%E7%AE%97%E6%B3%95/S011.js%E5%AE%9E%E7%8E%B0%E6%9F%A5%E6%89%BE%E6%A0%91.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1746588582000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"f53a9e30eceb36748e69fb1c3e69f877ff4e0264","time":1746588582000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加cursor vip使用及安装指南"}]},"filePathRelative":"常见算法/S011.js实现查找树.md"}');export{r as comp,o as data};
