## 长期启用

```js
nohup java -jar adminApi-0.0.1-SNAPSHOT.jar &

```

启用一次没成功的话，再来一次

直接启用

```js
 java -jar adminApi-0.0.1-SNAPSHOT.jar 

```

暂停某一服务
```shell
lsof -i:5627

kill -9 进程id

```
