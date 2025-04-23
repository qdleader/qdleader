# 服务端部署 ollama

## 1. 下载 ollama

```js
curl -fsSL https://ollama.com/install.sh | sh​
```

## 2. 环境配置

修改 ollama 配置使其可以监听 0.0.0.0 和修改端口，可以实现非本地访问

### 2.1 修改文件

使用命令：

```js
sudo vi /etc/systemd/system/ollama.service​
```

添加：Environment="OLLAMA_HOST=0.0.0.0:11434"​，然后按下 Esc，键入:wq​ 保存更改
即：

```js
[Unit]
Description=Ollama Service
After=network-online.target

[Service]
Environment="OLLAMA_HOST=0.0.0.0:11434"
ExecStart=/usr/local/bin/ollama serve
User=ollama
Group=ollama
Restart=always
RestartSec=3
Environment="PATH=/usr/local/php/bin:/usr/local/jdk-17/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin"

[Install]
WantedBy=default.target

```

​​

### 2.2 重现加载

```js
sudo systemctl daemon-reload

sudo systemctl restart ollama
```

1 3. 测试

然后打开浏览器测试输入：ip 地址:11434

出现 ollama is running，表示配置成功

3.2 模型测试
