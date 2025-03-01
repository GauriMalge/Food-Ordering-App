import React, { useContext } from 'react'
import Modal from '../Ui/Modal'
import CartContext from '../store/CartContext'
import Input from '../Ui/Input';
import UserProgressContext from '../store/UserProgressContext';

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)
    const cartTotal = cartCtx.items.reduce(
        (totalPrice,item) => totalPrice + item.quantity * item.price, 0
      )

      function handleClose(){
        userProgressCtx.hideCheckout();
      }
  return (
    <Modal onClose={handleClose} open={userProgressCtx.progress === 'checkout'}>
        <form action="">
            <h2>Checkout</h2>
            <p>Total Amount: ${cartTotal}</p>
            <Input label="Full Name" type = "text" id="full-name"  />
            <Input label="E-Mail Address" type = "email" id="email"  />
            <Input label="Street" type = "text" id="street"  />
            <div className='control-row'>
            <Input label="Postal Code" type = "text" id="postal-code"  />
            <Input label="City" type = "text" id="city"  />
            </div>

            <p className='modal-actions'>
                <button className='button' type='button' onClick={handleClose}>Close</button>
                <button className='button'>Submit Order</button>
            </p>
        </form>
    </Modal>
  )
}
