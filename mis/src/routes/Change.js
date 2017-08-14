/**
 * Created by Tian on 2017/8/9.
 */
/**
 * Created by Tian on 2017/8/7.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Tabs } from 'antd';
import { Button,Card } from 'antd';
import { Popover} from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Table} from 'antd';
import { routerRedux } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const TabPane = Tabs.TabPane;
class Change extends React.Component{

  render(){
    const dispatch  =this.props.dispatch;
    function myFunction() {
      dispatch(routerRedux.push('/change/detail'));

    }
    const data = this.props.data;
    const columns = [{
      title: '变更时间',
      dataIndex: 'changeTime',
      key: 'changeTime',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '变更类型',
      dataIndex: 'changeType',
      key: 'changeType',
    }, {
      title: '课程名称',
      dataIndex: 'name',
      key: 'name',
    },
      {
        title: '是否完成',
        dataIndex: 'finish',
        key: 'finish',
      },{
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button onClick={()=>{
            console.log(record)
            dispatch(routerRedux.push({ pathname: '/change/detail', query:{
              id:record.id,
            }}));

          }}>详细情况</Button>
      <span className="ant-divider" />
          <Button>Delete</Button>

    </span>
      ),
    }];
    return (
      <div>
        <Table columns={columns} dataSource={data}  title={() => <div style={{textAlign:"center"}}>个人培养计划申请变动信息</div>} />

      </div>
    );
  }

}

Change.propTypes = {
};
function stateMapProps(state) {
  return {...state.change};
}
export default connect(stateMapProps)(Change);
