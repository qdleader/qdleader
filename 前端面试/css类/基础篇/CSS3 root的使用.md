# CSS3 root 的使用

## 什么是 :root

:root 选择器是一个特殊的选择器，它匹配文档的根元素。在 HTML 文档中，根元素通常是 html 标签。使用 :root 选择器时，我们可以设置一些全局样式，特别是 CSS 变量，这些变量可以在整个文档中被引用。
示例

```css
:root {
  --main-color: #3498db;
  --font-size: 16px;
}
```

在这个例子中，我们定义了两个 CSS 变量 --main-color 和 --font-size。这些变量可以在后续的样式中被引用：

```css
body {
  font-size: var(--font-size);
  color: var(--main-color);
}
```

### 2. 使用 :root 的好处

#### 2.1 全局变量管理

使用 :root 定义 CSS 变量可以方便地进行全局管理。当我们需要在整个应用中更改主题颜色或字体大小时，只需在 :root 中修改一次，所有引用这些变量的样式都会自动更新。

#### 2.2 代码可读性

通过使用 CSS 变量，我们可以使代码更加清晰和易于维护。例如，使用具有意义的变量名可以让其他开发者一眼就能看出这些变量的用途，而不需要追踪每个具体的值。

```css
:root {
  --primary-bg-color: #ffffff;
  --secondary-bg-color: #f0f0f0;
}

.header {
  background-color: var(--primary-bg-color);
}

.footer {
  background-color: var(--secondary-bg-color);
}
```

#### 2.3 主题切换

通过修改 CSS 变量的值，我们可以轻松实现主题切换功能。只需更新 :root 中的变量值，所有引用这些变量的样式都会自动更新。

```css
:root {
  --primary-color: #3498db;
  --background-color: #ffffff;
}

body {
  color: var(--primary-color);
  background-color: var(--background-color);
}

/* 主题切换 */
body.dark-theme {
  --primary-color: #ffffff;
  --background-color: #3498db;
}
```

#### 2.4 响应式设计

结合媒体查询，我们可以根据不同的视口尺寸改变 CSS 变量的值，从而实现响应式设计：

```css
:root {
  --font-size: 16px;
}

@media (max-width: 600px) {
  :root {
    --font-size: 14px;
  }
}

body {
  font-size: var(--font-size);
}
```

#### 2.5 变量的作用域

CSS 变量的作用域与常规的 CSS 选择器相同。虽然我们可以在 :root 中定义全局变量，但也可以在特定的选择器中定义局部变量。局部变量的优先级会高于全局变量，这意味着同名的局部变量会覆盖全局变量。

变量的作用域

```css
:root {
  --main-color: blue;
}

.button {
  --main-color: red; /* 局部变量 */
  color: var(--main-color); /* 使用局部变量，结果为红色 */
}

.link {
  color: var(--main-color); /* 使用全局变量，结果为蓝色 */
}
```

## 3.3 变量的动态性

CSS 变量是动态的，这意味着如果我们在 JavaScript 中修改了 CSS 变量的值，样式会即时更新。这在实现动态主题切换或响应用户操作时非常有用。

```js
document.documentElement.style.setProperty("--main-color", "#e74c3c");
```
