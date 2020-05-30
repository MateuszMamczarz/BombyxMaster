import React, { useState } from 'react';
import { Modal } from 'antd';
import { Card, Col, Row, Carousel, Statistic, Result, Button, Progress } from 'antd';

const renderResults = () =>
    <Row gutter={16}>
        <Col span={12}>
            <Carousel autoplay>
                <img alt="example" height="460" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                <img alt="example" height="460" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </Carousel>
        </Col>
        <Col span={12}>
            <Card title="Dimensions" bordered={true} style={{ height: 460 }}>
                <Row gutter={[16, 48]}>
                    <Col span={12}>
                        <Statistic title="Height" value={173} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Width" value={60} />
                    </Col>
                </Row>
                <Row gutter={[16, 48]}>
                    <Col span={12}>
                        <Statistic title="Weigth" value='Plus sized' />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Hips" value='Thick' />
                    </Col>
                </Row>
                <Row gutter={[16, 48]}>
                    <Col span={12}>
                        <Statistic title="Shoulder" value={156} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Arms" value={55} />
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>

const renderSuccess = ({ status, progress }) => {
    switch (status) {
        case 'loading':
            return (
                <div style={{ textAlign: 'center' }}>
                    <Progress type="circle" percent={progress} />;
                    <p style={{ padding: '64px' }}>{getProgressDescription(progress)}</p>
                </div>
            );
        case 'success':
        default:
            return (
                <Result
                    status="success"
                    title="Your design is ready!"
                    subTitle="Order number: 2017182818828182881"
                    extra={[<Button key="Export">Export</Button>]}
                />);
    }
}

const getProgressDescription = (progress) => {
    switch (progress) {
        case 0:
            return 'Validating dimensions'
        case 10:
        case 20:
            return 'Adding fabolous materials';
        case 30:
        case 40:
        case 50:
            return 'Enhancing dimensions';
        case 60:
        case 70:
            return 'Optimizing magical style ';
        case 80:
        case 90:
        case 100:
            return 'Finalizing your clothes';
        default:
            return 'Something is not ok'
    }
}

const titles = {
    results: 'Review your design',
    loading: 'Generating your design',
    success: 'Confirmed'
}

const Dialog = ({ status, visible, onOk, onCancel, progress }) =>
    <Modal
        title={titles[status]}
        centered
        width={800}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
    >
        {status === 'results' ? renderResults() : renderSuccess({ status, progress })}

    </Modal>

export default Dialog;
