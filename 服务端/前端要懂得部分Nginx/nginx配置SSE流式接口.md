# nginx 配置ssE流式接口

···
server {
    listen 80;
    server_name ai.vuereact.top;

    location /api/xiaotao/chatPostFlux {
        proxy_pass http://124.40.216.65:8090/xiaotao/chatPostFlux;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_buffering off;
        proxy_cache off;
        proxy_read_timeout 3600s;  # 可根据流持续时间调整
    }
}
···