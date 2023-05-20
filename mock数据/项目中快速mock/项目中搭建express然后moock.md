
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