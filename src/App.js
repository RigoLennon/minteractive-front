import React from 'react';
import './App.css';

import MainAppBar from './components/AppBar';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <div className="App">
      <MainAppBar />
      <ListProducts />
    </div>
  );
}

export default App;
