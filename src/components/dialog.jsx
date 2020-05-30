import React from 'react';
import { Modal } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Card, Col, Row, Carousel, Statistic, Result, Button, Progress } from 'antd';
const { Meta } = Card;

const getProgressDescription = (progress) => {
    switch (progress) {
        case 0:
        case 10:
            return 'Validating Inverse Dimension Matrix'
        case 20:
        case 30:
            return 'Synthesizing Space Grade Materials';
        case 40:
        case 50:
            return 'Initializing Robotic Sewing-Path AI';
        case 60:
        case 70:
            return 'Threading Fabric Compositors';
        case 80:
        case 90:
            return 'Recalculating 4D Splines';
        case 100:
            return 'Finalizing Your Clothes';
        default:
            return 'Something is not ok'
    }
}

const titles = {
    dimensions: 'Wybierz sposób zdjęcia miary',
    results: 'Oto Twój Projekt!',
    loading: 'Generating your design',
    success: 'Confirmed'
}

const renderResults = () =>
    <Row gutter={16}>
        <Col span={12}>
            <Carousel autoplay>
                <img alt="example" height="460" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                <img alt="example" height="460" src="http://www.todaydresses.com/wp-content/uploads/2016/01/The-bare-legs-her-bare-legs-in-winter-1.jpg" />
            </Carousel>
        </Col>
        <Col span={12}>
            <Card title="Wymiary" bordered={true} style={{ height: 460 }}>
                <Row gutter={[16, 48]}>
                    <Col span={12}>
                        <Statistic title="Wzrost" value={173} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Talia" value={60} />
                    </Col>
                </Row>
                <Row gutter={[16, 48]}>
                    <Col span={12}>
                        <Statistic title="Biust" value={70} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Długość ręki" value={40} />
                    </Col>
                </Row>
                <Row gutter={[16, 48]}>
                    <Col span={12}>
                        <Statistic title="Szerokość pleców" value={30} />
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>

const renderSuccess = () =>
    <Result
        icon={<SmileOutlined />}
        style={{ height: '350px' }}
        status="info"
        title="Your design is ready!"
        subTitle="Order number: 2017182818828182881"
        extra={[<Button key="Export" href='./dimensions.csv'>Export</Button>]}
    />

const renderLoading = (progress) =>
    <div style={{ textAlign: 'center', height: '350px', verticalAlign: 'middle', padding: '64px' }}>
        <Progress type="circle" percent={progress} />
        <h2 style={{ padding: '64px' }}>{getProgressDescription(progress)}</h2>
    </div>

const renderDimensions = () =>
    <div>
        <Row gutter={16}>
            <Col span={8}>
                <Card hoverable
                    cover={<img className="icon" src="https://cdn4.tailorstore.com/ui/gefjun/icons/meastape-gold.svg" alt="meastape-gold" />}
                >
                    <Meta
                        title="Zmierz się sama"
                        description="Zmierz się przy pomocy centymetra krawieckiego, najlepiej z pomocą przyjaciółki."
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card hoverable
                    cover={<img className="icon" src="https://cdn1.tailorstore.com/ui/gefjun/icons/shirt-gold.svg" alt="shirt-gold" />}
                >
                    <Meta
                        title="Zmierz swoje ubranie"
                        description="Użyj centymetra krawieckiego aby zdjąć miarę bezpośredio z Twojej ulubionej rzeczy."
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card hoverable
                    cover={<img className="icon" src="https://cdn2.tailorstore.com/ui/gefjun/icons/phone-gold.svg" alt="phone-gold" />}
                >
                    <Meta
                        title="Użyj naszej aplikacji "
                        description="Pozwól aby nasze algorytmy zdjęły z Ciebie miarę z pomocą naszej aplikacji na komórkę."
                    />
                </Card>
            </Col>
        </Row>
    </div>

const renderView = (step, progress) => {
    switch (step) {
        case 'success':
            return renderSuccess()
        case 'loading':
            return renderLoading(progress)
        case 'results':
            return renderResults()
        case 'dimensions':
            return renderDimensions()
        default:
            return renderResults()
    }
}

const Dialog = ({ step, visible, onOk, onCancel, progress }) =>
    <Modal
        title={titles[step]}
        centered
        width={800}
        visible={visible}
        onOk={onOk}
        okText={step !== 'success' ? 'Następnie' : 'Zakończ'}
        cancelText={"Anuluj"}
        onCancel={onCancel}
        okButtonProps={{ hidden: step === 'loading' }}
        cancelButtonProps={{ hidden: step === 'success' }}
    >
        {renderView(step, progress)}

    </Modal>

export default Dialog;
