import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import{addToDb, getStoredCart}from'../../utilities/fakedb'
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([])
    const[displayProducts,setDisplayProducts]=useState([])
    useEffect(()=>{
        console.log('product api called')
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setDisplayProducts(data)
            console.log('products received')
        })
    },[])
    useEffect(()=>{
        console.log('local storage cart called')
        if(products.length){
        const savedCart=getStoredCart()
        const storedCart=[]
        for(const key in savedCart){
            const addedProduct=products.find(product=>product.key===key)
            if(addedProduct){
                const quantity=savedCart[key]
                addedProduct.quantity=quantity
            storedCart.push(addedProduct)
        }
        }
        setCart(storedCart)
        }
        
    },[products])
    const handaleAddToCart=(product)=>{
        // console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
        // storage from localStorage
        addToDb(product.key)
    }
    const handaleSearch=event=>{
        const searchText=event.target.value
        const matchedProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts)
        // console.log(matchedProducts.length)
    }
    return (
        <>
        <div className="search-container">
            <input type="text" 
            onChange={handaleSearch}
            placeholder="search product" />
        </div>
        <div className="shop-container" >
            <div className="product-container">
              {/* <h3>product:{products.length}</h3> */}
              
              {
                  displayProducts.map(product=><Product
                     product={product}
                     handaleAddToCart={handaleAddToCart}
                     key={product.key}
                     ></Product>)
              }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;