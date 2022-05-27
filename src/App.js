import React from 'react';
import './App.css';
import  Header  from '../src/Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import ProductDetails from './Components/productDetails';
import MyCart from './Components/MyCart';

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<ProductDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mycart" element={<MyCart/>}/>
      </Routes>
    </div>
  );
}

export default App;
