import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";

const Cart = ({ deleteFunc }) => {
  const { cartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cartItems.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cartItems]);
  console.log(cartItems);
  const handleDelete = (id) => {
    console.log(id);
    deleteFunc(id);
  };
  return (
    <div className="container">
      <div className="row">
        {cartItems.length ? (
          <>
            <div className="col-lg-9">
              {cartItems.map(({ id, value, price, imgUrl }, index) => {
                return (
                  <div key={index} className="card cart">
                    <img className="cart-img" src={imgUrl} alt={value}></img>
                    <div className="cart-description">
                    <h3>{value}</h3>
                    <p>Rs.{price}</p>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-3 checkout">
              <h2>Total : Rs.{total}</h2>
              <div className="checkout-btn">
                <button className="btn btn-success">Checkout</button>
              </div>
            </div>
          </>
        ) : (
          <h2 className="text-center">Cart is Empty !!!</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
