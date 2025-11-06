# 常见的一些review问题
## if else switch

```js
if(!values.username){
    this.$message.error("用户名不能为空")
} else if(!values.password){
    this.$message.error("密码不能为空")
} else if(!values.phoneNumber){
    this.$message.error("手机号不能为空")
} else {
    this.submit();
}

```

可能有人会说，上面的代码语义明确，写得还不够好吗？但是如果需要增加更多的校验条件时，开发者不得不侵入到具体方法去修改代码，使用策略模式优化之后能够让校验条件与具体判断逻辑解耦，当需要增加校验条件时直接修改数组即可：
```js
const validators = [
  { message: "用户名不能为空", required: true, key: "username" },
  { message: "密码不能为空", required: true, key: "password" },
  { message: "手机号不能为空", required: true, key: "phoneNumber" }
];

export default {
  methods: {
    validator(values) {
      const result = validators.some(el => {
        if (el.required && !values[el.key]) {
          this.$message.error(el.message);
          return true;
        }
      });
      return result;
    },
    submit(values) {
      if (this.validator(values)) {
        return;
      }

      // ... 调用接口
    }
  }
};
```

# 硬编码

```js
computed: {
    isGood() {
      return this.type === 1;
    },
    isBad() {
      return this.type === 0;
    }
  }

  ```

看上面的例子，这种硬编码基本随处可见，作者在写这段代码的时候肯定是觉得这个type只会在这里用到，没有必要单独定义一个常量来管理，后面接收的同学来了他也不会去关注之前的逻辑，他只要用到了type又会去重新判断一下是good还是bad，就这样最后代码中充斥着0,1,2,3这样的数字，后来新人接到一个需求并且涉及到这些数字背后的含义这个时候就不得不去一个一个地询问原作者了，好的做法就是写成常量配置文件，单独写一个文件constance.js，然后组件去引用这个常量:
```

// 货物的品质枚举值
export const GOODS_TYPE = {
  good: 1, // 质量好
  bad: 0   // 质量差
};
```js

好的css是有一定的规范的，禁止使用id选择器、!important；类名用横线分割

组件写name
```
