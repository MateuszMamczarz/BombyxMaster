import React from 'react';
import { Row, Col } from 'antd';

const Picker = ({ title, options, hidden }) => {
    return (
        <div className="picker-container" style={{ display: hidden ? 'none' : 'block' }}>
            <div className="title">{title}</div>
            <div className="circles">
                <Row gutter={[32, 32]} >
                    <Col span={12}>
                        <div className="circle" style={{ backgroundColor: '#bcc2dd' }}></div>
                    </Col>
                    <Col span={12}>
                        <div className="circle" style={{ backgroundColor: '#d8573f' }}></div>
                    </Col>
                </Row>
                <Row gutter={[32, 32]} >
                    <Col span={12}>
                        <div className="circle" style={{ backgroundColor: '#2d327d' }}></div>
                    </Col>
                    <Col span={12}>
                        <div className="circle" style={{ backgroundColor: '#e1c3db' }}></div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Picker;