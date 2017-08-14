/**
 * Created by Tian on 2017/8/2.
 */
import React from 'react';
import { connect } from 'dva';
import Left from '../components/loginCompmpoents/Left'
import Right from '../components/loginCompmpoents/Right'
import styles from './IndexPage.css';

import { Row, Col } from 'antd';
import { Form, Icon, Input, Button, Checkbox, Select,Radio, Table } from 'antd';
import { Modal } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
class Search extends React.Component {
  state = {
    expand: false,
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <FormItem {...formItemLayout} label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`)(
              <Input placeholder="placeholder" />
            )}
          </FormItem>
        </Col>
      );
    }
    return children;
  }


  render() {
    const that  =this;
    function handleOk() {
      that.props.form.validateFields((err, values) => {
        if(err){
          console.log('值为空，或者正则校验失败')
        }
        if (!err) {
          console.log('用户输入的值： ', values);
          that.props.dispatch({
            type:'search/fetch',
            payload: values
          })
        }
      });
    }
    const getFieldDecorator = this.props.form.getFieldDecorator;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    const c=[
      {
        title:'期刊名',
        dataIndex: 'name',
        kye:'name'
      },
      {
        title:'是否SCI',
        dataIndex: 'sci',
        kye:'sci'
      },
      {
        title:'是否EI',
        dataIndex: 'ei',
        kye:'ei'
      },
      {
        title:'是否CSCD',
        dataIndex: 'cscd',
        kye:'cscd'
      },
    ]
    const d = this.props.list;
    return (
      <div>
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
          <FormItem
            label="刊物年度"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 8 }}
          >
            {getFieldDecorator('year', {
              rules: [{ required: true, message: 'Please select your gender!' }],
            })(
              <Select
                placeholder="请选择学年"
              >
                <Option value="2017">2017</Option>
                <Option value="2016">2016</Option>
                <Option value="2015">2015</Option>
                <Option value="2014">2014</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="查询条件"
          >
            {getFieldDecorator('radio-group')(
              <RadioGroup>
                <Radio value="a">按ISSN</Radio>
                <Radio value="b">按刊物名称</Radio>

              </RadioGroup>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="查询条件"


          >      {getFieldDecorator('condition', {
            rules: [{ required: false, message: 'Please input your username!' }],
          })(
            <Input placeholder="" id="error" style={{width:'50%'}} />
          )}
            ->可以模糊查询

          </FormItem>
        </Form>
        <Button onClick={handleOk}>查询</Button>
        <Table
          columns={c}
          dataSource={d}
        />
      </div>
    );
  }
}

const MySearch = Form.create()(Search);
function  stateToProps(state) {
  return {...state.search}
}
export default connect(stateToProps)(MySearch);
