import React from 'react'
import { Button, Input } from 'semantic-ui-react'

function AddProduct() {
    const [products,setProducts]=React.useState({
        title:"",
        price:"",
        description:"",
        category:"",
        image:"",
    })
    const Add = async (e)=>{
        const {title, price, description, category, image} = products;
        fetch("http://localhost:5000/addproducts",{
          method: "POST",
          headers: {
            "content-Type" : "application/json"
          },
          body: JSON.stringify({
            title, price, description, category, image
          })
        })
      }
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