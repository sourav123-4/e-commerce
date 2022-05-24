import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { GET_ALL_PRODUCTS } from '../Reducer/Action-type';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
function Home() {
  const state= useSelector(state=>state.data);
  let dispatch=useDispatch();

  React.useEffect(()=>{
    dispatch({type: GET_ALL_PRODUCTS});
  },[])

  return (
    <div>
      {
        (state && state[0]) && state?.map((product)=>{
          return (
            <Grid columns='equal'>
                <Grid.Column width={1}>
                  <Image src={product.image} size='small'/>
                  <p>{product.title}</p>
                </Grid.Column>
            </Grid>
          )
        })
      } 
    </div>
  )
}

export default Home