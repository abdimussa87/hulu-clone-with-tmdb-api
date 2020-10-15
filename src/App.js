import React from 'react';
import './App.css';
import Body from './Body';
import Header from './Header';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Body />
    </div>
  );
}

export default App;
