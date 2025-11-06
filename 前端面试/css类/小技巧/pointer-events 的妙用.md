
# pointer-events 的妙用

如果我现在有个图片，在图片区域下方（重叠那种上下，不是二维的上下）是一些操作按钮，但是按钮在该区域下方，不能显示出来，怎么能够点击到按钮呢？

那如果按钮和图片所在标签不是父子节点关系呢，没有这层关系，你就不能使用事件冒泡了，此时怎么处理？

原来一个css属性就搞定了：pointer-events: none; 

pointer-events是一个CSS属性，它定义了在何种情况下元素可以成为鼠标事件（或触摸事件）的目标。这个属性可以控制元素是否可以被点击、是否可以触发鼠标事件，或者是否应该忽略鼠标事件，让事件传递给下面的元素。

## 使用场景

pointer-events属性主要用于以下几种场景：

> None: 元素不会成为鼠标事件的目标。例如，如果想让一个元素透明对用户的点击，可以将其pointer-events设置为none。
> Auto: 默认值。元素正常响应鼠标事件。
> VisiblePainted: 元素仅在可见部分响应鼠标事件。
> 
其他值: 还有一些其他值用于SVG元素，如visibleFill, visibleStroke, painted, 等。

把mask当做一张图片，为了方便展示，为其设置了透明度，这样能看到具体按钮位置和展示层级关系。正常情况下点击按钮是不会触发click事件的，因为mask的层级更高，完全遮住了按钮，鼠标只会点击到mask，但若此时为其加上pointer-events: none属性，点击事件会“穿透”该元素并可触发下面元素的事件，即按钮点击事件就可以被触发了！！！

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  .outer{
    position: relative;
    width: 200px;
    height: 200px;
  }
  .mask{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, .7);
    pointer-events: none; /* 重要 */
  }
</style>
<body>
  <div class="outer">
    <div class="mask"></div>
    <button id="btn">click</button>
  </div>
  <script>
    const btn = document.getElementById('btn')
    btn.addEventListener('click', function(e){
      console.log('click');
    })
  </script>
</body>
</html>

```
