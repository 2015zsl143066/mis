/**
 * Created by Tian on 2017/8/9.
 */
/**
 * Created by Tian on 2017/8/2.
 */
import React from 'react';
import { connect } from 'dva';
import { Table, Button } from 'antd';
class Detail extends React.Component {


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
        mKey: '变更日期',
        val: this.props.changeTime
      },
      {
        key: '2',
        mKey:'课程名称',
        val:this.props.className1
      },
      {
        key: '3',
        mKey:'学分',
        val:this.props.score
      },
      {
        key: '4',
        mKey:'上课学年',
        val:this.props.grade
      },
    ];
const a = [{
  key: '1',
  bKey:'基本信息',
  bval:'2014-3-4'}];
    const columnsB = [{
      width:"30px",
      title: 'Key',
      dataIndex: 'bKey',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Val',
      className: 'mytd',
      dataIndex: 'bval',
      render:(text, record, index)=>{
        return(
          <Table showHeader={false}
                 columns={columns}
                 dataSource={data}
                 bordered
                 pagination={false}
                 style={{padding:"0px"}}
          />
        )
      }
    }]
    return (
      <div>

        <Table showHeader={false}
               columns={columnsB}
               dataSource={a}
               bordered
               title={() => '个人培养计划变更-浏览'}

        />

      </div>
    );
  }
}

Detail.propTypes = {
};

function  stateToProps(state) {
  return {...state.detail}
}
export default connect(stateToProps)(Detail);
