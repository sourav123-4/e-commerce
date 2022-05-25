export const fetchData = async()=>{
    try{
        const res=await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
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