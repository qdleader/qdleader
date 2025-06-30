# css 动态主题切换

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      :root {
        --primary-color: #4361ee;
        --background-color: #fff;
        --text-color: #1a1a2e;
      }

      .dark-mode {
        --primary-color: #4cc9f0;
        --background-color: #1a1a2e;
        --text-color: #f8f9fa;
      }

      body {
        background-color: var(--background-color);
        color: var(--text-color);
        transition: all 0.3s ease;
      }

      button {
        background-color: var(--primary-color);
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <button onclick="toggleTheme()">切换主题</button>
    <script>
      function toggleTheme() {
        document.body.classList.toggle("dark-mode");
      }
    </script>
  </body>
</html>
```
