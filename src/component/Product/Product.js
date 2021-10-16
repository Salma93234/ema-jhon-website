import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props)
    const {name,seller,price,img,stock,star}=props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
        <div>
          <img src={img} alt="" />
        </div>
         <div>
          <h4 className="product-name">{name}</h4>
          <p>price:${price}</p>
          <h4>stock in leht:{stock}</h4>
          <p><small>by:{seller}</small></p>
          <Rating
            initialRating={star}
           emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly></Rating>
          <br/>
          <button onClick={()=>props.handaleAddToCart(props.product)} 
          className="btn-regular">{cartIcon}add to cart</button>
       </div>  
        </div>
    );
};

export default Product;