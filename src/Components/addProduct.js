import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addNewProduct} from '../Redux/Actions/productActions'
function AddProduct() {
  const dispatch = useDispatch();
  const [status,setStatus] = useState(false);
    const [products,setProducts]=React.useState({
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
    })
    const Add = () =>{
      setStatus(true)
    }

    useEffect(()=>{
      if(status){
        dispatch(addNewProduct(products))
      }
    },[])
    
  return (
    <div>
        <Input placeholder="title" onChange={(e)=>setProducts({...products,title:e.target.value})}/>
        <Input placeholder="price" onChange={(e)=>setProducts({...products,price:e.target.value})}/>
        <Input placeholder="description" onChange={(e)=>setProducts({...products,description:e.target.value})}/>
        <Input placeholder="category" onChange={(e)=>setProducts({...products,category:e.target.value})}/>
        <Input placeholder="image" onChange={(e)=>setProducts({...products,image:e.target.value})}/>
        <Button content="submit" primary onClick={Add}/>
    </div>
  )
}

export default AddProduct