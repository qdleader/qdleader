```
import React from 'react';
import ReactDOM from 'react-dom'


class Demo extends React.Component {
    state = {count :0}
    myRef = React.createRef()
    show = () => {
        alert(this.myRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                <Button onClick={this.show}>展示</Button>
            </div>
        )
    }
}
```