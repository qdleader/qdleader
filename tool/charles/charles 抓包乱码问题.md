## 一、证书安装
1、安装证书，Help -> SSL Proxying -> Install Charles Root Certificate

2、找到Keychain Access软件(一般会自动打开)，搜索"charles"可以看到证书有个x图标，说明证书还不能使用

3、信任证书，双击证书 -> Trust -> Always Trust


4、重新打开Keychain Access软件，可以看到Charles证书没有报错了


## 二、证书使用

#### 1、解决单个https乱码
选中乱码对应的host-> 右键-> Enable SSL Proxying

可以看到简书https没有乱码了


#### 2、解决所有https乱码

Proxy->SSL Proxying Settings...

SSL Proxying-> Enable SSL Proxying勾选

Add-> Host处配置*-> 点击OK



可以看到所有的https都不乱码了
