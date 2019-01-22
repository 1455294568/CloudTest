import React, { Component } from 'react';
import { Card, Col, Row, Carousel, List } from 'antd';

const products = ['三段式动态计泡', '二合一在线供包台', '二合一直线供包台', '两段式动态计泡', '小货快手', '到件狂扫', '快手一分四', 'HikCommLayer', '静态计泡三合一', '皮带小秤'];
const listitem = products.map((i) => <li>{i}</li>);

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Col span={4}>
                            <Card title="快递公司" bordered={false}>15家</Card>
                        </Col>
                        <Col span={4}>
                            <Card title="网点" bordered={false}>932个</Card>
                        </Col>
                        <Col span={4}>
                            <Card title="总设备" bordered={false}>3691</Card>
                        </Col>
                        <Col span={4}>
                            <Card title="即将到期设备" bordered={false}>22台</Card>
                        </Col>
                        <Col span={4}>
                            <Card title="已过期设备" bordered={false}>38台</Card>
                        </Col>
                        <Col span={4}>
                            <Card title="软件包" bordered={false}>17个</Card>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card title="欢迎登录" bordered={false}>
                                <p>你的账号级别为: <span>系统子账号</span></p>
                                <p>绑定号码: <span>未绑定</span></p>
                                <p>联系人: <span>未绑定</span></p>
                                <p>联系电话: <span>未绑定</span></p>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Carousel autoplay>
                                <div><h3>1</h3></div>
                                <div><h3>2</h3></div>
                                <div><h3>3</h3></div>
                                <div><h3>4</h3></div>
                            </Carousel>
                        </Col>
                        <Col span={6}>
                            <Card title="星程产品系列" bordered={false}>
                                <ul>{listitem}</ul>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}