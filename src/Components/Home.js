import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { GET_ALL_PRODUCTS } from '../Redux/Action-types/productActionType';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import { getAllCategories, getLimitProducts, getCategoryProducts, addNewProduct } from '../Redux/Actions/productActions';

function Home() {
  const state = useSelector(state=>state.product.products);
  const limit1 = useSelector( state => state.product.limitproducts)
  const state2 = useSelector( state => state.product.categorydata)
  let dispatch=useDispatch();

  React.useEffect(()=>{
    dispatch(getAllCategories());
    // dispatch(addNewProduct());
    
  },[])
  state2 && console.log('category',state2);
  return (
    <div>
      <Grid>
        {/* {
          (state2 && state2[0]) && state2?.map((item)=>{
            return <h1>{item.title}</h1>
          })
        } */}
        {(state && state[0]) && state?.map((product)=>{
          return (
            <Grid.Column width={3}>
              <div className='items'>
                <Link to={`/${product.id}`}>
                  <Image src={product.image} size='small' style={{height:"150px"}}/>
                </Link>
                <p>{product.title.substring(0,20) + "..."}</p>
              </div>
            </Grid.Column>
          )
        })} 
      </Grid>
    </div>
  )
}

export default Home