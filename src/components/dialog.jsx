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
                <div style={{ textAlign: 'center', height: '350px', verticalAlign: 'middle', padding: '64px' }}>
                    <Progress type="circle" percent={progress} />
                    <h2 style={{ padding: '64px' }}>{getProgressDescription(progress)}</h2>
                </div>
            );
        case 'success':
        default:
            return (
                <Result
                    style={{ height: '350px' }}
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
        case 10:
            return 'Validating Inverse Dimension Matrix'
        case 20:
        case 30:
            return 'Synthesizing fabolous materials';
        case 40:
        case 50:
            return 'Initializing Robotic Sewing-Path AI';
        case 60:
        case 70:
            return 'Threading fabric compositors';
        case 80:
        case 90:
            return 'Recalculating 4D splines';
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
        okButtonProps={{ disabled: status === 'loading' }}
    >
        {status === 'results' ? renderResults() : renderSuccess({ status, progress })}

    </Modal>

export default Dialog;
