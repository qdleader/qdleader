# restful api



REST：英文representational state transfer直译为表现层状态转移，或者表述性状态转移；Rest是web服务的一种架构风格，一种设计风格，是一种思想；同时Rest不是针对某一种编程语言的。



## 传统的API设计： 把每一个url当做一个功能

## restful API设计：把每一个url 当做一个唯一的资源。


## restful 特点：

## 1.不使用url参数

### 传统的API设计：/api/list?pageIndex=2

### Restful API设计: /api/list/2

## 2.用method 表示操作类型

```
post /api/blog   （新建）

put/patch /api/blog/100（更新数据，用put多一些）

get  /api/blog/100 （获取数据）

delete api/blog/100 （删除数据）
```

## 3.版本号
我们会在url中保留版本号，并兼容多个版本

```
/v1/users/{user_id}

/v2/users/{user_id}
```

## 4. 资源路径

URI 不能包含动词，只能是名词（命名名词时候用小写，数字，下划线区分多个单词）
```
资源的路径应该从根到子依次如下:

/{resources}/{resource_id}/{sub_resources}/{sub_resource_id}/{sub_resource_property}

【POST】 /v1/users/{user_id}/roles/{role_id} // 添加用户的角色

有的时候，当一个资源变化难以使用标准的 RESTful API 来命名，可以考虑使用一些特殊的 actions 命名。

/{resources}/{resource_id}/actions/{action}

【PUT】 /v1/users/{user_id}/password/actions/modify // 密码修改


```

## 5.响应的参数

json格式（code， data ，msg）

## 6.状态码
使用适合的状态码很重要，而不应该全部都返回状态码 200

状态码，可根据以下标准按照项目扩展自身状态码：

200~299段 表示操作成功：

200 操作成功，正常返回

201 操作成功，已经正在处理该请求

300~399段 表示参数方面的异常

300 参数类型错误

301 参数格式错误

302 参数超出正常取值范围

303 token过期

304 token无效

400~499段 表示请求地址方面的异常：

400 找不到地址

500~599段 表示内部代码异常：

500 服务器代码异常
