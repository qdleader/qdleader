
## ClassName的命名

#### ClassName的命名应该尽量精短、明确，必须以字母开头命名，且全部字母为小写，单词之间统一使用中划线 “-” 连接

#### 推荐：

<div class="modulename">
	<div class="modulename-info">
		<div class="modulename-son"></div>
		<div class="modulename-son"></div>
		...
	</div>
</div>
	
<!-- 这个是全站公用模块，祖先模块允许直接出现下划线 -->
<div class="mod-info">
	<div class="mod-info-son"></div>
	<div class="mod-info-son"></div>
	...		
</div>

#### 不推荐：

<div class="modulename-info">
	<div class="modulename-info-son"></div>
	<div class="modulename-info-son"></div>
	...		
</div>

在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀

<div class="modulename">
	<div class="modulename-cover"></div>
	<div class="modulename-info"></div>
</div>

当子孙模块超过4级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块

<div class="modulename">
	<div class="modulename-cover"></div>
	<div class="modulename-info">
    	<div class="modulename-info-user">
    		<div class="modulename-info-user-img">
    			<img src="" alt="">
    			<!-- 这个时候 miui 为 modulename-info-user-img 首字母缩写-->
    			<div class="miui-tit"></div>
    			<div class="miui-txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename-info-list"></div>
	</div>
</div>

<div class="modulename">
	<div class="modulename-cover"></div>
	<div class="modulename-info">
    	<div class="modulename-info-user">
    		<div class="modulename-info-user-img">
    			<img src="" alt="">
    			<div class="modulename-info-user-img-tit"></div>
    			<div class="modulename-info-user-img-txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename-info-list"></div>
	</div>
</div>

## 模块命名

#### 全站公共模块：以 mod- 开头

<div class="mod-yours"></div>

#### 业务公共模块：以 业务名-mod- 开头

```html
<div class="paipai-mod-yours"></div>
```

#### 常用命名推荐

注意：ad、banner、gg、guanggao 等有机会和广告挂勾的字眠不建议直接用来做ClassName，因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名，因此
```html
<div class="ad"></div>
```

这种广告的英文或拼音类名不应该出现

另外，敏感不和谐字眼也不应该出现，如：

```html
<div class="fuck"></div>
<div class="jer"></div>
<div class="sm"></div>
<div class="gcd"></div> 
<div class="ass"></div> 
<div class="KMT"></div> 
```

| ClassName	| 含义    |
| ------|:-----|
|about	| 关于|
|account	|账户|
arrow	|箭头图标
article	|文章
aside	|边栏
audio	|音频
avatar	|头像
bg,background	|背景
bar	|栏（工具类）
branding	|品牌化
crumb,breadcrumbs	|面包屑
btn,button	|按钮
caption	|标题，说明
category	|分类
chart	|图表
clearfix	|清除浮动
close	|关闭
col,column	|列
comment	|评论
community	|社区
container	|容器
content	|内容
copyright	|版权
current	|当前态，选中态
default	|默认
description	|描述
details	|细节
disabled	|不可用
entry	|文章，博文
error	|错误
even	|偶数，常用于多行列表或表格中
fail	|失败（提示）
feature	|专题
fewer	|收起
field	|用于表单的输入区域
figure	|图
filter	|筛选
first	|第一个，常用于列表中
footer	|页脚
forum	|论坛
gallery	|画廊
group	|模块，清除浮动
header	|页头
help	|帮助
hide	|隐藏
hightlight	|高亮
home	|主页
icon	|图标
info,information|	信息
last	|最后一个，常用于列表中
links	|链接
login	|登录
logout	|退出
logo	|标志
main	|主体
menu	|菜单
meta	|作者、更新时间等信息栏，一般位于标题之下
module	|模块
more	|更多（展开）
msg,message	|消息
nav,navigation	|导航
next	|下一页
nub	|小块
odd	|奇数，常用于多行列表或表格中
off	|鼠标离开
on	|鼠标移过
output	|输出
pagination	|分页
pop,popup	|弹窗
preview	|预览
previous	|上一页
primary	|主要
progress	|进度条
promotion	|促销
rcommd,recommendations	|推荐
reg,register	|注册
save	|保存
search	|搜索
secondary	|次要
section	|区块
selected	|已选
share	|分享
show	|显示
sidebar	|边栏，侧栏
slide	|幻灯片，图片切换
sort	|排序
sub	|次级的，子级的
submit	|提交
subscribe	|订阅
subtitle	|副标题
success	|成功（提示）
summary	|摘要
tab	|标签页
table	|表格
txt,text	|文本
thumbnail	|缩略图
time	|时间
tips	|提示
title	|标题
video	|视频
wrap	|容器，包，一般用于最外层
wrapper	|容器，包，一般用于最外层
