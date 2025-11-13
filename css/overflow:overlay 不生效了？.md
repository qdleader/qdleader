# overflow:overlay 不生效了？

## 解决方案
scrollbar-gutter: stable 就可以解决上述问题 ……

`scrollbar-gutter`，用于解决经典滚动条在网页布局中占据空间导致的布局变动问题。经典滚动条会挤压内容区域，而`scrollbar-gutter: stable`可以确保滚动条出现时不会改变布局，因为它预留了滚动条的空间。此外，`scrollbar-gutter: both-edges`可以实现两端对齐的布局。该特性目前在Chromium88+支持




以下是一个示例代码，展示了如何使用`scrollbar-gutter: stable`来确保滚动条出现时不会改变布局：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
      
    <style>
        .box {
            width: 300px;
            height: 300px;
            border: 1px solid #000;
            background-color: azure;
        }

        .overflow-auto {
            overflow: auto;
        }


        .scrollbar-gutter-auto {
            scrollbar-gutter: auto;
        }

        .scrollbar-gutter-stable {
            scrollbar-gutter: stable;
        }

        .scrollbar-gutter-stable-both {
            scrollbar-gutter: stable both-edges;
        }



    </style>
    
</head>
<body>
    <h1>CSS <code>scrollbar-gutter</code></h1>
    <section>
        <div>
            <p class="description"><code>overflow: auto;<br />scrollbar-gutter: auto;</code></p>
            <div class="box overflow-auto scrollbar-gutter-auto">
                <p>LqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderLqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderLqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleader</p>
            </div>
        </div>
        <div>
            <p class="description"><code>overflow: auto;<br />scrollbar-gutter: stable;</code></p>
            <div class="box overflow-auto scrollbar-gutter-stable">
                <p>LqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderLqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderLqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleader</p>
            </div>
        </div>
        <div>
            <p class="description"><code>overflow: auto;<br />scrollbar-gutter: stable both-edges;</code></p>
            <div class="box overflow-auto scrollbar-gutter-stable-both">
                <p>LqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderLqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderLqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleaderqdleader</p>
            </div>
        </div>
    </section>
</main>
    
</body>
</html>
```