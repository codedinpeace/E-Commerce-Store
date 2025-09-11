import React from 'react'
import { useCartStore } from '../States/addToCart'

const Cart = () => {

  const {cartItems} = useCartStore()

  return (
    <div>{cartItems.map((cartItem, key)=>(
      <div key={key}>
        <p>Quantity: {cartItem.quantity}</p>
        <p>Item: {cartItem.productId}</p>
      </div>
    ))}</div>
  )
}

export default Cart