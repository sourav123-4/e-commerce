import React from 'react';
import { useSelector } from 'react-redux';


function MyCart() {
    const state = useSelector(state => state.cart.mycart);
    console.log("mycart:-",state)
  return (
    <div>
        {
            console.log("state",state)
        }
    </div>
  )
}

export default MyCart