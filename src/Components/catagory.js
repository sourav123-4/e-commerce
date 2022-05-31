import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts, receiveCategoryProducts } from '../Redux/Actions/productActions';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Categories = () => {
    const params = useParams();
    const categories = useSelector(state => state.product);
	const dispatch = useDispatch();

    useEffect(() => {
        console.log("params",params.category)
        dispatch(getCategoryProducts(params.category))
    }, []);

    console.log("catagor",categories);
    alert('rendering');
    return (
    <div className='category-page'>
      {
        categories[0] && categories?.map((item, index) => {
            return (
                <div>
                <Link to={`/${item.id}`}  >
                <img className='image' src={item.image} width="200px" height="200px" />
                </Link>
                <p className='title'>{item.title}</p>
                </div>
            );
        })
      }
    </div>
  )
}

export default Categories;