import React, { Component } from 'react';
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

import SubMenu from 'antd/lib/menu/SubMenu';
import styles from './layout.css';
import { Link } from 'react-router-dom';

const {
    Header, Footer, Sider, Content,
} = Layout;

export default class extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className={styles.logo} />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="home">
                            <Icon type="pie-chart" />
                            <span>Home</span>
                            <Link to='/Manage' />
                        </Menu.Item>
                        <SubMenu
                            key="system"
                            title={<span><Icon type="user" /><span>系统管理</span></span>}
                        >
                            <Menu.Item key="account"><Link to='/Manage/System/Account'/>账号管理</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="software"
                            title={<span><Icon type="team" /><span>软件管理</span></span>}
                        >
                            <Menu.Item key="softwaremanage"><Link to='/Manage/Software/software' />软件包管理</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="brance"
                            title={<span><Icon type="team" /><span>网点管理</span></span>}
                        >
                            <Menu.Item key="brancemanage"><Link to='/Manage/Branch/branch' />网点列表</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            { this.props.children }
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}