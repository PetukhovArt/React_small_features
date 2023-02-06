import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Header } from './site/Header';
// import { Body } from './site/Body';
// import { Footer } from './site/Footer';
// import { TaskMap } from './site/TaskMap';
// import { TaskButton } from './site/TaskButton';
import { Button } from './Components/Button/Button';

function App() {

  // const topCars = [
  //   { manufacturer: 'BMW', model: 'm5cs' },
  //   { manufacturer: 'Mercedes', model: 'e63s' },
  //   { manufacturer: 'Audi', model: 'rs6' }
  // ]

  // const Button1Foo = (subscriber:string, age:number) => {
  //   console.log(subscriber,age)
  // }
  // const Button2Foo = (subscriber:string, age:number) => {
  //   console.log(subscriber,age);
  // }
  // const ButtonDelete = (subscriber:string, age:number) => {
  //   console.log(subscriber,age);
  // }
  // const ButtonStupid = () => {
  //   console.log('im STUPID BUTTON');
  // }

  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  return (
    <>
      {/* <Header titleHeader={'NEW BODY'} />
      <Body titleBody={'NEW BODY'} />
      <Footer titleFooter={'NEW BODY'} /> */}
      {/* <TaskMap cars={topCars} />
      <TaskButton />
      <Button name={'Channel One'} callBack={()=>Button1Foo('Vasek',21)} />
      <Button name={'Channel Two'} callBack={()=>Button2Foo('Petek', 22)} />
      <Button name={'Delete'} callBack={()=>ButtonDelete('Bibarek', 23)} />
      <Button name={'Stupid'} callBack={ButtonStupid}/> */}

      <Button name={'All Money'} callBack={null} />
      <Button name={'Dollars'} callBack={null} />
      <Button name={'Rubles'} callBack={null} />
    </>
  )
}

export default App;
