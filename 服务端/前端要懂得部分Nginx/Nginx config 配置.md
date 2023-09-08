
```ts
server {
  listen 82;
  server_name localhost;
  location / {
    proxy_pass http://192.168.138.101:8080; # 反向代理配置 将请求转发到指定服务
  }
}
```



## 负载均衡


```ts
upstream targetserver {  # upstream 可以定义一组服务器
  server 192.168.138.100:8080;
  server 192.168.138.100:8081;
}
server {
  listen 8080;
  server_name localhost;
  location / {
    proxy_pass http://targetserver;
  }
}
```

## 负载均衡策略
｜名称｜  说明｜
｜--｜--｜
｜轮询｜  默认是｜ 
｜weight  ｜权重方式｜ 
｜ip_hash｜  依据ip分配方式｜ 
｜least_conn｜  依据最少链接方式｜ 
｜url_hash｜  依据url分配方式｜ 
｜fair｜  依据响应时间方式｜ 
