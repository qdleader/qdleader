import React from 'react'
import {Card, Col, Row, Icon, Upload, message, Button, Modal,BackTop} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
import TypingCard from '../../../components/TypingCard'

const Dragger = Upload.Dragger;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 文件上传失败`);
    }
  },
  defaultFileList: [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: 2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: 3,
    name: 'zzz.png',
    status: 'error',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
}

const props2 = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
}

class UploadDemo extends React.Component {
  state = {
    loading: false,
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
  }

  beforeUpload(file, fileList) {
    const isJPG = file.type === 'image/jpeg'
    if (!isJPG) {
      message.error('只能上传JPG格式的图片');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片大小不超过 2MB!');
    }
    return isJPG && isLt2M;
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({loading: true});
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }))
    } else if (info.file.status === 'error') {
      // console.log(info.file)
      message.error(`${info.file.name} 文件上传失败（${info.file.error.message}）`);
      this.setState({
        loading: false
      })
    }
  }
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  render() {
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const cardContent = `上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。
          <ul class="card-ul">
            <li>当需要上传一个或一些文件时</li>
            <li>当需要展现上传的进度时</li>
            <li>当需要使用拖拽交互时</li>
          </ul>`
    return (
      <div>
        <CustomBreadcrumb arr={['输入', '上传']}/>
        <TypingCard source={cardContent} height={234}/>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} className='card-item' title='基本用法'>
              <Upload {...props}>
                <Button><Icon type="upload"/>Upload</Button>
              </Upload>
            </Card>
            <Card bordered={false} style={{...styles.colItem, minHeight: 255}} title='照片墙'>
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={this.state.fileList}
                onPreview={this.handlePreview}
                onChange={({fileList}) => this.setState({fileList})}
              >
                {this.state.fileList.length >= 3 ? null : uploadButton}
              </Upload>
              <Modal visible={this.state.previewVisible} onCancel={() => this.setState({previewVisible: false})}>
                <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
              </Modal>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} className='card-item' title='用户头像上传'>
              <Row type='flex' align='middle'>
                <Col span={8}>
                  <Upload
                    name="avatar"
                    showUploadList={false}
                    action='/upload'
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleChange}
                    listType="picture-card">
                    <div>
                      <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                      <div className="ant-upload-text">Upload</div>
                    </div>
                  </Upload>
                </Col>
                <Col span={16}>
                  点击上传用户头像，并使用 beforeUpload 限制用户上传的图片格式和大小
                </Col>
              </Row>
            </Card>
            <Card bordered={false} className='card-item' title='拖拽上传'>
              <Dragger {...props2}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox"/>
                </p>
                <p className="ant-upload-text">点击或拖拽到此处完成上传</p>
                <p className="ant-upload-hint">支持单个或批量上传。严禁上传公司数据或其他带文件</p>
              </Dragger>
            </Card>
          </Col>
        </Row>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}

const styles = {
  colItem: {
    minHeight: 230,
    borderRadius: 3,
    margin: '10px 0'
  }
}

export default UploadDemo