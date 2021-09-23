
```
<ul class="dialogChangeNum-con-ul">
       <el-form
         ref="ruleForm"
         :model="ruleForm"
         :rules="rules"
       >
         <li
           v-for="(item,idx) in ruleForm.arr"
           :key="idx"
         >
             <el-form-item
               label="材料用量："
               :rules="rules.checkedSelectRule(idx)"
               :prop="`arr`"
             >
               <el-input v-model="item.value" />
               &nbsp;件
             </el-form-item>
         </li>
       </el-form>
     </ul>

```
```
ruleForm: {
  usage: "",
   arr:[{value:''},{value:''}],// form 列表
},
rules: {
  checkedSelectRule(idx) {
    return [
      {
        validator: (rule, value, callback) => {
          // console.log("rule, value, callback",rule, value, callback)
          console.log("value",value,rule)
          console.log("idx",idx)
          console.log("value[idx]",value[idx])
          let name = value[idx].value
           if (!name) {
              return callback(new Error("材料用量不能为空"));
            }
           if (isNaN(name)) {
            callback(new Error("请输入数字值"));
          } else {
            if (name.toString().split(".")[1]) {
              let num = name.toString().split(".")[1].length;
              if (num > 2) {
                callback(new Error("小数点后最多两位"));
              }
            }
            if (name < 0) {
              callback(new Error("请输入大于0的数值"));
            } else {
              callback();
            }
          }
        },
        trigger: ["blur", "change"]
      }
    ];
  }
},
```
