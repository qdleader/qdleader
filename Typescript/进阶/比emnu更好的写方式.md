# 比enum 更好的方式

```js
// 以前的写法 - enum
enum UserRole {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
  // ...后面还有十来个角色
}

// 使用的时候
const role = UserRole.Admin
```
看起来很正常对不对？但你知道编译成JavaScript后发生了什么吗？

```js
// 编译后的代码
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["User"] = "user";
    UserRole["Guest"] = "guest";
    // ...每个值都会生成对应的代码
})(UserRole || (UserRole = {}));
```

每个enum都会变成一个立即执行函数，项目里enum越多，生成的代码就越多，打包体积自然就膨胀了

## 新的解决方案：常量对象 + 类型别名
```js
// 新写法 - 常量对象
const UserRole = {
  Admin: 'admin',
  User: 'user',
  Guest: 'guest',
} as const  // as const很重要，让TypeScript知道这是只读的

// 类型别名 - 相当于枚举的类型！
type UserRole = keyof typeof UserRole

// 使用时的方式完全一样！
const role: UserRole = UserRole.Admin
```


编译后发生了什么？
```js
// 编译后的代码 - 简洁多了！
const UserRole = {
    Admin: 'admin',
    User: 'user',
    Guest: 'guest',
}
```

## 总结
    用const obj = { ... } as const代替enum
    用type Key = keyof typeof obj定义类型
    打包体积能小很多，构建速度也更快，代码更简洁



数字枚举需要稍作调整：

```js
const StatusCode = {
  Ok: 200,
  NotFound: 404
} as const
type StatusCode = typeof StatusCode[keyof typeof StatusCode]
```

如果需要反向映射（根据值找键），需要自己写工具函数：
```js
function getKeyByValue(obj: any, value: any) {
  return Object.keys(obj).find(key => obj[key] === value)
}
```
