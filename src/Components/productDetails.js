import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails} from '../Redux/Actions/productActions';
import { Button, Image, Segment } from 'semantic-ui-react';
import '../Styles/productDetails.css'
import { addToCart } from '../Redux/Actions/cartAction';

function ProductDetails() {

  const state = useSelector(state=> state.product.pdetails);
  let dispatch = useDispatch();
  let params= useParams();

  React.useEffect(() => {
    dispatch(getProductDetails(params.id));
  },[params.id]);
  React.useEffect(()=>{
    dispatch(addToCart(state));
  },[state]);

  return (
    <div>
        {
          state &&  
          <div>
            <div className='item'>
              <Image src={state.image} size="medium"/>
              <div className='itemdetails'>
                  <h2>{state.title}</h2>
                  <h4><span>Price: </span>{state.price}</h4>
                  <h3><span>Description: </span>{state.description}</h3> 
              </div>
            </div>
            <div className='btn'>
              <Button onClick={()=>{

              }} content='ADD TO CART'/>
              <Button content='BUY NOW'/>
            </div>
          </div>
        }
    </div>
  )
}

export default ProductDetails