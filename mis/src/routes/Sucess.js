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
import { routerRedux } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const TabPane = Tabs.TabPane;
class Sucess extends React.Component{

  render(){
    const that = this;
    function myFunction1({item, key, keyPath}) {
      console.log(item);
      console.log(key);
      console.log(keyPath);
      that.props.dispatch(routerRedux.push(key));
    }
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    const GraduareNews=[];
    for(let  i=0;i<this.props.graduateNews.length; i++){

      GraduareNews.push(
        <Popover key={i} placement="topLeft" content={this.props.graduateNews[i].content} title={this.props.graduateNews[i].title} trigger="hover">
          <p key={i}>{this.props.graduateNews[i].date},{this.props.graduateNews[i].title}</p>
        </Popover>

      )
    }
    const XueYuanNews=[];
    for(let  i=0;i<this.props.news.length; i++){
      XueYuanNews.push(
        <p key={i}>{this.props.news[i].date},{this.props.news[i].title}</p>
      )

    }
    return (
      <div>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '32px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Header style={{height:'20px'}}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                onClick={myFunction1}
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="change">课程变更</Menu.Item>
                  <Menu.Item key="label">抽签</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="当前通知" key="1">

                    <Card title="研究生院公告" style={{ width: 1000 }}>
                      {GraduareNews}
                    </Card>
                    <Card title="学院公告" style={{ width: 1000 }}>
                      {XueYuanNews}
                    </Card>
                  </TabPane>
                  <TabPane tab="校历下载" key="2">

                  </TabPane>
                  <TabPane tab="我的课表" key="3">
                    <Button type="primary">课表</Button>

                  </TabPane>
                </Tabs>
              </Content>
            </Layout>
          </Layout>
        </Layout>

      </div>
    );
  }

}

Sucess.propTypes = {
};
function stateMapProps(state) {
  return {...state.sucess};
}
export default connect(stateMapProps)(Sucess);
