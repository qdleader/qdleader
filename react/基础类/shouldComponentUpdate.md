
只要是组件继承自React.Component就会存在当父组件重新render的时候，子组件也会重新执行render,即使这个子组件没有任何变化。子组件只要调用setState就会重新执行render,及时setState的参数是一个空对象。




shouldComponentUpdate(nextProps,nextState) {
    console.log(this.props,this.state); // 目前的props 和 state
    console.log(nextProps,nextState); // 要变化的目标 props 的和 目标 state
    if (nextProps.m1 === this.props.m1 && nextState.m2 === this.state.m2) {
        return false;   // 没有变， 不渲染了
    } else {
        return true;  // 改变了 才渲染
    }
}


当shouldComponentUpdate返回为true的时候，当前组件进行render，如果返回的是false则不进行render.





