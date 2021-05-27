

新建ProgressBar.tsx组件

```


import React, { Component } from 'react';
import PropTypes from 'prop-types';
interface IProps {
    nums: number
    data: number
    progressColor: string
}
interface IState {
    bgColor:string
    progressColor:string
}
 class ProgressBar extends Component<IProps,IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      bgColor: '#000',
      progressColor: '#aaa',
    };
  }

  renderProgress() {
    const progressItemStyle = {
      width: `${100 / this.props.nums }%`,
      height: '100%',
      lineHeight: '100%',
      padding: '0px 4px',
      fontWeight: 800,
      // color: `rgb(${this.props.progressColor}`,
    };
    let progressItemLength = this.props.nums * (this.props.data / 100);
    var ele = [];
    for (let i = 0; i < progressItemLength; i++) {
      ele.push(
        <div
          style={Object.assign(progressItemStyle, {
            color: `rgb(${this.props.progressColor}`,
          })}
          key={i}
        >
          /
        </div>,
      );
    }
    return ele;
  }

  componentDidMount() {
    if (this.props.data >= 90) {
      this.setState({ bgColor: '#FFF5F5', progressColor: '#F45A59' });
    } else if (this.props.data >= 80) {
      this.setState({ bgColor: '#FAF5EE', progressColor: '#F5982C' });
    } else if (this.props.data >= 60) {
      this.setState({ bgColor: '#D4E9FA', progressColor: '#2A7CFF' });
    } else {
      this.setState({ bgColor: '#BAEBD0', progressColor: '#2AC870' });
    }
  }
  render() {
    const progressStyle = {
      display: 'flex',
      color: this.state.progressColor,
      // margin: '0 5px',
    };

    const progressArticleStyle = {
      height: '18px',
      width: '78%',
      display: 'flex',
      borderRadius: '10px',
      overflow: 'hidden',
      marginTop: '5px',
      color: this.state.progressColor,
      background: this.state.bgColor,
      border: `1px solid ${this.state.progressColor}`,
    };

    return (
      <div style={progressStyle}>
        <div style={progressArticleStyle}>{this.renderProgress()}</div>
        <div style={{ width: '22%', marginLeft: '5px' }}>
          {this.props.data}%
        </div>
      </div>
    );
  }
}

// ProgressBar.propTypes = {
//   nums: PropTypes.number.isRequired,
//   data: PropTypes.number.isRequired,
// };

export default ProgressBar;
```


在需要的组件直接引入即可

```

import ProgressBar from '../../componments/ProgressBar'



<ProgressBar nums={40} data={50} progressColor="#000000"/>
```

data数据就是占比的百分比（1-100）

nums就是里面条格数，自己根据进度条长度，调到一个适合的值即可
