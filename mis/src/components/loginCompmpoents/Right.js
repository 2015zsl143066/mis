import React from 'react';
import { Form, Input,Button, Checkbox, Icon } from 'antd'
const FormItem = Form.Item;
class Right extends  React.Component{

  render(){

    const  getFieldDecorator =this.props.getFieldDecorator;
    return(
      <div>
      <Form  className="login-form" style={{ margin: '10px', height: '100%'}}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}

          <br/> <Button type="primary" className="login-form-button" onClick={this.props.handleSumbit}>
          Log in
        </Button>
          &nbsp;&nbsp;<Button type="primary" className="login-form-button">
          cancel
        </Button><br/>
          <a className="login-form-forgot" href="" style={{color:"white"}}>找回密码</a>&nbsp;&nbsp;&nbsp;&nbsp;

          <a href="" style={{color:"white"}}>注册!</a>
        </FormItem>
      </Form>
      </div>
    )
  }
}

export  default Right;
