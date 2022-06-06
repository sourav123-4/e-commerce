import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import { getAllCategories } from '../Redux/Actions/productActions';
import Loadercomponent from './Loader'
function Home(props) {
  const state = useSelector(state=>state.product.products);
  let dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(getAllCategories());
  },[])
  
  return (
    <div>
      {(state && state[0] && state[0].image) ? <div>
      <Link to="/addproduct"><Button content="ADD A PRODUCT" primary/></Link>
      <Grid key={state[0].title}>
        {
          state && state[0] && state
          .filter((item) => {
            if(props.search == "" && ( !props.min || !props.max )){
              return item
            }else if(item.title.toLowerCase().includes(props.search.toLowerCase()) && item.price<=props.max && item.price >= props.min){
              return item
            }
          })
          .map((product)=>{
          return (
            <Grid.Column width={3} key={product._id}>
              <div className='items' >
                <Link to={`/${product._id}`}>
                  <Image src={product.image} size='small' alt="product img" key={product.image} style={{height:"150px"}}/>
                </Link>
                <p key={product.title}>{product.title.substring(0,20) + "..."}</p>
                <h4 key={product.description}>$ {product.price}</h4>
              </div>
            </Grid.Column>
          )
        })} 
      </Grid>
      </div>
      :
      <Loadercomponent/>}
    </div>
  )
}

export default Home