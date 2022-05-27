import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, GridColumn, Image } from 'semantic-ui-react';
import {Grid} from 'semantic-ui-react';
import { removeFromCart } from '../Redux/Actions/cartAction';

function MyCart() {
    const state = useSelector(state => state.cart.mycart);
    const dispatch = useDispatch();
    console.log("mycart:-",state);
  return (
    <Grid celled Columns={3}>
        {
          state && state[0] && state.map((item)=>{ 
          return(
            <Grid.Row celled >
              <Image src={item.image} size="small"/>
              <Grid.Column celled width={3}>
                <h2>{item.title}</h2>
                <h4><span>Price: </span>{item.price}</h4>
              </Grid.Column>
              <Grid.Column celled width={3}>
                <Grid.Row>
                  <Button positive content="BuyNow"/>
                </Grid.Row>
                <Grid.Row>
                  <Button negative content="Remove" onClick={()=> dispatch(removeFromCart(item))}/>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>)
        })}
    </Grid>
  )
}

export default MyCart