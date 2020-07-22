import React from 'react'
import {Card, Button, Modal, Tooltip} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
import TypingCard from '../../../components/TypingCard'

class ModalDemo extends React.Component {
  state = {
    visible: false,
    visible2: false,
    visible3: false,
    visible4: false,
    visible5: false,
    ModalText: '显示对话框的内容',
    confirmLoading: false
  }

  closeModal(a) {
    this.setState({
      [a]: false
    })
  }

  asynModalOnOk = (a) => {
    this.setState({
      confirmLoading: true,
      ModalText: '对话框将在2秒后关闭'
    })
    setTimeout(() => this.setState({
      [a]: false,
      confirmLoading: false,
      ModalText: '显示对话框的内容'
    }), 2000)
  }
  showConfirm = () => {
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
    })
  }
  showDeleteConfirm = () => {
    Modal.confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  showModalType = (type) => {
    switch (type) {
      case 'info':
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          )
        })
        break;
      case 'success':
        Modal.success({
          title: 'This is a success message',
          content: 'some messages...some messages...',
        })
        break;
      case 'error':
        Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        })
        break;
      default:
        Modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        })
        break;
    }
  }

  render() {
    const {visible, visible2, visible3, visible4, visible5, ModalText, confirmLoading} = this.state
    const cardContent = ` 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。<br/>
          另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 antd.Modal.confirm() 等方法。`
    return (
      <div>
        <CustomBreadcrumb arr={['反馈','对话框']}/>
        <TypingCard source={cardContent} height={164}/>
        <Card bordered={false}>
          <p>
            <Button onClick={() => this.setState({visible: true})}>基本用法</Button>
            <Modal
              visible={visible}
              title='基本用法'
              onOk={() => this.closeModal('visible')}
              onCancel={() => this.closeModal('visible')}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </p>
          <p>
            <Tooltip title='点击确定后异步关闭对话框，例如提交表单' placement='right'>
              <Button onClick={() => this.setState({visible2: true})}>异步关闭</Button>
            </Tooltip>
            <Modal
              visible={visible2}
              title='异步关闭'
              onOk={() => this.asynModalOnOk('visible2')}
              confirmLoading={confirmLoading}
              onCancel={() => this.closeModal('visible2')}>
              <p>{ModalText}</p>
            </Modal>
          </p>
          <p>
            <Tooltip title='更复杂的例子，自定义了页脚的按钮' placement='right'>
              <Button onClick={() => this.setState({visible3: true})}>自定义页脚</Button>
            </Tooltip>
            <Modal
              visible={visible3}
              title='自定义页脚'
              onOk={() => this.asynModalOnOk('visible3')}
              onCancel={() => this.closeModal('visible3')}
              footer={
                <div>
                  <Button onClick={() => this.closeModal('visible3')}>Return</Button>
                  <Button type="primary" loading={confirmLoading} onClick={() => this.asynModalOnOk('visible3')}>
                    Submit
                  </Button>
                </div>}
            >
              <p>{ModalText}</p>
            </Modal>
          </p>
          <p>
            <Button onClick={this.showConfirm}>确认对话框</Button>&emsp;
            <Button onClick={this.showDeleteConfirm}>删除确认框</Button>
          </p>
          <p>
            <Button onClick={() => this.showModalType('info')}>信息提示</Button>&emsp;
            <Button onClick={() => this.showModalType('success')}>成功</Button>&emsp;
            <Button onClick={() => this.showModalType('error')}>错误</Button>&emsp;
            <Button onClick={() => this.showModalType('warning')}>警告</Button>
          </p>
          <p>
            <Button onClick={() => this.setState({visible4: true})}>距离顶部20px</Button>
            <Modal
              visible={visible4}
              title='距离顶部20px'
              style={{top: 20}}
              onOk={() => this.closeModal('visible4')}
              onCancel={() => this.closeModal('visible4')}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </p>
          <p>
            <Button onClick={() => this.setState({visible5: true})}>垂直居中</Button>
            <Modal
              visible={visible5}
              title='垂直居中'
              wrapClassName="vertical-center-modal"
              style={{top: '30%'}}
              onOk={() => this.closeModal('visible5')}
              onCancel={() => this.closeModal('visible5')}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </p>
        </Card>
      </div>
    )
  }
}

// const styles = {
//   modalVertical: {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%,-50%)'
//   }
// }

export default ModalDemo