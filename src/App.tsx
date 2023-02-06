import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { Task2Map } from './site/Task2Map';



function App() {

  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' }
]

  return (
    <>
      {/* <Header titleHeader={'NEW BODY'} />
      <Body titleBody={'NEW BODY'} />
      <Footer titleFooter={'NEW BODY'} /> */}
      <Task2Map cars={topCars} />
    </>
  )
}

export default App;
