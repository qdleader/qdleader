1、打开终端，输入
```js
vim ~/.bash_profile
```

2、输入 i进入编辑模式，然后输入环境变量：
```
export M2_HOME="/Users/during/Documents/Software/apache-maven-3.5.0"
export PATH="$M2_HOME/bin:$PATH"

```

注：有多个Path，就输入多个export PATH=" "

3、编辑完成后，按 Esc 退出编辑，输入 :wq! 保存并退出（:q! 不保存退出  ）

4、输入source .bash_profile 使环境变量生效






 echo $PATH 查看当前环境变量



## Mac默认是bash shell 配置变量在跟目录中，编辑：

vi ~/.bash_profile
通过export将变量导出去

export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
⚠️ 注意： 变量与变量之间用:分割

## 给zsh shell 设置环境变量
vi ~/.zshrc
// 如果跟目录没有.zshrc的话，执行下面的命令
cash  ~/.zshrc
vi ~/.zshrc
在最下面添加

export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

