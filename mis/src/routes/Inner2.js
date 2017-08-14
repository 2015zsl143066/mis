/**
 * Created by Tian on 2017/8/14.
 */
/**
 * Created by Tian on 2017/8/14.
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
import { routerRedux } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const TabPane = Tabs.TabPane;
class Inner2 extends React.Component{

  render(){
   console.log('outer')
    return (
      <div>
        inner2
      </div>
    );
  }

}

Inner2.propTypes = {
};
function stateMapProps(state) {
  return {...state};
}
export default connect(stateMapProps)(Inner2);
