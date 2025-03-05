# wangEditor 中添加自定义 html 内容

问题描述

wangEditor V5 版本是不支持自定义 html 的，他会把里面的 html 标签全部转化成别的标签，导致自定义的 html 内容无法显示出来。

解决方案
使用 wangEditor V4 版本

## 示例

### 编辑器的引入（Vue2+V4 版本）

#### 1.下载，这里我使用的是 npm 包管理器下载

```js
npm i wangeditor --save
```

#### 2.在项目中引入，可以直接在代码中引入，或新建作为一个组件

## 二、编辑器的配置

首先要在 vue 生命周期的的挂载阶段创建编辑器的实例，中间配置相关选项，最后创建编辑器，代码如下:

```vue
<template>
  <div id="container">
    <div id="editor">//给div盒子命名以引入编辑器 //这里是编辑器</div>
  </div>
</template>

<script>
import E from "wangeditor"; //导入编辑器
export default {
  mounted() {
    const that = this; //保存this指针的目的是为了后续在editor作用域内能访问到全局作用域中的数据
    this.editor = new E("#editor"); //创建编辑器实例

    //以下是配置选项，可按需删改
    this.editor.config.height = 600; //设置编辑器高度的代码
    this.editor.config.placeholder =
      "请输入您的内容，最大字数1000，支持插入图片及调整排布"; //设置常驻内容
    this.editor.config.focus = false; //设置是否加载页面后就获取焦点
    this.editor.config.zIndex = 10; //设置编辑器的层级
    // 配置菜单栏
    this.editor.config.menus = [
      "bold",
      "head",
      "fontName",
      "key",
      "fontSize",
      "lineHeight",
      "backColor",
      "link",
      "list",
      "justify",
      "italic",
      "underline",
      "table",
      "image",
    ];
    // 忽略粘贴过来的图片
    this.editor.config.pasteIgnoreImg = true;
    // 限制图片大小
    this.editor.config.uploadImgMaxSize = 2 * 1024 * 1024; // 2M
    this.editor.config.uploadImgMaxLength = 1; // 一次最多上传 1 个图片
    this.editor.config.uploadImgShowBase64 = false;
    // 上传图片时可自定义传递一些参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
    this.editor.config.uploadImgParams = {
      userid: this.userid,
    };
    // 如果需要将参数拼接到 url 中，可再加上如下配置。
    // this.editor.config.uploadImgParamsWithUrl = true
    // 文件名
    this.editor.config.uploadFileName = "img";
    // 图片上传的服务器接口
    this.editor.config.uploadImgServer = this.serverhttp; //serverhttp是你自己的服务器地址
    // timeout 即上传接口等待的最大时间，默认是 10 秒钟，可以自己修改。
    this.editor.config.uploadImgTimeout = 5 * 1000;
    // 配置alt选项
    this.editor.config.showLinkImgAlt = false;
    // 隐藏插入网络图片的功能
    this.editor.config.showLinkImg = false;
    // 配置超链接
    this.editor.config.showLinkImgHref = false;
    // 可使用回调函数，对上传图片的不同阶段，做相应处理。代码示例如下。
    this.editor.config.linkImgCallback = function (src, alt, href) {
      // console.log(that.coverphoto);
      that.coverphoto.push(href);
      // console.log(this.coverphoto);
    };
    // // 监听事件
    // this.editor.config.onblur = function (newHtml) {
    //     console.log('onblur', newHtml) // 获取最新的 html 内容
    // }
    // this.editor.config.onfocus = function (newHtml) {
    //     console.log('onfocus', newHtml) // 获取最新的 html 内容
    // }
    // 创建编辑区域
    this.editor.create();
  },
  beforeDestroy() {
    // 销毁编辑器  离开页面时必须销毁编辑器，否则会增加内存消耗
    // this.editor.destroy()
    // this.editor = null
  },
};
</script>
```

v4 文档
https://www.wangeditor.com/v4/
