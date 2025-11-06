# 获取cascasder的选中值label
```js
<el-cascader
  ref="refSubCat"
  v-model="areas"
  placeholder="选择地区筛选"
  :options="areaOpts"
  popper-class="select-pop"
  :props="{label: 'name', value: 'id'}"
  change-on-select
  @change="areaChange"
/>

areaChange(data) {
  console.log("地区", data);
  console.log(this.$refs["refSubCat"].getCheckedNodes()[0].label);
},
```

// this.$refs["refSubCat"].getCheckedNodes()  里面可以找你需要的一切
