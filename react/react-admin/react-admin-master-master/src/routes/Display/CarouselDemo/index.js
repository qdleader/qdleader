import React from 'react'
import {Card, Carousel} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'
import './css/style.css'
import 'animate.css'

const animations = [
  ['bounceInDown','bounceInUp'],
  ['bounceInLeft','bounceInRight'],
  ['rotateIn','rotateIn'],
  ['flipInX','flipInY'],
  ['rotateInDownLeft','rotateInUpRight'],
  ['rotateInDownRight','rotateInUpLeft'],
  ['zoomInLeft','zoomInRight'],
  ['zoomInDown','zoomInUp'],
  ['zoomIn','zoomIn'],
  ['lightSpeedIn','bounceInLeft'],
]
// const colors = ['#364d79','#64cbcc','sandybrown','darksalmon','goldenrod','burlywood','darkseagreen','indianred']

function getAnimation(animations){
  let index = Math.floor(Math.random()*animations.length)
  let arr = animations[index]
  arr = arr.map(item=>{
    return `${item} animated slider-active`
  })
  return arr
}

class CarouselDemo extends React.Component {
  state = {
    current:0
  }
  animations = getAnimation(animations)
  componentWillUpdate(){
    //当current变化时，也就是state变化时重新给animations赋值，否则animations不会改变.实现类似vue的watch
    //用componentWUpdate还是componentDidUpdate根据具体场景，componentDidUpdate一般是需要用到state时调用（因为setState是异步，需要等更新完成）
    let temp  =  getAnimation(animations)
    while (this.animations[0] === temp[0] ) {
      temp = getAnimation(animations)
    }
    this.animations = temp

  }
  render(){
    const { current} = this.state
    const cardContent = `<ul class="card-ul">
            <li>当有一组平级的内容</li>
            <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现</li>
            <li>常用于一组图片或卡片轮播</li>
          </ul>`
    return (
      <div>
        <CustomBreadcrumb arr={['显示','轮播图']}/>
        <TypingCard source={cardContent} height={206}/>
        <Card title='基本用法'>
          <Carousel speed={100} arrows afterChange={(current)=>this.setState({current})} autoplay>
            <div>
              <div className='slider-item' style={{background:'#364d79'}}>
                <h3 className={current === 0 ? this.animations[0] : ''}>Ant Design of React</h3>
                <p className={current === 0 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
            <div>
              <div className='slider-item' style={{background:'#64cbcc'}}>
                <h3 className={current === 1 ? this.animations[0] : ''}>Ant Design of React</h3>
                <p className={current === 1 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
            <div>
              <div className='slider-item' style={{background:'sandybrown'}}>
                <h3 className={current === 2 ? this.animations[0] : ''}>Ant Design of React</h3>
                <p className={current === 2 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
            <div>
              <div className='slider-item' style={{background:'darkseagreen'}}>
                <h3 className={current === 3 ? this.animations[0] : ''}>Ant Design of React</h3>
                <p className={current === 3 ? this.animations[1] : ''}>The Fast Way Use Animation In React</p>
              </div>
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}

export default CarouselDemo