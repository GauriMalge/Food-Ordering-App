import React, { useContext } from 'react'
import CartContext from '../store/CartContext.jsx'
import Modal from '../Ui/Modal.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import CartItem from '../Ui/CartItem.jsx';

export default function Cart() {
    
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
    
  const cartTotal = cartCtx.items.reduce(
    (totalPrice,item) => totalPrice + item.quantity * item.price, 0
  )
  

function handleHideCart(){
  userProgressCtx.hideCart();
}

function handleGoCheckout(){
  userProgressCtx.showCheckOut();
}

  return (
    <Modal onClose={userProgressCtx.progress === 'cart' ? handleHideCart : null} className='cart' open={userProgressCtx.progress === 'cart'}>
  <div>
           <ul>
            <h2> <b>Your Cart</b> </h2>
            {cartCtx.items.map( (item)=> <CartItem key={item.id} {...item} onDecrease={()=>cartCtx.removeItem(item.id)} onIncrease={()=>cartCtx.addItem(item)}/>)}
           </ul>
           <p className='cart-total'> {cartTotal}</p>
           <p className='modal-actions'>
               <button onClick={handleHideCart} > Close </button>
               {cartCtx.items.length > 0 ? <button className='button' onClick={handleGoCheckout}>Go to Checkout </button> : null }
           </p>
           
   </div>
    </Modal>
 
    
  )
}
