

|  命令   | 对应英文  | 作用｜
|  ----  | ----  | ----  |
| ls  | list | 查看当前目录下的内容 |
| pwd  | print work directory | 查看当前所在目录 |
| cd [目录名]  | change directory | 切换目录 |
| touch [文件名]  | touch | 如果文件不存在，新建文件 |
| mkdir [目录名]  | make directory | 创建目录 |
| rm [文件名]  | remove | 删除指定文件 |




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



## ls

ls -a  展示所有的文件及目录
ls -l 除文件名称外，同时将文件形态（d表示目录，-表示文件）权限，拥有者，文件大小等详细列出(缩写 ll)

ls -al





## cd
cd .. 上级目录
cd ~ 切换用户的home目录
cd /usr/local 切换到/usr/local 目录
cd /  到根目录下


## cat

查看文件

cat /etc/profile
cat -n /etc/profile（加上行数）



### more

more fileName

回车键   向下滚动一行
空格键   向下滚动一屏
b       返回上一屏
q 或 Ctrl+C 退出more



### tail 查看文件末尾的内容
```js
tail /etc/profile   显示profile文件末尾10行内容

tail -20 /etc/profile  显示profile文件末尾20行内容

tail -f /etc/error.log   动态读取末尾内容并展示

```

## mkdir 

mkdir -p 1/2/3    创建多层目录



#### rmdir

rmdir 文件夹名 删除空文件夹

rmdir -p name/1



## rm

```js
rm -f 文件
rm -rf 文件夹/文件
```

## cp 
用于 复制 文件 或目录
```js
cp [-r] source dest

-r 加上后会复制该目录下的所有子目录和文件
```

```js

cp hello.txt folder  将hello.txt 复制到folder目录中
cp hello.txt ./hi.txt  将hello.txt 复制到当前目录，并改名为hi.txt

cp -r folderA/ ./folderB/ 将folderA目录和目录下的所有文件复制到folderB目录下

cp -r folderB/* ./folderB/ 将folderA目录下的所有文件复制到folderB目录下
```






## mv

```js
mv hello.txt hi.txt   //将hello.txt 改名为hi.txt

mv hi.txt src/  // 将hi.txt 移动到src目录

mv hi.txt src/hello.txt //将hi.txt 移动到src目录，并改名为hello.txt

mv test/ src/  // 如果src目录不存在，那么将test目录改名为src，如果src目录存在，则是将test目录移动到src目录下

```


# tar 打包

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


# vim

vim hello.txt 有hello.txt 则直接打开，没有的话就新建文件

vim 进行编辑时候分为三种模式：

命令模式（Command mode）
插入模式（Insert mode）
底行模式（Last line mode）

**命令模式**
vim 命令 打开文件后，默认进入命令模式
移动光标 箭头，gg 或G


**插入模式**
插入模式对文本内容进行编辑

在命令模式下按下[i,a,o] 任意一个进入插入模式

在插入模式下按 ESC ，回到命令模式


**底行模式**
在命令模式下按下[:,/]任意一个，可以进入底行模式

通过/方式进入底行模式后，可以对文件内容进行查找
通过: 进入底行模式后，可以输入wq(保存并退出)，q！（不保存退出）、set nu（显示行号）



## find

语法:

find dirName -option fileName

find . -name "*.java" 在当前目录及其子目录下查找.java结尾的文件
find /folderA -name ".java" 在/folderA目录及其子目录下查找.java 结尾的文件



## grep
查找文件中的内容

grep word fileName

grep Hello HelloWorld.java   查找HelloWorld.java 中出现Hello字符串的位置


grep hello *.java   在当前目录所有.java 结尾的文件中包含hello字符串的位置

## 查看当前目录

```js
pwd
```

cp -r ~/.volta /Library/volta
