

直接上代码
```
<van-list  :finished="finished" finished-text="到底啦,只有这么多了" @load="onLoadDown" v-if="commentList.length != 0" v-model="loading">
         <ul class="comment_ul">
             <li class="comment_li clearfix" v-for="(item,index) in commentList" :key="index">
                 <img :src="item.comm_user_portrait" alt="">
                 <div class="comment_ri">
                     <div class="comment_ribox clearfix">
                         <div class="comment_ri_left clearfix">
                             <h5 @click="readBack(item)">{{item.comm_username}}</h5>
                             <span>{{item.create_time | formatDate('yyyy.MM.dd hh:mm', false)}}</span>
                         </div>
                         <div :class="{'comment_ri_right':true,'comment_ri_rightred':item.liked_status == 1}" @click="doLike(item,index)">
                             <i class="iconfont yk-dianzanbeifen2"></i>
                             <i class="iconfont yk-yidianzan"></i>
                             <cite>{{item.liked_num}}</cite>
                         </div>
                     </div>
                     <div class="comment_ri_con" @click="readBack(item)">
                         {{item.comm_content}}
                     </div>

                     <div class="comment_ri_back" v-show="item.son_comment_count != 0" @click="lookSonCom(item)">
                         {{item.son_comment_count}}次回复 >
                     </div>


                 </div>
             </li>
         </ul>
 </van-list>
```


```
onLoad() {
    // 异步更新数据
    const _self = this
    this.loading = true;
    let uidPub = JSON.parse(decodeURI(sessionStorage.getItem(UserInfoSave))).uid
    let courseNum = 1

    if(typeof(this.courseType) == 'undefined') {

    } else {
        console.log("this.course_type11111111111",this.courseType)
        courseNum = this.courseType
    }
    commentList({
        page: this.currentPage + "",
        uid:uidPub + "",
        pageSize: this.pageSize + "",
         course_id:this.act_id_new + "",
         file_type:this.fileType + "",
         course_type:courseNum + "",
    }).then(res => {
        console.log("评论列表", res);
        // this.loading = false;
        // this.list = res.data.data;
        // this.finished = true;
        this.isLoading = false
        if(res.ret == 0) {
            const rows = res.data.data
            if(res.data.length == 0) {
                   _self.finished = true
                // _self.commentList = []
                return
            }
            //第一页如果没有，才显示空状态
            if (rows.length === 0 && res.data.currentPage == 1) {
                // 加载结束
                _self.finished = true
                _self.commentList = []
                return
            }
            if (rows == null || rows.length === 0) {
                // 加载结束
                _self.finished = true
                // _self.commentList = []
                return
            }
            if (rows.length < this.pageSize) {
                // 最后一页不足10条的情况
                _self.finished = true
            }
            // 处理数据
            if (_self.currentPage === 1) {
                _self.list = rows
            } else {
                _self.list = _self.list.concat(rows)
            }
            // _self.commentList = this.sort_pro(_self.list,['play_date'])
            _self.commentList = _self.list
        }

    }).catch(error => {
        _self.finished = true
        // this.$message({
        //     showClose: true,
        //     message: '获取资源列表异常{' + error + '}',
        //     type: 'error'
        // })
    }).finally(() => {
        _self.loading = false
        this.isLoading = false
        // _self.isUpLoading = false
    })
},
// 上拉加载请求方法
onLoadDown() {
    this.loading = true;
    this.currentPage ++;
    this.onLoad();
},
```




你这么写就会发现，到页面底部时候，不再多请求数据了。

关键其实就是

在onLoadDown方法里面的在this.onLoad方法前面加，this.loading = true即可。
