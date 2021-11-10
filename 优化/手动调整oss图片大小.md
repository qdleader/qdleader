
oss 处理图片 官方文档 https://help.aliyun.com/document_detail/44688.html?spm=5176.13910061.sslink.1.383a4e1bzg2cTe



在访问oss图片时，如果图片太大，而本地网络不是很好的情况下，图片加载时间比较长，阿里云的oss有这个功能，在访问图片的时候指定大小显示，在显示的时候直接对图片进行压缩，这样可以加快访问速度！




##  等比缩放
### 按宽高缩放
需求及处理参数如下：
图片缩放为高100 px：resize,h_100
缩放模式为lfit：m_lfit
图片处理的URL为 http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,h_100,m_lfit



### 按长边缩放
需求及处理参数为：图片缩放为长边100 px，即resize,l_100
图片处理的URL为 http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,l_100




### 固定宽高缩放
需求及处理参数如下：
将原图缩放成宽高100 px：resize,h_100,w_100
缩放模式fixed：m_fixed
图片处理的URL为：http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,m_fixed,h_100,w_100

### 固定宽高，自动裁剪
需求及处理参数如下：
将原图缩放成宽高100 px：resize,h_100,w_100
缩放模式fill：m_fill
图片处理的URL为：http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,m_fill,h_100,w_100

或 ?x-oss-process=image/resize,m_lfit,h_300,w_500  或者
?x-oss-process=image/resize,h_300,w_500



### 固定宽高，缩放填充
需求及处理参数如下：
将原图缩放成宽高100 px：resize,h_100,w_100
缩放模式pad：m_pad
以红色填充：color_FF0000
图片处理的URL为：http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,m_pad,h_100,w_100,color_FF0000



### 按比例缩放
需求及处理参数如下：
将原图缩放50%：resize,p_50

图片处理的URL为：http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,p_50

将原图缩放50%：resize,p_50

图片处理的URL为：http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,p_50
