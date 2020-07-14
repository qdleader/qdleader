
####常规语法

Easy Mock 引入了 Mock.js，下面只提供部分语法展示。更详尽的用例及文档请参考 Mock.js 官网。

支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等
支持扩展更多数据类型，支持自定义函数和正则


##数据占位符

```
{
  "string|1-2": "@string",
  "integer": "@integer(10, 30)",
  "float": "@float(60, 100, 2, 2)",
  "boolean": "@boolean",
  "date": "@date(yyyy-MM-dd)",
  "datetime": "@datetime",
  "now": "@now",
  "url": "@url",
  "email": "@email",
  "region": "@region",
  "city": "@city",
  "province": "@province",
  "county": "@county",
  "upper": "@upper(@title)",
  "guid": "@guid",
  "id": "@id",
  "image": "@image(200x200)",
  "title": "@title",
  "cparagraph": "@cparagraph",
  "csentence": "@csentence",
  "range": "@range(2, 10)"
}
```


result:
```
{
  "string": "&b(V",
  "integer": 29,
  "float": 65.93,
  "boolean": true,
  "date": "2013-02-05",
  "datetime": "1983-09-13 16:25:29",
  "now": "2017-08-12 01:16:03",
  "url": "cid://vqdwk.nc/iqffqrjzqa",
  "email": "u.ianef@hcmc.bv",
  "region": "华南",
  "city": "通化市",
  "province": "陕西省",
  "county": "嵊州市",
  "upper": "DGWVCCRR TLGZN XSFVHZPF TUJ",
  "guid": "c09c7F2b-0AEF-B2E8-74ba-E1efC0FecEeA",
  "id": "650000201405028485",
  "image": "http://dummyimage.com/200x200",
  "title": "Orjac Kwovfiq Axtwjlop Xoggxbxbw",
  "cparagraph": "他明林决每别精与界受部因第方。习压直型示多性子主求求际后世。严比加指安思研计被来交达技天段光。全千设步影身据当条查需府有志。斗中维位转展新斯克何类及拉件科引解。主料内被生今法听或见京情准调就品。同六通目自观照干意音期根几形。",
  "csentence": "命己结最方心人车据称温增划眼难。",
  "range": [2, 3, 4, 5, 6, 7, 8, 9]
}
```

```
{
 "cname": "@cname",//中文人名
 "id": "@id",//生成20 位数字
 "title": "@ctitle",//中文title
 "city": "@city",//中文城市
 "ip": "@ip",//ip 地址
 "email": "@email",//email
 "url": "@url",//url
 "cfirst": "@cfirst",//姓名，姓
 "clast": "@clast",//姓名，名
 "cword": "@cword('123456')",//123456 从中选取一个字符
 "csentence": "@csentence(1,5)",//文字文段
 "csentence5": "@csentence(5)",//文字文段
 "cparagraph": "@cparagraph(1,3)",//文字文段
 "string": "@string(11)",//输出11 个字符长度的字符串
 "float": "@float(0,10)",//0 到 10 的浮点数
 "int": "@integer(60,70)",//60 到 70 之间的整数
 "boolean": "@boolean",//boolean 类型 true,false
 "array|1-3": [{
 "id": "@integer(1,10)",//整数 1到10 取整数
 "name": "cname"
 }],//数组（随机 1 到3个）
 "array_sort_add|+1": ["1", "2", "3"],//数组1，2，3轮询输出
 "boolean|1-2": true,//boolean 类型 true,false
 "actionType|1": ['click_url', 'open_resource_detail', 'open_resource_search'],
 "payload": function() {
       var returnClickUrl = {
         "linkUrl": "http://tob.zhisland.com/apph5"
       };
       var returnResourceDetail = {
         "resourceId": "606"
       };
       var returnResourceSearch = {
         "keyWords": "",
         "tagCategory": "1",
         "tag": "1"
       };
       var s = this.actionType == 'click_url' ? returnClickUrl : this.actionType == 'open_resource_detail' ? returnResourceDetail : returnResourceSearch;
       return s;
  }//function 返回设置返回的数据
}
```

这里只是一些常用语法，更多详细内容可以看他官网。