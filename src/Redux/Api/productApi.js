export const fetchData = async()=>{
    try{
        const res=await fetch(`http://localhost:5000/addproducts`);
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
};

export const userData = async()=>{
    try{
        const res=await fetch(`http://localhost:5000/register`);
        const data = await res.json();
        console.log("users:-",data);
        return data;
    }catch(err){
        console.log(err);
    }
};

export const fetchOneData = async(id)=>{
    try{
        const res=await fetch(`http://localhost:5000/addproducts/products/${id}`);
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
};

export const fetchLimitData = async(number)=>{
    try{
        const res=await fetch(`https://fakestoreapi.com/products?limit=${number}`);
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
};


export const productCategoriesFetch = async(category) =>{
    try{
        const res=await fetch(`http://localhost:5000/addproducts/${category}`);
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

export const addNewData = (products)=>{
    try{
        console.log("hii",products)
        const {title, price, description, category, image} = products;
        console.log(title)
        fetch('http://localhost:5000/addproducts',{
            method:"POST",
            headers : {
                "content-type": "application/json"
            },
            body:JSON.stringify(
                {
                    title, price, description, category, image
                },
            ),
        });
    }catch(err){
        console.log("hello error",err);
    }
};