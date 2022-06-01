export const fetchData = async()=>{
    try{
        const res=await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
};

export const userData = async()=>{
    try{
        const res=await fetch(`https://fakestoreapi.com/users`);
        const data = await res.json();
        console.log("users:-",data);
        return data;
    }catch(err){
        console.log(err);
    }
};

export const fetchOneData = async(id)=>{
    try{
        const res=await fetch(`https://fakestoreapi.com/products/${id}`);
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
        const res=await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

export const addNewData = async()=>{
    try{
        const res=await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic',
                },
            ),
        });
        const data = await res.json();
        console.log("data:-",data);
        return data;
    }catch(err){
        console.log("hello error",err);
    }
};