# 本地部署 deepseek

## 一、为什么要部署本地 DeepSeek？

相信大家在使用 DeepSeek 时都会遇到这样的问题：

这是由于 DeepSeek 大火之后访问量比较大，再加上漂亮国大规模、持续的恶意攻击，导致 DeepSeek 的服务器很不稳定。所以，这个此时在本地部署一个 DeepSeek 大模型就非常有必要了。

再者说，有些数据比较敏感，咱也不想随便传到网上去，本地大模型可以根据你的需求进行定制，想怎么用就怎么用，灵活性超强！

## 二、怎么部署本地大模型？

在本地部署 DeepSeek 只需要以下三步：

安装 Ollama。
部署 DeepSeek。
使用 DeepSeek：这里我们使用 ChatBox 客户端操作 DeepSeek（此步骤非必须）。
Ollama、DeepSeek 和 ChatBox 之间的关系如下：

Ollama 是“大管家”，负责把 DeepSeek 安装到你的电脑上。
DeepSeek 是“超级大脑”，住在 Ollama 搭建好的环境里，帮你做各种事情。
ChatBox 是“聊天工具”，让你更方便地和 DeepSeek 交流。
安装 Ollama
Ollama 是一个开源的大型语言模型服务工具。它的主要作用是帮助用户快速在本地运行大模型，简化了在 Docker 容器内部署和管理大语言模型（LLM）的过程。

PS：Ollama 就是大模型届的“Docker”。

Ollama 优点如下：

易于使用：即使是没有经验的用户也能轻松上手，无需开发即可直接与模型进行交互。
轻量级：代码简洁，运行时占用资源少，能够在本地高效运行，不需要大量的计算资源。
可扩展：支持多种模型架构，并易于添加新模型或更新现有模型，还支持热加载模型文件，无需重新启动即可切换不同的模型，具有较高的灵活性。
预构建模型库：包含一系列预先训练好的大型语言模型，可用于各种任务，如文本生成、翻译、问答等，方便在本地运行大型语言模型。

下载并安装 Ollama
下载地址：https://ollama.com/

mac 下载完后，选择一个模型，然后终端中打开 输入 你选择的模型命令 即可

```shell
ollama run deepseek-r1:1.5b
```

此时你就可以在命令行中使用 DeepSeek 了。

怎么得到一个可视化页面的呢

在 Docker 应用上添加一个 Open-WebUI 组件，让 DeepSeek-R1 可以通过浏览器界面交互，并赋予它联系上下文的能力。

```shell
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```
