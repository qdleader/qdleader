

```
<el-popover
     v-model="visible"
     placement="top"
     width="208"
     :popper-class="isEmbedded?'checkVisibled dbrc-popover dbrc-popoverupper':'checkVisibled-white dbrc-popover dbrc-popoverupper'"
   >
     <div
       slot="reference"
       :ref="`popoverBtn`"
       class="dialogAdd-box-right-add dbra-top"
       @click.stop="addPop(item,index)"
     >
       <i class="iconfont icon-bim-add dialogAdd-box-right-add icon-bim-add-top ibat" />
     </div>
   </el-popover>



   // 自定义一个 box
  <div @click.stop="doShowPopover">
    控制显隐
  </div>
```


```
doShowPopover(item, index) {
   this.$refs[`popoverBtn`].click();
 },
```


关键点就是 你在自定义事件那加一个阻止默认事件。防止你已经触发popover 已经打开，但事件传递到document 上又被关闭了
