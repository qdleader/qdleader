
## mv

```js
mv hello.txt hi.txt   //将hello.txt 改名为hi.txt

mv hi.txt src  // 将hi.txt 移动到src目录

mv hi.txt src/hello.txt //将hi.txt 移动到src目录，并改名为hello.txt

mv test/ src/  // 如果src目录不存在，那么将test目录改名为src，如果src目录存在，则是将test目录移动到src目录下

```


## 打包

```js

tar -cvf hello.tar ./*    
// 将当前所有文件打包，打包后的文件命名为hello.tar

tar -zcvf hello.tar.gz ./*  
// 将当前目录下的所有文件打包并压缩，打包后的文件命名为hello.tar.gz


```

## 解包

```js
tar -xvf hello.tar     // 将hello.tar 文件进行解包，并将解包后的文件放在当前目录
tar -zxvf hello.tar.gz  // 将hello.tar.gz 文件进行解压，并将解压后的文件放在当前目录
tar -zxvf hello.tar.gz -C /usr/local // 将hello.tar.gz 文件进行解压，并将解压后的文件放在/usr/local目录
```


## 查看当前目录

```js
pwd
```

cp -r ~/.volta /Library/volta
