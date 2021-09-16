

## 改变的props数据是基本类型

> 如果修改的是基本类型，则会报错

```
props: {
    num: Number,
  }
created() {
    this.num = 999
  }


```


## 改变的props数据是引用类型

```
props: {
    item: {
      default: () => {},
    }
  }
created() {
    // 不报错，并且父级数据会跟着变
    this.item.name = 'qdleader';

    // 会报错，跟基础类型报错一样
    this.item = 'sss'
  },


```
