import React from 'react';
import './App.css';
import  Header  from '../src/Components/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import ProductDetails from './Components/productDetails';
import MyCart from './Components/MyCart';
import Register from './Components/Register';
import Categories from './Components/catagory';
import BuyNow from './Components/buyNow';
import AddProduct from './Components/addProduct';
function App() {
  const [search,setSearch] = React.useState("");
  const [price, setPrice] =React.useState('');
  const location = useLocation();
  const show = !location.pathname.includes("login")
  const show1 = !location.pathname.includes("register")
  const [min,setMin] = React.useState(0);
  const [max,setMax] = React.useState(0);
  return (
    <div className="App">
      { show && show1 && 
        <Header 
          setSearch={setSearch}
          price={price} 
          setPrice={setPrice}
          setMax={setMax}
          setMin={setMin}/> }
      {show && show1 && <hr/> }
      <Routes>
        <Route path='/' element={
          <Home 
            search={search} 
            price={price}
            min={min}
            max={max}
          />}/>
        <Route path='/:id' element={<ProductDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mycart" element={<MyCart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path='/category/:category' element={
          <Categories 
            search={search} 
            price={price}
            min={min}
            max={max}
          />}/>
        <Route path="/buynow" element={<BuyNow/>}/>
      </Routes>
    </div>
  );
}

export default App;
