# 国内 linux 服务器解决 Ollama 安装超时

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

修改 hosts 文件，直接将http://github.com做个ip指向。

```js
sudo vim /etc/hosts
```

输入密码后，按 i 增加以下配置

```js

# github 注意下面的IP地址和域名之间有一个空格

140.82.114.3 github.com
199.232.69.194 github.global.ssl.fastly.net
185.199.108.153 assets-cdn.github.com
185.199.109.153 assets-cdn.github.com
185.199.110.153 assets-cdn.github.com
185.199.111.153 assets-cdn.github.com
```

按 Esc 退出输入模式， :wq 保存完后，再 ping 一下 http://github.com

现在可以下载了

```bash
curl -fsSL https://ollama.com/install.sh | sh
```
