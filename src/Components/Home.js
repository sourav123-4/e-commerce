import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { GET_ALL_PRODUCTS } from '../Reducer/Action-type';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import { getAllCategories, getLimitProducts } from '../Reducer/Actions';

function Home() {
  const state = useSelector(state=>state.data.products);
  const limit1 = useSelector( state => state.data.limitproducts)
  let dispatch=useDispatch();

  React.useEffect(()=>{
    dispatch(getAllCategories());
  },[])

  return (
    <div>
      <Grid>
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