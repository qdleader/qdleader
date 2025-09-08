# centos7安装java



## 1、下载安装包
```js
wget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz

或


wget https://mirrors.tuna.tsinghua.edu.cn/Adoptium/17/jdk/x64/linux/OpenJDK17U-jdk_x64_linux_hotspot_17.0.16_8.tar.gz
```

java17和java8一样，都是LTS长期支持版本，因此这里直接下载java17

## 2、解压安装包,修改包名为jdk-17
```js
tar zxf jdk-17_linux-x64_bin.tar.gz
rm -rf jdk-17_linux-x64_bin.tar.gz
mv jdk-17.0.12 jdk-17
```

## 3、移动文件夹到/usr/local下
```js
mv jdk-17 /usr/local/
```

## 4、将java添加到环境变量中
```js
vi /etc/profile
```

```js
export JAVA_HOME=/usr/local/jdk-17
export PATH=/usr/local/php/bin:/usr/local/jdk-17/bin:$PATH
```

## 5、加载刚才修改的文件
```js
source /etc/profile
```

## 6、验证是否安装java成功
```js
java -version
```
显示下面内容，说明安装成功


```js
[root@v2 jdk-17]# java -version
java version "17.0.12" 2024-07-16 LTS
Java(TM) SE Runtime Environment (build 17.0.12+8-LTS-286)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.12+8-LTS-286, mixed mode, sharing)
```