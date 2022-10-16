import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";

const Cart = ({ deleteFunc }) => {
  const { cartItems } = useContext(CartContext);
  const [total,setTotal] = useState(0);

  useEffect(() => {
    setTotal(cartItems.reduce((acc,curr) => acc+ Number(curr.price),0));
  },[cartItems])
  console.log(cartItems);
  const handleDelete = (id) => {
    console.log(id);
    deleteFunc(id);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
        {cartItems.map(({ id, value, price, imgUrl }, index) => {
        return (
            <div key={index} className="card">
              <img className="cart-img" src={imgUrl} alt={value}></img>
              <h3>{value}</h3>
              <p>Rs.{price}</p>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(index)}
              >
                Remove from cart
              </button>
            </div>
        );
      })}
        </div>
        <div className="col-lg-3">
          <h2>Total : Rs.{total}</h2>
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
