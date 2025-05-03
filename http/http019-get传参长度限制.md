# get传参长度限制

误解：HTTP 协议下的 Get 请求参数长度是有大小限制的，最大不能超过XX，而 Post 是无限制的。
1、首先即使有长度限制，也是限制的是整个 URI 长度，而不仅仅是你的参数值数据长度。
2、HTTP 协议从未规定 GET/POST 的请求长度限制是多少。


所谓的请求长度限制是由浏览器和 web 服务器决定和设置的


## 浏览器的限制

1、IE
IE浏览器（Microsoft Internet Explorer） 对url长度限制是2083（2K+53），超过这个限制，则自动截断（若是form提交则提交按钮不起作用）。

2、firefox
firefox（火狐浏览器）的url长度限制为 65 536字符，但实际上有效的URL最大长度不少于100,000个字符。

3、chrome
chrome（谷歌）的url长度限制超过8182个字符返回本文开头时列出的错误。

4、Safari
Safari的url长度限制至少为 80 000 字符。

5、Opera
Opera 浏览器的url长度限制为190 000 字符。Opera 9 地址栏中输入190 000字符时依然能正常编辑。



## ngnix 的限制

可以通过修改配置来改变url请求串的url长度限制。

client_header_buffer_size 默认值：client_header_buffer_size 1k

large_client_header_buffers默认值 ：large_client_header_buffers 4 4k/8k