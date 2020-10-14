import React from 'react';
import './App.css';

//import ListProducts from './components/ListProducts';
import DetailProduct from './components/DetailProduct';
//import Parent from './components/testing/Parent'; //Testing
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <DetailProduct />
      {/*<Parent />*/}
      <MainPage />
    </div>
  );
}

export default App;
