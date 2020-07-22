import {observable,action} from 'mobx'

//刷新页面会使mobx重新初始化。vuex会吗？

class StepFormStore{
  @observable current = 0
  @observable info = {}

  @action setCurrent(current){
    this.current = current
  }
  @action setInfo(info){
    this.info = info
  }
}

export default new StepFormStore()