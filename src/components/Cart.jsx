import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '../utils/cartSlice';
 
 const Cart =()=> {
  
  const cartItems = useSelector((store)=> store.cart.items)
  const dispatch = useDispatch()
  const handleClearCart = ()=>{
     dispatch(clearCart())
  }

  const handleRemoveItemCart = ()=>{
    dispatch(removeItem())
  }


  //const cartItems = useSelector((store)=>store.cart.Items)
   console.log(cartItems.length)
  return (
    <>
    <div >        
      
       <h2>You have {cartItems.length} Items in Your Cart </h2>
       
       <div className='px-14'>
       
       <button onClick = {handleClearCart} > Clear Cart</button>
       <button onClick = {handleRemoveItemCart}>Remove Item</button>
       </div>
     </div>
    </>
  )
}

export default Cart;
