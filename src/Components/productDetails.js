import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getProductDetails} from '../Redux/Actions/productActions';
import { Button, Image } from 'semantic-ui-react';
import '../Styles/productDetails.css'
import { addToCart } from '../Redux/Actions/cartAction';
import Loadercomponent from './Loader';

function ProductDetails() {

  const state = useSelector(state=> state.product.pdetails);
  const [ cartvalue,setCartvalue ] = React.useState(false)
  let dispatch = useDispatch();
  let params= useParams();
  const addhandleclick = () =>{
    dispatch(addToCart(state));
    setCartvalue(true); 
  }
  React.useEffect(() => {
    dispatch(getProductDetails(params.id))
  },[params.id])

  return (
    <div>
      { (state && state.image) ?   
          <div>
            <div className='item'>
              <Image src={state.image} size="medium"/>
              <div className='itemdetails'>
                  <h2>{state.title}</h2>
                  <h4><span>Price: $ </span>{state.price}</h4>
                  <h3><span>Description: </span>{state.description}</h3>
              </div>
            </div>
            <div className='btn'>
              {cartvalue ? 
                <Link to={localStorage.getItem("details") ? "/mycart" : "/login"}><Button content="ADD TO CART" /></Link> : 
                <Button onClick={addhandleclick} content='ADD TO CART' primary/>
              }
              <Link to={localStorage.getItem("details") ? "/buynow": "/login"}><Button content='BUY NOW'/></Link>
            </div>
          </div>
          :
          <Loadercomponent/>
        }
    </div>
  )
}

export default ProductDetails