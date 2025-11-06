
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: skyblue;
    }

    .box {
      font-size: 33px;
      width: 7.5em;
      height: 2.5em;
      background: linear-gradient(to right, gold, darkorange);
      color: white;
      text-align: center;
      line-height: 2.5em;
      font-family: sans-serif;
      letter-spacing: 0.2em;
      text-shadow: 6px 3px 2px rgba(0, 0, 0, 0.2);
      border: 1px solid darkgoldenrod;
      border-radius: 2em;
      box-shadow: 2px 0 0 5px rgba(0, 0, 0, 0.2);
      transform: perspective(500px) rotateY(-15deg);
      transition: 0.5s;
      position: relative;
      overflow: hidden;
    }

    .box:hover {
      transform: perspective(500px) rotateY(15deg);
      text-shadow: -6px 3px 2px rgba(0, 0, 0, 0.2);
      box-shadow: -2px 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .box::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, transparent, white, transparent);
      left: -100%;
      transition: 0.5s;
    }

    .box:hover::before {
      left: 100%;
    }
  </style>
  <body>
    <div class="box">BUTTON</div>
  </body>
</html>

```
