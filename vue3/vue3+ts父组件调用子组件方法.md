父组件
```
<div>

  <editPage ref="sonRef"/>
</div>


</template>

<script lang="ts">

import { onMounted ,reactive,toRefs,defineComponent,ref} from 'vue'
import editPage from './edit.vue'

import {displayList} from './../../http/httpUrl';
interface DataProps {
  formInline1: string;
  formInline2: string;
  dataList: [];
  current: number;
  pageSize: number;
  total: number;
  handleSubmit: () => void;
  getData: () => void;
  tableData:[]
}

interface ResProps {
  data: [];
  currentPage: number;
  totalCount: number;
}

export default defineComponent({
name:'about',
 components: {
     editPage
},
setup() {

  const sonRef = ref()
  const sendValue = () => {
     // 可以拿到son组件实例，并调用其setup返回的所有信息
     console.log(sonRef.value)

     // 通过调用son组件实例的方法，向其传递数据
     sonRef.value.acceptValue('123456')
   }



   return {
           sonRef
      }
```


子组件

```


export default defineComponent({
    name:'editPage',
     components: {
    },
    setup() {
    const data: DataProps = reactive({
          //正常写即可
          acceptValue:(value: string) => {
              console.log("子组件方法被调用啦",value)
          }

        })
        onMounted(() => {
            data.getData()
        })
        const refData = toRefs(data);
        return {
            ...refData
        }
    }
})
</script>
```
