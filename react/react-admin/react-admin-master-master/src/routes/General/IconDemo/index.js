import React from 'react'
import {Icon, Card, BackTop, Anchor, Affix} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

const icons = [
  {
    title: '方向性图标',
    anchor: 'direction',
    list: ["step-backward", "step-forward", "fast-backward", "fast-forward", "shrink", "arrows-alt", "down", "up", "left", "right", "caret-up", "caret-down", "caret-left", "caret-right", "up-circle", "down-circle", "left-circle", "right-circle", "up-circle-o", "down-circle-o", "right-circle-o", "left-circle-o", "double-right", "double-left", "verticle-left", "verticle-right", "forward", "backward", "rollback", "enter", "retweet", "swap", "swap-left", "swap-right", "arrow-up", "arrow-down", "arrow-left", "arrow-right", "play-circle", "play-circle-o", "up-square", "down-square", "left-square", "right-square", "up-square-o", "down-square-o", "left-square-o", "right-square-o", "login", "logout", "menu-fold", "menu-unfold"],
  },
  {
    title: '提示建议性图标',
    anchor: 'suggestion',
    list: ["question", "question-circle-o", "question-circle", "plus", "plus-circle-o", "plus-circle", "pause", "pause-circle-o", "pause-circle", "minus", "minus-circle-o", "minus-circle", "plus-square", "plus-square-o", "minus-square", "minus-square-o", "info", "info-circle-o", "info-circle", "exclamation", "exclamation-circle-o", "exclamation-circle", "close", "close-circle", "close-circle-o", "close-square", "close-square-o", "check", "check-circle", "check-circle-o", "check-square", "check-square-o", "clock-circle-o", "clock-circle"],
  },
  {
    title: '网站通用图标',
    anchor: 'logo',
    list: ["lock", "unlock", "area-chart", "pie-chart", "bar-chart", "dot-chart", "bars", "book", "calendar", "cloud", "cloud-download", "code", "code-o", "copy", "credit-card", "delete", "desktop", "download", "edit", "ellipsis", "file", "file-text", "file-unknown", "file-pdf", "file-excel", "file-jpg", "file-ppt", "file-add", "folder", "folder-open", "folder-add", "hdd", "frown", "frown-o", "meh", "meh-o", "smile", "smile-o", "inbox", "laptop", "appstore-o", "appstore", "line-chart", "link", "mail", "mobile", "notification", "paper-clip", "picture", "poweroff", "reload", "search", "setting", "share-alt", "shopping-cart", "tablet", "tag", "tag-o", "tags", "tags-o", "to-top", "upload", "user", "video-camera", "home", "loading", "loading-3-quarters", "cloud-upload-o", "cloud-download-o", "cloud-upload", "cloud-o", "star-o", "star", "heart-o", "heart", "environment", "environment-o", "eye", "eye-o", "camera", "camera-o", "save", "team", "solution", "phone", "filter", "exception", "export", "customer-service", "qrcode", "scan", "like", "like-o", "dislike", "dislike-o", "message", "pay-circle", "pay-circle-o", "calculator", "pushpin", "pushpin-o", "bulb", "select", "switcher", "rocket", "bell", "disconnect", "database", "compass", "barcode", "hourglass", "key", "flag", "layout", "printer", "sound", "usb", "skin", "tool", "sync", "wifi", "car", "schedule", "user-add", "user-delete", "usergroup-add", "usergroup-delete", "man", "woman", "shop", "gift", "idcard", "medicine-box", "red-envelope", "coffee", "copyright", "trademark", "safety", "wallet", "bank", "trophy", "contacts", "global", "shake", "api"]
  },
  {
    title: '品牌和标识',
    anchor: 'other',
    list: ["android", "android-o", "apple", "apple-o", "windows", "windows-o", "ie", "chrome", "github", "aliwangwang", "aliwangwang-o", "dingding", "dingding-o"],
  }
];

class IconDemo extends React.Component {
  render() {
    const cardContent = '使用Icon标签声明组件，指定图标对应的 type 属性。'
    const cardContent2 = `我们为每个图标赋予了语义化的命名，命名规则如下:
          <ul class="card-ul">
            <li>实心和描线图标保持同名，用 -o 来区分，比如 question-circle（实心） 和 question-circle-o（描线）；</li>
            <li>命名顺序：[图标名]-[形状?]-[描线?]-[方向?]。</li>
          </ul>`
    return (
      <div>
        <CustomBreadcrumb arr={['基本','图标']}/>
        <TypingCard title='如何使用' source={cardContent} id='howUse'/>
        <TypingCard title='图标的命名规范' id='standard' source={cardContent2} height={206}/>
        {
          icons.map(item => {
            return (
              <Card title={item.title} bordered={false} className='card-item' key={item.title} id={item.anchor}>
                {
                  item.list.map(icon => {
                    return (
                      <Card.Grid style={styles.gridItem} key={icon}>
                        <Icon type={icon} style={styles.icon}/><span>{icon}</span>
                      </Card.Grid>
                    )
                  })
                }
              </Card>
            )
          })
        }
        <BackTop visibilityHeight={200} style={{right: 50}}/>
        <Affix style={styles.affixBox}>
          <Anchor offsetTop={50} affix={false}>
            <Anchor.Link href='#howUse' title='如何使用'/>
            <Anchor.Link href='#standard' title='图标的命名规范'/>
            <Anchor.Link href='#direction' title='方向性图标'/>
            <Anchor.Link href='#suggestion' title='提示建议性图标'/>
            <Anchor.Link href='#logo' title='网站通用图标'/>
            <Anchor.Link href='#other' title='品牌和标识'/>
          </Anchor>
        </Affix>
      </div>
    )
  }
}

const styles = {
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    width: '17%'
  },
  icon: {
    fontSize: 18,
    marginBottom: 10
  },
  affixBox: {
    position: 'absolute',
    top: 100,
    right: 50,
    with: 170
  }
}

export default IconDemo