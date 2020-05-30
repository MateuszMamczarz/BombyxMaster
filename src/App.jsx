import React from 'react';
import './App.css';
import Picker from './components/picker'
import Dress from './components/dress'
import Sheets from './components/sheets'
import Dialog from './components/dialog'
import { Button } from 'antd';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      step: 'dimensions', //results, loading, success, dimensions
      progress: 0,
    }
  }

  setModalVisible(modalVisible) {
    if (modalVisible) this.setState({ status: 'results', progress: 0 });
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



  render() {
    return (
      <section className="main-section" >
        <Picker options={['test1', 'test2', 'test3', 'test4']} title="KOLNIERZ" />
        <Sheets>
          <Dress />
        </Sheets>
        <Button type="primary" onClick={() => this.setModalVisible(true)} style={{ position: 'fixed', right: '16px', bottom: '16px' }} >
          {this.state.step}
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
