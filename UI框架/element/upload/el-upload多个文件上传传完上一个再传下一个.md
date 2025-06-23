# upload 多个文件上传传完上一个再传下一个

```vue
<template>
  <div class="group_insurance_order1" style="padding-top:100px;">
    <!--
      :auto-upload="false" 是否在选取文件后立即进行上传 false阻止自动上传 -- 且上传前和上传成功的事件都不会再触发 只会触发@change事件了
      :http-request="uploadFile"  覆盖默认的上传行为，可以自定义上传的实现（this.$refs.uploadRef.submit()  会触发调用uploadFile函数）
    -->
    <el-upload
      ref="uploadRef"
      class="upload-demo"
      action="#"
      accept=".pdf"
      :disabled="disabledUpload"
      :auto-upload="false"
      :on-change="changeFile"
      :on-error="fileErr"
      :on-exceed="handleExceed"
      :file-list="fileList1"
      :before-upload="beforeAvatarUpload"
      :on-success="msgSuccessOne"
      :data="fileData"
      list-type="picture"
      drag
      :show-file-list="false"
      :multiple="true"
      :limit="1000">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text" style="margin-top: -10px;line-height: 20px;">
        将文件拖到此处，<em v-if="!disabledUpload"
          >或点击上传(单个文件需小于100M,一次最多上传1000个pdf文件)</em
        ><em v-else>（文件正在上传中，请等待...）</em>
      </div>
    </el-upload>

    <div>
      <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUploadFun">手动点击上传</el-button> -->
      <el-button
        v-if="showPercent"
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitAbort"
        >取消后续文件上传</el-button
      >
    </div>

    <div style="color:orange;" v-if="showPercent">
      上传过程请勿刷新浏览器和跳转其他页面...
    </div>
    <!-- 进度条 -->
    <el-progress
      v-if="showPercent"
      :percentage="
        Number(((percentNow * 100) / percentTotal).toFixed(0))
      "></el-progress>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fileNum: "", // 单词递归上传的文件
      upFileList: "", //需要依次上传的待传列表
      percentTotal: 0, //总上传个数
      percentNow: 0, //当前上传个数
      showDesc: "", //结束文案
      showPercent: false, //显示上传进度条
      time: null, // change事件是否结束 是否可以直接调手动上传事件（目前设置1.5s）
      disabledUpload: false, //正在上传中 禁止再次选择文件上传

      fileData: {}, //上传参数

      fileList1: [],
    };
  },
  activated: {
    // 对于每次进入页面想要刷新的数据，放在这里调用即可 例如 this.getList()
  },
  methods: {
    // 超出限制个数提示
    handleExceed(files, fileList) {
      console.log("当前限制一次性最多上传1000个文件", files, fileList);
      this.$message.warning("当前限制一次性最多上传1000个文件");
    },
    changeFile(file, fileList) {
      this.disabledUpload = true;

      console.log("changeFile", file, fileList);
      const isLt2M = file.size / 1024 / 1024 < 100;
      if (!isLt2M) {
        this.$message.warning("上传文件大小不能超过 100M");
        // return false // 这个return无效 故去掉
      }

      if (!(file.name.indexOf(".pdf") > -1)) {
        this.$message.warning("当前仅支持pdf格式的文件上传");
        // return false // 这个return无效 故去掉
      }

      // 符合条件的进入待传列表
      this.upFileList = [];
      for (let x of fileList) {
        if (
          x.raw &&
          x.name.indexOf(".pdf") > -1 &&
          x.size / 1024 / 1024 < 100
        ) {
          // 过滤掉非pdf 和小于100M的
          this.upFileList.push(x.raw);
          this.percentTotal = this.upFileList.length;
          this.percentNow = 0;
          this.showPercent = false;
          this.showDesc = "";
        }
      }

      clearTimeout(this.time);
      this.time = setTimeout(() => {
        this.time = null;
        console.log("防抖 高频触发后n秒内只会执行一次  再次触发重新计时");
        this.fnBegin(); //说明此时change了所有文件了 可以上传了
      }, 1500);
    },
    fnBegin() {
      console.log("此时change了所有文件 开始上传", this.upFileList);
      this.submitUploadFun();
    },
    // 正式上传掉后端接口
    submitUploadFun() {
      if (this.upFileList.length > 0) {
        this.showPercent = true;

        this.fileNum = new FormData(); // new formData对象
        this.fileNum.append("file", this.upFileList[0]); // append增加数据
        this.fileNum.append("name", this.upFileList[0].name); // append增加数据

        let _vm = this;
        axios({
          url: "/api/v1/accident/upload",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          method: "post",
          data: this.fileNum,
        })
          .then((res2) => {
            // 每次上传当前一个后 不论成功失败就删除当前这个--如果上传失败想继续传当前这个 就把这两行注释掉
            this.percentNow = this.percentNow + 1;
            this.upFileList.shift();

            console.log("上传返回", res2);
            if (res2.data.success) {
              // this.$message({
              //   message: "上传成功",
              //   type: 'success'
              // })

              // 进行递归 上传下一个
              this.submitUploadFun();
            } else {
              _vm.$message({
                message: res2.data.return_message || "上传失败",
                type: "error",
              });

              // 进行递归 上传下一个
              this.showDesc = "上传结束，部分文件上传失败";
              this.submitUploadFun();
            }
          })
          .catch((error) => {
            console.log(error);
            _vm.$message({
              message: error || "上传失败",
              type: "error",
            });

            // 每次上传当前一个后 不论成功失败就删除当前这个--如果上传失败想继续传当前这个 就把这两行注释掉
            this.percentNow = this.percentNow + 1;
            this.upFileList.shift();

            // 进行递归 上传下一个
            this.showDesc = "上传结束，部分文件上传失败";
            this.submitUploadFun();
          });
      } else {
        this.disabledUpload = false;
        this.showPercent = false;
        this.upFileList = []; //清空待传列表

        this.$refs.uploadRef.clearFiles();
        this.fileList1 = [];

        if (this.percentNow == this.percentTotal && this.percentTotal) {
          this.$message.success(
            this.showDesc ? this.showDesc : "已全部上传成功！"
          );
          this.percentTotal = 0;
          this.percentNow = 0;
          this.showDesc = "";
        } else if (
          this.percentNow == this.percentTotal &&
          this.percentTotal == 0
        ) {
          this.$message.warning("请先选择文件！");
          this.percentTotal = 0;
          this.percentNow = 0;
        } else {
          this.$message.success("已部分上传成功，且取消后续文件上传！");
          this.percentTotal = 0;
          this.percentNow = 0;
        }

        return false;
      }
    },
    // 终止后需上传
    submitAbort() {
      this.showPercent = false;
      // .abort()不生效，故自己直接将this.upFileList置空 那么就不会走到递归了 就制止后续的上传了
      this.upFileList = [];

      // this.upFileList.forEach(ele => {
      //   this.$refs.uploadRef.abort(ele)
      // })
      // this.$refs.uploadRef.abort()
      // this.$message.warning('已取消后续文件上传！')
    },
    fileErr(err, file, fileList) {
      this.$message({
        message: file.name + "上传失败",
        type: "error",
      });
    },

    // 这两个事件不会再触发--因为阻止了自动上传
    beforeAvatarUpload(file) {
      console.log("上传文件前", file);
    },
    msgSuccessOne(data, file, fileList) {
      console.log("成功", file);
    },
  },
};
</script>
```
