# MirageJS

MirageJS 是一个轻量级的 HTTP 请求模拟库，非常适合用于模拟后端 API。
示例：使用 MirageJS
首先，安装 MirageJS：

```js
npm install miragejs
```

然后，创建模拟代码：

```js
import { createServer } from "miragejs";

createServer({
  routes() {
    this.get("/api/items", (schema, request) => {
      // 模拟后端返回的数据
      const items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" },
        { id: 5, name: "Item 5" },
        { id: 6, name: "Item 6" },
        { id: 7, name: "Item 7" },
        { id: 8, name: "Item 8" },
        { id: 9, name: "Item 9" },
        { id: 10, name: "Item 10" },
      ];

      // 模拟分页逻辑
      const { page, pageSize } = request.queryParams;
      const startIndex = (page - 1) * pageSize;
      const endIndex = page * pageSize;
      const data = {
        items: items.slice(startIndex, endIndex),
        totalItems: items.length,
      };

      return data;
    });
  },
});
```

启动 MirageJS：

```bash
node mirage/server.js
```

现在你可以通过访问 http://localhost:5000/api/items?page=1&pageSize=10 来获取数据。
