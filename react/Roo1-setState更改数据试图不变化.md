# Roo1-setState更改数据试图不变化

1. 由于dataSource是list对象，如果采用如下方法，则只是操作引用：
```
  handleDataSource = () => {
    let temp = this.state.dataSource;    

    temp.push({
      id: 'qdleader',
    });

    this.setState({
      dataSource : temp,
    });

  }

```
temp.push其实就是相当于this.state.dataSource.push，引用没有改变，只是改变了引用指向的内存数据，
React认为虚拟DOM并没有改变，因此，不会重新渲染页面。这就会导致Table组件的dataSource改变了，但是Table并没有重新渲染。


2.更新代码如下：
```
  handleDataSource = () => {
    let temp = [...this.state.dataSource];    

    temp.push({
      id: 'qdleader',
    });

    this.setState({
      dataSource : temp,
    });

  }
```
重新建一个list对象，这时temp的引用和this.state.dataSource的引用不同，在this.setState方法中，React认为是改变了dataSource，因此会重新渲染页面。

3. 每次重新渲染Table时，Table的columns也会重新渲染。
