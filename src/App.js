import React from 'react';
import './App.css';
import  Header  from '../src/Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import ProductDetails from './Components/productDetails';
import MyCart from './Components/MyCart';
import Main from './Components/Main';
import Register from './Components/Register';
import Categories from './Components/catagory';
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
        <Route path="/main" element={<Main/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/category/:category' element={<Categories />}/>
      </Routes>
    </div>
  );
}

export default App;
