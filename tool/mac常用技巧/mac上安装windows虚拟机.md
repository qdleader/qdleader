破解方法来自github上一个大佬 somebasj ，不过直接用他提供的脚本激活基本没法成功，所以我这边出个教程帮助大家成功激活。

按照github上的描述，这个激活方式是全面支持intel和arm芯片的，不过我这边只有m1的mac，所以intel芯片的激活未测试。

2022年11月9日注：最新的18.1可以激活可以加载虚拟机（m1、mac os 13系统亲测）。最新的mac os 13系统使用该教程破解依然可以生效。

准备工作
下载pd
官网下载地址：
18.1.1: https://download.parallels.com/desktop/v18/18.1.1-53328/ParallelsDesktop-18.1.1-53328.dmg
18.1.0：https://download.parallels.com/desktop/v18/18.1.0-53311/ParallelsDesktop-18.1.0-53311.dmg
18.0.1： https://download.parallels.com/desktop/v18/18.0.1-53056/ParallelsDesktop-18.0.1-53056.dmg
下载破解补丁

https://pan.luoxx.top/s/RdIN


使用方法
下载补丁后解压，然后cd进入解压后的目录，然后执行 chmod +x ./install.sh && sudo ./install.sh 命令即可。
ps：执行该命令会需要输入密码以授权。
ps: 如果你是把破解包下载到 下载 目录的话，那cd命令为 cd ~/Downloads/parallelsdesktopcrack
ps：如果提示 Login failed: Unable to connect to Parallels Service… 忽略即可，这种一般都是已经激活成功了，可以直接去pd查看激活状态。

