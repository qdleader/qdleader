# position: fixed 会失效吗？

1. transform 属性值不为 none 的元素

2. perspective 值不为 none 的元素

3. 在 will-change 中指定了任意 CSS 属性

4. filter 属性非 none 时

MDN -- fixed 属性会创建新的层叠上下文。当元素祖先的 transform、perspective、filter 或 backdrop-filter 属性非 none 时，容器由视口改为该祖先。
