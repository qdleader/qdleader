# element-ui 动态表单规则，初始化规则报红提示解决

今天在做一个动态表单规则的需求, 但是赋值给rules规则值之后，初始化的时候或者更改rules，表单就会立即检验报红。

解决办法如下两种：（推荐使用第一种）

第一种：通过form组件属性配置解决（validate-on-rule-change="false"）

  该属性是 是否在 rules 属性改变后立即触发一次验证, 我们配置成false，就不会立即触发了
```js
<el-form ref="ruleFormRef" class="formDom" :model="ruleForm" :rules="rules" label-width="180px" :validate-on-rule-change="false">
    <el-form-item label="起止日期">
        <el-form-item prop="date1">
            <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-form-item>
    </el-form-item>
</el-form>
```

第二种：通过js解决

```js
const rules: any = ref({
  date1: [
    { required: true, message: "请选择开始日期", trigger: "change" }
  ],
})

const ruleFormRef = ref<FormInstance>()

 setTimeout(() => {
    ruleFormRef.value!.clearValidate()
}, 0)

```
