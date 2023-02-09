## 自定hook方式

```js
import { Button } from 'antd'
import React, { useState, useRef, useEffect } from 'react'
// 使用自定义hook结合useState，模拟class组件的setState的第二个参数-回调函数
const useSimulationCbWithUseStateCustom = (initState: any) => {
  const [num, setNum] = useState(initState)
  const cbRef = useRef<any>(null)

  const setState = (state: any, cbFc: any) => {
    setNum(state)
    cbRef.current = cbFc
  }

  useEffect(() => {
    typeof cbRef.current === 'function' && cbRef.current(num)
    cbRef.current = null
  }, [num])

  return [num, setState]
}

const SimulationCbWithUseStateCustom = () => {
  const [num, setNum] = useSimulationCbWithUseStateCustom(0)
  const addNumCustom = () => {
    setNum(num + 1, (res: number) => {
      console.log('faith=============', res)
    })
  }
  return (
    <div>
      SimulationCbWithUseStateCustom模式
      <Button onClick={addNumCustom}>addNum</Button>num:{num}
    </div>
  )
}
export default SimulationCbWithUseStateCustom

```


## Promise结合useState实现

```js
import { Button } from 'antd'
import React, { useState } from 'react'
// 使用promise结合useState，模拟class组件的setState的第二个参数-回调函数
const SimulationCbWithUseState = () => {
  const [num, setNum] = useState(0)

  const addNum = () => {
    new Promise((resolve, reject) => {
      setNum(preNum => {
        resolve(preNum + 1)
        return preNum + 1
      })
    }).then(res => {
      console.log('faith=============', res)
    })
  }

  return (
    <div>
      SimulationCbWithUseStatePromise模式
      <Button onClick={addNum}>addNum</Button>num:{num}
    </div>
  )
}
export default SimulationCbWithUseState


```


