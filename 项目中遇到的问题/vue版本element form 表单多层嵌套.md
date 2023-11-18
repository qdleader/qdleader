```ts
<el-drawer v-model="drawerVisible" :destroy-on-close="true" size="100vw" :title="`${drawerProps.title}`">
    <el-form
      ref="ruleFormRef"
      label-width="140px"
      width="800px"
      label-suffix=" :"
      :rules="rules"
      :disabled="drawerProps.isView"
      :model="drawerProps.row"
      :hide-required-asterisk="drawerProps.isView"
    >
      <div class="formContent">
        <div class="formContentBox" v-for="(domain, index) in drawerProps.row!.formContent" :key="index">
          <div class="formContentTopLine">
            <el-row>
              <el-col :span="2">
                <el-button
                  :icon="Delete"
                  v-show="drawerProps.row!.formContent?.length > 1"
                  @click.prevent="removeDomain(domain)"
                ></el-button>
              </el-col>
            </el-row>
          </div>
          <el-form-item
            label="问题描述"
            :prop="'formContent.' + index + '.fieldName'"
            :rules="{
              required: true,
              message: '输入内容不能为空',
              trigger: 'blur'
            }"
          >
            <el-input
              maxlength="50"
              v-model="domain.fieldName"
              :disabled="domain.sysDefaultFieldId && domain.sysDefaultFieldId != ''"
            />
          </el-form-item>
        
          <el-form-item label="选项内容" >
            <el-button
              text
              class="textColor"
              @click="addOptions(domain)"
              :disabled="domain.sysDefaultFieldId && domain.sysDefaultFieldId != ''"
              >添加一个选项</el-button
            >
          </el-form-item>
          <div v-for="(item1, index1) in domain?.fieldOption" :key="index1">
            <el-row>
              <el-col :span="16"
                ><el-form-item
                  :label="'选项' + (index1 + 1)"
                  :prop="'formContent.' + index + '.fieldOption.' + index1"
                  :rules="{
                    required: true,
                    message: '选项内容不能为空',
                    trigger: 'blur'
                  }"
                >
                  <el-input
                    maxlength="20"
                    v-model="domain.fieldOption[index1]"
                    :disabled="domain.sysDefaultFieldId && domain.sysDefaultFieldId != ''"
                  /> </el-form-item
              ></el-col>
              <el-col :span="4">
                <el-button
                  :icon="Close"
                  link
                  size="large"
                  v-show="domain?.fieldOption?.length > 1"
                  :disabled="domain.sysDefaultFieldId && domain.sysDefaultFieldId != ''"
                  @click.prevent="removeDomainSingle(domain, index1)"
                ></el-button>
              </el-col>
            </el-row>
          </div>
        </div>
        <el-form-item>
          <el-button @click="addDomain(3)" type="primary">单行文本</el-button>
          <el-button @click="addDomain(1)" type="primary">单选题</el-button>
          <el-button @click="addDomain(2)" type="primary">多选题</el-button>
      </div>

     
    </el-form>

    ```

    ```
    const drawerProps = ref<DrawerProps>({
  isView: false,
  title: "",
  formSysFieldArr: [],
  row: {
    formContent: [
      {
        fieldOption: []
      }
    ]
  }
});
// 删除题目
const removeDomain = (item: any) => {
  const index = drawerProps.value.row!.formContent.indexOf(item);
  console.log(111, item, index);
  if (index !== -1) {
    drawerProps.value.row!.formContent.splice(index, 1);
    drawerProps.value.row!.formSysDefaultFields = drawerProps.value.row!.formSysDefaultFields?.filter((item1: any) => {
      return item1 != item.sysDefaultFieldId;
    });
  }
};
// 删除选项
const removeDomainSingle = (item: any, index: number) => {
  item.fieldOption.splice(index, 1);
};
const addDomain = (fieldType: number) => {
  console.log("type", fieldType);
  drawerProps.value.row!.formContent.push({
    fieldType: fieldType,
    isRequired: false,
    fieldName: "",
    fieldOption: [],
    fieldDescription: "",
    key: Date.now()
  });
};
const addOptions = (item: any) => {
  if (item.fieldOption && item.fieldOption.length) {
    item.fieldOption?.push("");
  } else {
    item.fieldOption = [""];
  }
  ```



    ## 案例2

```ts

    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
 
  <el-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'域名' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
  >
    <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
    <el-button @click="addDomain">新增域名</el-button>
    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>
　
```

　其中动态表单校验中用到了:prop="'domains.' + index + '.value'"  而domains 是一个数组。  常规来说这么写相当于是 domains.1.value 的写法,但这种写法肯定是有问题的。没看源码不是很理解这样的链式操作。

感觉:prop="'domains.' + index + '.value'"  这种写法错误的  会换成 :prop="'domains[' + index + '].value'"  这种写法, 其实看了源码之后才明白 这两种写法都是正确的 
1 . prop 接收的数据类型是String ,

2. :prop="'domains.' + index + '.value'"  和  :prop="'domains[' + index + '].value'"    这两种传值最终都是转换成了 domains.0.value  字符串，这是一个字符串 而不是通过 domains.0 来取domains数组的第一个元素