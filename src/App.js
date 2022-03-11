import React from 'react';

import './App.css';
import MyNavigation from './MyComponents/Navigation';
import MyHeader from './MyComponents/Header';
import TopInfo from './MyComponents/TopInfo';
import Body from './MyComponents/Body';
import MyFooter from './MyComponents/Footer';

function App() {
  return (
    <div className="App">
      <MyNavigation></MyNavigation>
      <MyHeader></MyHeader>
      <TopInfo></TopInfo>
      <Body></Body>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
