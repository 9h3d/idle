import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Main />
      </div>
    </div>
  );
};
