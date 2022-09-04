redux与vuex一样是一个组件的状态（数据）管理器，当我们需要在项目各组件中共享数据时可以使用。
redux是一个第三方的库，本身和react没有任何关系，react-redux也是一个第三方库，可以帮助我们在react项目中更好的使用redux。
 
## store（状态库）：用于存放组件中的state。


 ```

    action（动作）：redux将每一次更改动作定义为一个action，如
    const action = { type:'input_change', val:123 }

 ```
 


 

## reducers（执行）：是一个纯函数，将根据action的不同来修改state。

 

## dispatch（分发）：组件中通过dispatch(action)，来实现动作的提交。

 

 


## 安装

 
```
npm install react react-redux --save
```

 



> 用react-redux管理todoList数据


action（动作）分析：

    > 输入框输入
    > 按钮提交
    > 列表点击删除

## 创建action


```

import actionTypes from './actionTypes'
 
const actionCreator = {
  getInputChangeAction: (val) => ({
    type: actionTypes.CHANGE_INPUT_VLAUE,
    value: val
  }),
  btnClickAction: (val) => ({
    type: actionTypes.BTN_CLICK,
    value: val
  }),
  listDelAction: (val) => ({
    type: actionTypes.LIST_DEL,
    index: val
  })
}
 
export default actionCreator;
```
 

action的type定义为常量放在actionType.js中统一管理，以避免type手写出错的可能。

```
actionTypes.js

const types = {
  CHANGE_INPUT_VLAUE: 'change_input_value',
  BTN_CLICK: 'btn_click',
  LIST_DEL: 'list_del'
}
 
export default types;
```
 

 

## 定义reducer

reducer.js
```
import actionTypes from './actionTypes';
 
const defaultState = {
  inputValue: '',
  list: [],
};
export default (state = defaultState, action) => {
  // reducer 可以接受state，但是绝不能修改state
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.CHANGE_INPUT_VLAUE:
      newState.inputValue = action.value;
      break;
    case actionTypes.BTN_CLICK:
      newState.list.push(action.value);
      newState.inputValue = '';
      break;
    case actionTypes.LIST_DEL:
      newState.list.splice(action.index, 1);
      break;
    default:
      break;
  }
  return newState;
};
 
```
 
## 创建store

index.js
```
import { createStore } from 'redux';
import reducer from './reducer';
 
const store = createStore(reducer);
 
export default store;
 
```
 

## 利用react-redux

index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import TodoList from './components/TodoList';
 
// if (process.env.NODE_ENV === "development") {
// require('./mock/index.js');
// }
 
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
 
```
React-Redux 提供Provider组件，可以让容器组件拿到state。上面代码中，Provider在根组件外面包了一层，这样一来，TodoList的所有子组件就默认都可以拿到state了。

 

### 组件中创建state、dispatch的映射关系

 
```
const mapStateToProps = state => {
  return {
    value: state.inputValue,
    list: state.list,
  };
};
 

const mapDispatchToProps = dispatch => {
  return {
    inputChange: e => dispatch(actions.getInputChangeAction(e.target.value)),
    btnClick: value => dispatch(actions.btnClickAction(value)),
    listClick: index => dispatch(actions.listDelAction(index)),
  };
};
 
```
意思就是将state与dispatch都映射到props，那么组件内就可以直接通过props来访问。

```
// ui组件
const TodoList = props => {
  const { value, list, inputChange, btnClick, listClick } = props;
  return (
    <div>
      <div>
        <input onChange={inputChange} value={value}></input>
        <button onClick={() => btnClick(value)}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} onClick={() => listClick(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
 

// connect连接组件

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
 
```


完整代码：TodoList.js

```
import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actionCreator';
 
const mapStateToProps = state => {
  return {
    value: state.inputValue,
    list: state.list,
  };
};
 
const mapDispatchToProps = dispatch => {
  return {
    inputChange: e => dispatch(actions.getInputChangeAction(e.target.value)),
    btnClick: value => dispatch(actions.btnClickAction(value)),
    listClick: index => dispatch(actions.listDelAction(index)),
  };
};
 
// todolist组件目前只有dom可以写成函数组件以提升效率；
// ui组件
const TodoList = props => {
  const { value, list, inputChange, btnClick, listClick } = props;
  return (
    <div>
      <div>
        <input onChange={inputChange} value={value}></input>
        <button onClick={() => btnClick(value)}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} onClick={() => listClick(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
 
// 容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
 
```
这样就实现了通过react-redux管理组件状态（数据）。

