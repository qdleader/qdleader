
##V003-beforeDestory里面一般进行什么操作

beforedestoryed是组件销毁之前执行的一个生命周期，在这个生命周期里，我们可以进行回调函数或定时器的清
<br/>
①解绑自定义事件 event.$off
②消除定时器
③解绑自定义的DOM事件 如window.scroll等

日期在我点击查询的时候要存储,刷新就读内存,但是我点击其他页面再进来的时候,这个内存要清空

<!-- 搜索时候存储 -->
```
search(){
      let time = { 
        start: this.formSearch.beginSearchTime,
        end: this.formSearch.endSearchTime,
        timeRange: this.formSearch.timeRange,
        page: this.formSearch.page
      }
      localStorage.setItem('initTime',JSON.stringify(time))
    }
```

<!-- 刷新时候判断有没有搜索过，有的话直接在缓存中取 -->
```
 created () {  
    let searchCarTime = JSON.parse(localStorage.getItem('initTime'))
    if (searchCarTime) {
      this.formSearch.beginSearchTime = searchCarTime.start
      this.formSearch.endSearchTime = searchCarTime.end,
      this.formSearch.timeRange = searchCarTime.timeRange 
      this.formSearch.page = searchCarTime.page 
    }
  },
```


<!-- 离开页面时候销毁 -->
```
 beforeDestroy(){
    localStorage.removeItem('initTime')
  }
```