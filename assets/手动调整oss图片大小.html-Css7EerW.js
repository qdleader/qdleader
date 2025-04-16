import{_ as s,c as a,a as o,o as p}from"./app-DFnxdJ0h.js";const h={};function i(c,e){return p(),a("div",null,e[0]||(e[0]=[o('<h1 id="手动调整oss图片大小" tabindex="-1"><a class="header-anchor" href="#手动调整oss图片大小"><span>手动调整oss图片大小</span></a></h1><p>oss 处理图片 官方文档 https://help.aliyun.com/document_detail/44688.html?spm=5176.13910061.sslink.1.383a4e1bzg2cTe</p><p>在访问oss图片时，如果图片太大，而本地网络不是很好的情况下，图片加载时间比较长，阿里云的oss有这个功能，在访问图片的时候指定大小显示，在显示的时候直接对图片进行压缩，这样可以加快访问速度！</p><h2 id="等比缩放" tabindex="-1"><a class="header-anchor" href="#等比缩放"><span>等比缩放</span></a></h2><h3 id="按宽高缩放" tabindex="-1"><a class="header-anchor" href="#按宽高缩放"><span>按宽高缩放</span></a></h3><p>需求及处理参数如下： 图片缩放为高100 px：resize,h_100 缩放模式为lfit：m_lfit 图片处理的URL为 http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,h_100,m_lfit</p><h3 id="按长边缩放" tabindex="-1"><a class="header-anchor" href="#按长边缩放"><span>按长边缩放</span></a></h3><p>需求及处理参数为：图片缩放为长边100 px，即resize,l_100 图片处理的URL为 http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,l_100</p><h3 id="固定宽高缩放" tabindex="-1"><a class="header-anchor" href="#固定宽高缩放"><span>固定宽高缩放</span></a></h3><p>需求及处理参数如下： 将原图缩放成宽高100 px：resize,h_100,w_100 缩放模式fixed：m_fixed 图片处理的URL为：http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,m_fixed,h_100,w_100</p><h3 id="固定宽高-自动裁剪" tabindex="-1"><a class="header-anchor" href="#固定宽高-自动裁剪"><span>固定宽高，自动裁剪</span></a></h3><p>需求及处理参数如下： 将原图缩放成宽高100 px：resize,h_100,w_100 缩放模式fill：m_fill 图片处理的URL为：http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,m_fill,h_100,w_100</p><p>或 ?x-oss-process=image/resize,m_lfit,h_300,w_500 或者 ?x-oss-process=image/resize,h_300,w_500</p><h3 id="固定宽高-缩放填充" tabindex="-1"><a class="header-anchor" href="#固定宽高-缩放填充"><span>固定宽高，缩放填充</span></a></h3><p>需求及处理参数如下： 将原图缩放成宽高100 px：resize,h_100,w_100 缩放模式pad：m_pad 以红色填充：color_FF0000 图片处理的URL为：http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,m_pad,h_100,w_100,color_FF0000</p><h3 id="按比例缩放" tabindex="-1"><a class="header-anchor" href="#按比例缩放"><span>按比例缩放</span></a></h3><p>需求及处理参数如下： 将原图缩放50%：resize,p_50</p><p>图片处理的URL为：http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,p_50</p><p>将原图缩放50%：resize,p_50</p><p>图片处理的URL为：http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,p_50</p>',20)]))}const n=s(h,[["render",i]]),m=JSON.parse('{"path":"/%E4%BC%98%E5%8C%96/%E6%89%8B%E5%8A%A8%E8%B0%83%E6%95%B4oss%E5%9B%BE%E7%89%87%E5%A4%A7%E5%B0%8F.html","title":"手动调整oss图片大小","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1744790553000,"contributors":[{"name":"qdleader","username":"qdleader","email":"yk4545945@163.com","commits":1,"url":"https://github.com/qdleader"}],"changelog":[{"hash":"cfe4d3cd8e5568860c1058a4bcec48e5df839e96","time":1744790553000,"email":"yk4545945@163.com","author":"qdleader","message":"docs: 添加js控制hover样式审查方法"}]},"filePathRelative":"优化/手动调整oss图片大小.md"}');export{n as comp,m as data};
