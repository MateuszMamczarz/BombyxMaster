import React from 'react';
import { Row, Col } from 'antd';

const Picker = ({ title, options }) => {
    return (
        <div className='picker-container'>
            <label className='title'>{title}</label>
            <Row>
                <Col span={12}>
                    <div className='circle left'></div>
                </Col>
                <Col span={12}>
                    <div className='circle right'></div>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <div className='circle left'></div>
                </Col>
                <Col span={12}>
                    <div className='circle right'></div>
                </Col>
            </Row>
        </div>
    )
}

export default Picker;