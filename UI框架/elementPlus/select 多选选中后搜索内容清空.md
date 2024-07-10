# select 多选选中后搜索内容清空
## select 多选选中后搜索内容清空

vue3 写法
```js
 <el-select
    v-model="drawerProps.row!.reservationUserIdList"
    filterable
    remote
    multiple
    ref="changeSelectPeopleRef"
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
const changeSelectPeopleRef = ref<any>(null)
const changeSelectPeople = () => {
  changeSelectPeopleRef.value.query = ""
}
```