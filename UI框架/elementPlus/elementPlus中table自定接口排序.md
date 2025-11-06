# elementPlus中table自定接口排序
```js
 <el-table :data="tableData" @sort-change="sortTime"  class="header-bg"  style="width: 100%">
    <el-table-column label="提交兑换申请时间" width="150" prop="applyTime"   sortable="custom" >
       <template #default="scope">
         {{formatTime(scope.row.applyTime)}}
       </template>
    </el-table-column>
    </el-table>

<script lang="ts">
export default defineComponent({
  name: "User",
  components:{
    deliveryOrder,
    receiptInfomation
  },
  setup() {
    const data = reactive({

      sortTime:(prop: string, order: string) => {
        console.log(prop,order);
      },
     
    })
    const refData = toRefs(data);
    return {
        ...refData,
    }
  }
});
</script>
```
