
```js
npm install express-generator -g

express --view=ejs server

```

然后 cd 到server 这文件夹
执行 npm i
```js
npm run start
```

访问localhost:3000 就能访问到接口了

添加更改后自动更新功能

## 下载您nodemon
```js
npm i nodemon --save-dev
```

在packjson 中加入

```json
"scripts": {
		"start": "nodemon ./bin/www"
	},
```

## get 接口

在server/routes/index.js 中添加

```js
// 租户列表
router.get("/hooks/tenant/list", function (req, res, next) {
	res.json({
		code: 200,
		data: [
			{
				key: "1",
				teamId: "123456",
				teamName: "知法犯法律师团伙",
				firstLocals: "北京市",
				secondLocals: "朝阳区",
				adminName: "管理员",
				adminPhoneNo: "15110892778",
				accountTotal: "562346732423",
				endTime: "666",
				createTime: "666",
				status: "1"
			}
		],
		msg: "成功"
	});
});
```

可以得到一个get 接口
http://localhost:3000/hooks/tenant/list

## post 接口
```js
// 创建课节
router.post("/hooks/create", function (req, res, next) {
	res.json({
		code: 200,
		data: true,
		isSuccess: true,
		msg: "成功"
	});
});
```
