react + ts 中添加条形码批量生成



```
import JsBarcode from 'jsbarcode';



       // 导出条形码

     exportDefaultBarList = (dev_id: number = 1) => {
         deviceDevnoList({dev_id:dev_id})
         .then((res) => {
           console.log("要导出码库列表", res);
           let list = res.data;
           this.setState({
             qrList:res.data
           })

           setTimeout(() => {
             this.downloadBarPicture()
           },50)


           console.log("list", list);

         })
         .catch((err) => {
           console.log(err);
         });
     }
downloadBarPicture() {
      let barcode = document.getElementById('barcodeBox')
       for(let i = 0; i < this.state.qrList.length;i ++) {
          let li = document.createElement('svg')
           li.id = i + ''
          barcode?.appendChild(li)
       }

       setTimeout(() => {
           let svgList =  barcode?.getElementsByTagName('svg')
           for(let i = 0;i < this.state.qrList.length; i++) {
              if(svgList) {
                  let content = svgList[i]
                   JsBarcode(content,this.state.qrList[i].device_id+'')
              }
           }
       },500)
}    



<Button type='primary' onClick={() => {
                            this.exportDefaultBarList(admin.dev_id)
                        }}>导出条形码</Button>

                        <div id="barcodeBox">
                                       {
                                               this.state.qrList.map((v:any) => (

                                                       <svg key={v.id}>111</svg>

                                               ))
                                           }

                                       </div>

```
