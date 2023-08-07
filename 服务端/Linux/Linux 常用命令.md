

|  命令   | 对应英文  | 作用｜
|  ----  | ----  | ----  |
| ls  | list | 查看当前目录下的内容 |
| pwd  | print work directory | 查看当前所在目录 |
| cd [目录名]  | change directory | 切换目录 |
| touch [文件名]  | touch | 如果文件不存在，新建文件 |
| mkdir [目录名]  | make directory | 创建目录 |
| rm [文件名]  | remove | 删除指定文件 |


```js
rm -f 文件
rm -rf 文件夹/文件
```

在执行Linux命令时，如果有乱码，命令行输入


```js
echo 'LANG="en_US.UTF-8"' >> /etc/profile
source /etc/profile
```



实用小技巧

tab 自动补全
两次tab 给出提示
上下键 使用过的命令
使用clear 或 Ctrl + l 清屏



command [-option] [parameter]

command 命令名
[-option] 选项 
[parameter]  参数（0 到多）

eg:

cd /usr/name
ls -l
rm -f 1.txt 2.txt








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
