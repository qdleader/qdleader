import React from 'react'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'
import {Card,Row,Col,BackTop} from 'antd'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css'

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class DraftDemo extends React.Component{
  state = {
    editorState: EditorState.createEmpty(),
    contentState:content
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  onContentStateChange =  (contentState) => {
    this.setState({
      contentState,
    });
  };

  uploadImageCallBack = ()=>{

  }
  render(){
    const cardContent = `此页面用到的富文本编辑是<a href="https://github.com/jpuri/react-draft-wysiwyg">react-draft-wysiwyg@^1.12.13</a>`
    const { editorState,contentState } = this.state;
    return (
      <div>
        <CustomBreadcrumb arr={['其它','富文本编辑器']}/>
        <TypingCard title='富文本编辑器' source={cardContent}/>
        <Card bordered={false} className='card-item'>
          <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onContentStateChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            localization={{ locale: 'zh'}}
            toolbar={{
              image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true }},
            }}
          />
        </Card>
        <Row gutter={10}>
          <Col span={8}>
            <Card title='同步转换HTML' bordered={false} style={{minHeight:200}}>
              {editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            </Card>
          </Col>
          <Col span={8}>
            <Card title='同步转换MarkDown' bordered={false} style={{minHeight:200}}>
              {editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
            </Card>
          </Col>
          <Col span={8}>
            <Card title='同步转换JSON' bordered={false} style={{minHeight:200}}>
              {JSON.stringify(contentState, null, 4)}
            </Card>
          </Col>
        </Row>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}
export default DraftDemo