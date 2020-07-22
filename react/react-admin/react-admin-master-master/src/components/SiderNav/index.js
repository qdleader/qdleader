import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: '基本组件',
    icon: 'laptop',
    key: '/home/general',
    subs: [
      {key: '/home/general/button', title: '按钮', icon: '',},
      {key: '/home/general/icon', title: '图标', icon: '',},
    ]
  },
  {
    title: '导航组件',
    icon: 'bars',
    key: '/home/navigation',
    subs: [
      {key: '/home/navigation/dropdown', title: '下拉菜单', icon: ''},
      {key: '/home/navigation/menu', title: '导航菜单', icon: ''},
      {key: '/home/navigation/steps', title: '步骤条', icon: ''},
    ]
  },
  {
    title: '输入组件',
    icon: 'edit',
    key: '/home/entry',
    subs: [
      {
        key: '/home/entry/form',
        title: '表单',
        icon: '',
        subs: [
          {key: '/home/entry/form/basic-form', title: '基础表单', icon: ''},
          {key: '/home/entry/form/step-form', title: '分步表单', icon: ''}
        ]
      },
      {key: '/home/entry/upload', title: '上传', icon: ''},
    ]
  },
  {
    title: '显示组件',
    icon: 'desktop',
    key: '/home/display',
    subs: [
      {key: '/home/display/carousel', title: '轮播图', icon: ''},
      {key: '/home/display/collapse', title: '折叠面板', icon: ''},
      {key: '/home/display/list', title: '列表', icon: ''},
      {key: '/home/display/table', title: '表格', icon: ''},
      {key: '/home/display/tabs', title: '标签页', icon: '',},
    ]
  },
  {
    title: '反馈组件',
    icon: 'message',
    key: '/home/feedback',
    subs: [
      {key: '/home/feedback/modal', title: '对话框', icon: '',},
      {key: '/home/feedback/notification', title: '通知提醒框', icon: ''},
      {key: '/home/feedback/spin', title: '加载中', icon: '',}
    ]
  },
  {
    title: '其它',
    icon: 'bulb',
    key: '/home/other',
    subs:[
      {key: '/home/other/animation', title: '动画', icon: '',},
      {key: '/home/other/gallery', title: '画廊', icon: '',},
      {key:'/home/other/draft',title:'富文本',icon:''},
      {key:'/home/other/chart',title:'图表',icon:''},
      {key:'/home/other/loading',title:'加载动画',icon:''},
      {key:'/home/other/404',title:'404',icon:''},
      {key:'/home/other/springText',title:'弹性文字',icon:''},
    ]
  },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/home/about'
  }
]


class SiderNav extends React.Component {
  render() {

    return (
      <div style={{height: '100vh',overflowY:'scroll'}}>
        <div style={styles.logo}></div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav