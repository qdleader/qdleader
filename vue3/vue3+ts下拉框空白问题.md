
vue3 + ts + elementplus 项目  下拉框空白问题

直接渲染下拉框内容


本地可以，线上下拉为空白

```
<el-select v-model="form.display_type" placeholder="请选择展演类别">
    <el-option v-for="item in catData" :label="item.label" :value="item.value" :key="item.value"></el-option>
 </el-select>



catData:[],




```



## 解决方式


在onMounted 重新赋下值即可
```
initData:() => {
    data.feeList = [
        {
            value:"1",
            label:'已缴费'
        },
        {
            value:"0",
            label:'未交费'
        }
    ]
    data.examine = [
        {
            value:"0",
            label:'未审核'
        },
        {
            value:"1",
            label:'审核通过'
        },
        {
            value:"2",
            label:'审核未通过'
        },
    ]
}
})

onMounted(() => {
    data.initData();
})
```

在子组件中 有时候onmounted 里面也不生效，在异步中 重新赋下值即可
