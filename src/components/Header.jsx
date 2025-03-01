import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import CartContext from '../store/CartContext.jsx'

import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {

  
const cartCtx = useContext(CartContext);
const userProgressCtx = useContext(UserProgressContext);

const totalCartItems = cartCtx.items.reduce((totalNumberOfItems,item)=>{
  return totalNumberOfItems + item.quantity;
},0)

function handleOpenCart(){
  userProgressCtx.showCart();
}

  return (
  <header id='main-header'>
        <div id='title'>
            <img src={logo} alt="A Restaurant" />
            <h1>REACT FOOD</h1>
        </div>
        
            <button className='text-button'  onClick={handleOpenCart}>Cart ({totalCartItems})</button>
        
  </header>
  )
}
