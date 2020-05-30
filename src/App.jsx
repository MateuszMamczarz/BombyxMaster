import React from 'react';
import './App.css';
import Picker from './components/picker'
import Dress from './components/dress'
import Sheets from './components/sheets'

function App() {
  return (
    <section className="main-section">
      <Picker options={['test1', 'test2', 'test3', 'test4']} title="KOLNIERZ">
        
      </Picker>
      <Sheets>
        <Dress></Dress>
      </Sheets>
      
    </section>
  );
}

export default App;
