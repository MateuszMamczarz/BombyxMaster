import React from 'react';
import './App.css';
import Picker from './components/picker'

function App() {
  return (
    <section className="main-section">
      <Picker options={['test1', 'test2', 'test3', 'test4']} title="KOLNIERZ">
        
      </Picker>

    </section>
  );
}

export default App;
