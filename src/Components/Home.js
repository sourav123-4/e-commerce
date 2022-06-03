import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import { getAllCategories } from '../Redux/Actions/productActions';

function Home(props) {
  const state = useSelector(state=>state.product.products);
  const state2 = useSelector( state => state.product.categorydata)
  let dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(getAllCategories());
  },[])
  
  return (
    <div>
      <Link to="/addproduct"><Button content="ADD A PRODUCT" primary/></Link>
      <Grid>
        {
          state && state[0] && state
          .filter((item) => {
            if(props.search=="" && !props.min && !props.max){
              return item
            }else if(item.title.toLowerCase().includes(props.search.toLowerCase()) && item.price<=props.max && item.price >= props.min){
              return item
            }
          })
          .map((product)=>{
          return (
            <Grid.Column width={3}>
              <div className='items'>
                <Link to={`/${product.id}`}>
                  <Image src={product.image} size='small' style={{height:"150px"}}/>
                </Link>
                <p>{product.title.substring(0,20) + "..."}</p>
                <h4>$ {product.price}</h4>
              </div>
            </Grid.Column>
          )
        })} 
      </Grid>
    </div>
  )
}

export default Home