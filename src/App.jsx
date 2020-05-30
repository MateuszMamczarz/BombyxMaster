import React from 'react';
import './App.css';
import Picker from './components/picker'
import Dress from './components/dress'
import Sheets from './components/sheets'
import Dialog from './components/dialog'
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      step: 'dimensions', //results, loading, success, dimensions
      progress: 0,
      selectedArea: 0,
    }
    this.pickerTitle = [
      "DEKOLT",
      "RĘKAW",
      "WZÓR",
      "DŁUGOŚĆ"
    ]
  }

  setModalVisible(modalVisible) {
    if (modalVisible) this.setState({ step: 'dimensions', progress: 0 });
    this.setState({ modalVisible });
  }

  exportDesign = () => {
    this.setState({ status: 'loading' });
    let percentage = 0;
    const interval = setInterval(() => {
      this.setState({ progress: percentage });
      percentage += 10;
      if (percentage > 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.setState({ step: 'success' })
        }, 1500);
      }
    }, 700);
  }

  nextStep = (step) => {
    switch (step) {
      case 'dimensions':
        this.setState({ step: 'results' });
        break;
      case 'results':
        this.setState({ step: 'loading' });
        this.exportDesign();
        break;
      case 'loading': // should never happen
        this.setState({ step: 'success' });
        break;
      case 'success':
        this.setState({ modalVisible: false });
        break;
      default:
        this.setState({ step: 'dimensions' });
        break;
    }
  }

  getName = (step) => {
    switch (step) {
      case 'dimensions':
        return 'Określ wymiary';
      case 'results':
        return 'Wynik';
      case 'loading': // should never happen
        return 'Ładowanie';
      case 'success':
        return 'Sukces';
      default:
        return "Określ wymiary";
    }
  }

  onAreaChange = (type) => {
    this.setState({ selectedArea: type });
  }

  render() {
    return (
      <section className={`main-section ${this.state.selectedArea === 2 ? 'bg2' : ''}`} >
        <Picker options={['test1', 'test2', 'test3', 'test4']} title={this.pickerTitle[this.state.selectedArea]} hidden={this.state.selectedArea === 2} />
        <Sheets>
          <Dress selectedArea={this.state.selectedArea} onAreaChange={this.onAreaChange} />
        </Sheets>
        <Button
          icon={<RightOutlined style={{ fontSize: '48px' }} />}
          size="large"
          shape="circle"
          type="primary"
          onClick={() => this.setModalVisible(true)}
          style={{ position: 'fixed', right: '32px', bottom: '32px' }} >
        </Button>
        <Dialog
          step={this.state.step}
          progress={this.state.progress}
          visible={this.state.modalVisible}
          onOk={() => this.nextStep(this.state.step)}
          onCancel={() => this.setModalVisible(false)}
        />
      </section>
    )
  };
}

export default App;
