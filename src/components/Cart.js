import React, { useContext } from 'react'
import { CartContext } from '../App'


const Cart = () => {
  const {cartItems,setCartItems} = useContext(CartContext)
  console.log(cartItems)
  return (
    <div>
    {
      cartItems.map(({id,value,price,imgUrl}) => {
        return (
          <div className='container'>
            <div className='card'>
              <img className='cart-img' src={imgUrl} alt={value}></img>
              <h3>{value}</h3>
              <p>Rs.{price}</p>
            </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default Cart