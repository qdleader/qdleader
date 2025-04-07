# chat 返回的表格样式修改不了

你直接 修改 table 的类名 滚动呀，样式是加不了的

## 解决方法：

1.  给 table 的父级加一个类名，然后给这个类名加样式

```js
 formatTable(table) {
      let wrapperElement = document.createElement('div');
      wrapperElement.classList.add('common-markdown-body-table-wrapper');
      table.parentNode.insertBefore(wrapperElement, table);
      wrapperElement.append(table);
    },
    formatTables() {
      let tables = Array.from(
        document.querySelectorAll('.markdown-box .table'),
      );
      tables.forEach((table) => {
        this.formatTable(table);
      });
    },
```
