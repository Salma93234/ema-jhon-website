import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.cart)
    const {cart}=props
    let total=0;
    for(const product of cart){
        total=total+product.price
    }
        const shipping=total>0? 15:0;
        const tax=(total+shipping)*0.10
        const grandTotal=total+shipping+tax
    
    return (
        <div>
          <h3>Order items</h3>
          <h4>item orderd:{props.cart.length}</h4>
          <br/>
          <p>total :{total.toFixed(2)}</p>
          <p>shipping:{shipping}</p>
          <p>tax:{tax.toFixed(2)}</p>
          <p>grand total:{grandTotal.toFixed(2)}</p>

        </div>
    );
};

export default Cart;