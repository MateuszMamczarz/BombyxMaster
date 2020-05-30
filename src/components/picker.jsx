import React from 'react';
import { Row, Col } from 'antd';

const Picker = ({ title, options, hidden }) => {
    return (
        <div className="picker-container" style={{ display: hidden ? 'none' : 'block' }}>
            <div className="title">{title}</div>
            <div className="circles">
                <Row gutter={[32, 32]} >
                    <Col span={12}>
                        <div className="circle"></div>
                    </Col>
                    <Col span={12}>
                        <div className="circle"></div>
                    </Col>
                </Row>
                <Row gutter={[32, 32]} >
                    <Col span={12}>
                        <div className="circle"></div>
                    </Col>
                    <Col span={12}>
                        <div className="circle"></div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Picker;