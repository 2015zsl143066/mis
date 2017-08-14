/**
 * Created by Tian on 2017/8/2.
 */
import React from 'react';
import { connect } from 'dva';
import Left from '../components/loginCompmpoents/Left'
import Right from '../components/loginCompmpoents/Right'
import styles from './IndexPage.css';
import { routerRedux } from 'dva/router';
import { Row, Col } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Modal } from 'antd';
const FormItem = Form.Item;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        /*正则校验失败*/
        console.log(' 失败原因 ', err);
        return  false;
      }
      console.log('表单中输入的值为:',values)
      this.props.dispatch({
        type:"login/fetch",
        payload: values,
      })
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const that  =this;
    const handleOk = (e) => {
      if(that.props.success==true)
      {
        that.props.dispatch(routerRedux.push('/sucess'));

      }
      else
      {
        that.props.dispatch({
          type:"login/save",
          payload:{ modalVisible: false},
        })
      }

    }
    return (
      <div style={{background:"url('beijing.jpg')",height:"1024px"}}>
        <Row style={{ marginLeft :"30%", paddingTop: '200px'}}>

            <Left/>
          <Col span={12} style={{background:'url("ren.gif") no-repeat', backgroundSize:'100%', paddingLeft:'20%', paddingTop: '4%'}}>
            <Right handleSumbit={this.handleSubmit} getFieldDecorator={getFieldDecorator}></Right>
          </Col>
        </Row>
        <Modal
         visible={this.props.modalVisible }
         onOk={handleOk}
         onCancel={handleOk}
        >
          login success
          {this.props.message}
        </Modal>
      </div>
    );
  }
}

Login.propTypes = {
};
const LoginApp = Form.create()(Login);
function  stateToProps(state) {
 return {...state.login}
}
export default connect(stateToProps)(LoginApp);
