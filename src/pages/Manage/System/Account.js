import React, { Component } from 'react';
import { Table, Divider } from 'antd';

const columns = [{
    title: '账号',
    dataIndex: 'account',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: '账号类型',
    dataIndex: 'type',
    key: 'type',
}, {
    title: '归属单位',
    dataIndex: 'sitename',
    key: 'sitename',
}, {
    title: '创建者',
    dataIndex: 'parentname',
    key: 'parentname',
}, {
    title: '创建类型',
    dataIndex: 'parenttype',
    key: 'parenttype',
}, {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
}, {
    title: '归属单位',
    dataIndex: 'sitename',
    key: 'sitename',
}, {
    title: '备注',
    dataIndex: 'nickname',
    key: 'nickname',
}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="javascript:;">Edit</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
        </span>
    ),
}];


const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    account: `Edrward ${i}`,
    type: {i},
    sitename: `New York No. 1 Lake Park${i}`,
    parentname: '123',
    parenttype: {i},
    phone: '123',
    nickname: 'haha'
  });
}

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}