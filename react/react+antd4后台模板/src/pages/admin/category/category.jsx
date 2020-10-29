import React, {Component} from 'react'
import { Table ,Modal} from 'antd';

import {reqList} from '../../../api';
import LinkButton from '../../../components/link-button/link-button'

import Swiper from "swiper"
import "swiper/swiper.less"

import './index.less'

// import Swiper from 'swiper/dist/js/swiper.js'
import "swiper/swiper-bundle.css";
// import 'swiper/dist/css/swiper.min.css'

class UserList extends Component {
  state = {
    data: [],//列表中数据
    pagination: {
      current: 1,
      pageSize: 10,
    },//分页数据
    loading: false,//加载动画
    visible:false,//弹出层显隐
    showEdit:true,//弹出层标题
    columns:[],//表格的默认样式
    currentData:[],//选中当前列的数据
		newlist:[{
			id:1,
			url:'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3101543905,889928613&fm=15&gp=0.jpg'
		},{
			id:2,
			url:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2950417306,1503952458&fm=115&gp=0.jpg'
		},{
			id:3,
			url:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=917598580,3497736501&fm=115&gp=0.jpg'
		},{
			id:4,
			url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1361679827,3410668645&fm=15&gp=0.jpg'
		}]
  };

  UNSAFE_componentWillMount() {
		this.initSwiper();
  }
  UNSAFE_componentDidMount() {
		this.initSwiper();
  }
	// pageSize:res.data.totalCount,
	initSwiper(){
			this.setState({
            // list:res.data
        },
            ()=>{
                new Swiper ('.swiper-container', {
                    loop: true,
										observer: true,
										autoplay: {
						 					delay: 1000,
						 					stopOnLastSlide: false,
						 					disableOnInteraction: true,
					 					},
                    pagination: {
                        el: '.swiper-pagination'
                    },
										scrollbar: {
									    el: '.swiper-scrollbar',
									  },
                })
								// var mySwiper = new Swiper ('.swiper-container', {
								// 	direction: 'vertical', // 垂直切换选项
								// 	loop: true, // 循环模式选项
								//
								// 	// 如果需要分页器
								// 	pagination: {
								// 		el: '.swiper-pagination',
								// 	},
								//
								// 	// 如果需要前进后退按钮
								// 	navigation: {
								// 		nextEl: '.swiper-button-next',
								// 		prevEl: '.swiper-button-prev',
								// 	},
								//
								// 	// 如果需要滚动条
								// 	scrollbar: {
								// 		el: '.swiper-scrollbar',
								// 	},
								// })
            }
        )
		}
  render() {
    const { data, pagination, loading ,showEdit,currentData} = this.state;
    // console.log(1234,this.currentData)
    return (
      <div>

							<div
		           className="swiper-container"
		           style={{
		             width: "100%s",
		             height: "200px",
		           }}
		         >
		           <div className="swiper-wrapper">
		             {this.state.newlist.map((item) => {
		               return (
		                 <div className="swiper-slide" key={item.id}>
		                   <img
		                     style={{ width: "100%", height: "100%" }}
		                     src={item.url}
		                     alt=""
		                   />
		                 </div>
		               );
		             })}
		           </div>

							 <div className="swiper-pagination"></div>
							 <div className="swiper-pagination"></div>
								<div className="swiper-button-prev"></div>
								<div className="swiper-button-next"></div>

								<div className="swiper-scrollbar"></div>

		         </div>
      </div>
    )
  }
}


export default UserList
