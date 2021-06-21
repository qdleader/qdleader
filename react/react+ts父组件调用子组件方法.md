父组件
```
child: any = {}  //主要加这个
onRef = (ref: any) => {
    this.child = ref
}
showEditAdminModal = (admin?: IAdmin) => {
    // 调用子组件
    this.child.getEnableProvinces()
 }


 <ChangeArea
          onRef={this.onRef}
          visible={this.state.showEditAdminModal}
          cancel={this.hideEditAdminModal}
      />
```


子组件

```
interface IProps {
    visible: boolean
    cancel: (refresh?: boolean) => void
    onRef: (ref: any) => void
}

componentDidMount() {
    this.props.onRef(this)
}

getEnableProvinces() {

}
```
