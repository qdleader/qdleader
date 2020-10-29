import React from 'react';
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class UserAdd extends React.Component {
  formRef = React.createRef();
  state = {
    currentName:'1' //显示的名字
  }
  onGenderChange = (value) => {
    this.formRef.current.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };
  //设置表单回显
  setName = () => {
    console.log('设置名字')
    let {currentName,currentData} = this.props
    console.log(currentName,currentData)

    this.formRef.current.setFieldsValue({
      currentName:currentName,
      email:currentData.email
    })
  }
  // 提交时候
  submitInfo = () => {
    console.log("提交")
        this.formRef.current
           .validateFields()
           .then((values) => {
             // form.resetFields();
             console.log("提交",values)
           })
           .catch((info) => {
             console.log('Validate Failed:', info);
           });
  }
  // form
  //        .validateFields()
  //        .then((values) => {
  //          form.resetFields();
  //          onCreate(values);
  //        })
  //        .catch((info) => {
  //          console.log('Validate Failed:', info);
  //        });

  onFinish = (values) => {
    console.log(values);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFill = () => {
    this.formRef.current.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  UNSAFE_componentWillMount(){
    // alert(1)
        this.props.onRef(this)
    }


  render() {
    // const {currentName} = this.props
    // console.log(currentName)
    return (
      <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
        <Form.Item
          name="currentName"
          label="姓名"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) => {
            return getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null;
          }}
        </Form.Item>
      </Form>
    );
  }
}

export default UserAdd
