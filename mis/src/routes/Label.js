/**
 * Created by Tian on 2017/8/13.
 */

import React from 'react';
import { connect } from 'dva';
import { Table, Button } from 'antd';
import { Icon } from 'antd';

class Label extends React.Component {

  render() {
    const columns = [{

      title: 'Key',
      dataIndex: 'mKey',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Val',
      className: 'column-money',
      dataIndex: 'val',
    }];
    const data = [
      {
        key: '1',
        mKey: '学生姓名',
        val: this.props.name
      },
      {
        key: '2',
        mKey:'学位类别',
        val:this.props.className1
      },
      {
        key: '3',
        mKey:'学院',
        val:this.props.graduate
      },
      {
        key: '4',
        mKey:'专业',
        val:this.props.major
      },
      {
        key: '5',
        mKey:'是否强制双盲',
        val:this.props.shuangMang1
      },{
        key: '6',
        mKey:'是否研究生院已抽签',
        val:this.props.shuangMang2
      },{
        key: '7',
        mKey:'抽签结果',
        val:this.props.result
      },
    ];

    return (
      <div>

        <Table showHeader={false} columns={columns} dataSource={data} />

      </div>
    );
  }
}

Label.propTypes = {
};

function  stateToProps(state) {
  return {...state.label}
}
export default connect(stateToProps)(Label);
