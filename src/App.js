import React from 'react';
import Header from './components/Header';
import MeetBloopy from './components/MeetBloopy';
import BuyBloopy from './components/BuyBloopy';
import JoinCommunity from './components/JoinCommunity';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MeetBloopy />
        <BuyBloopy />
        <JoinCommunity />
      </div>
    </div>
  );
}

export default App;