# select 多选选中后搜索内容清空

vue cli + vue3 写法
```js
 <el-select
    v-model="drawerProps.row!.reservationUserIdList"
    filterable
    remote
    multiple
    ref="changeSelectRef"
    @change="changeSelectPeople"
>
    <el-option
        :label="item.name"
        :value="item.id"
        v-for="(item, index) in inviteArr"
        :key="index"
    />
</el-select>
```

```js
const changeSelectRef = ref<any>(null)
const changeSelectPeople = () => {
  changeSelectRef.value.query = ""
}
```

vite + vue3 中 除了 上述写法还需要加  :reserve-keyword="false"

```js
  <el-select
    v-model="formData.modelValue"
    reserve-keyword
    filterable
    multiple
    remote
    :remote-method="fetchData"
    ref="changeSelectRef"
    @change="handleChange"
  >
```
