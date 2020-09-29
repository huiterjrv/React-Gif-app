import React , { useState,useEffect }from 'react';
import './App.css';
import ListOfGifd from './components/ListOfGifs';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifd keyword='panda' />
      </section>
    </div>
  );
}

export default App;
