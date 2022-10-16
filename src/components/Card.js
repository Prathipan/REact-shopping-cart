import React, { useContext } from "react";
import { CartContext } from "../App";

function Card({data}) {
  
  const {cartItems,setCartItems} = useContext(CartContext);
  
  // const handleClick = (data) => {
  //   props.clickFunc(data);
  // }
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          
          <img
            className="card-img-top custom-img"
            src={data.imgUrl}
            alt="props.data.value"
          />
          
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{data.value}</h5>
              <span>₹{data.price}</span>
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            {/* <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{props.data.view ? (<span>View Options</span>) : (<span>Add to cart</span>)}</a></div> */}
            {
              cartItems.some((cart) => cart.id === data.id) ? (
                <div className="text-center">
                <button className="btn btn-outline-danger mt-auto" onClick={() => setCartItems(cartItems.filter((item) => item.id !== data.id))} >
                  <span>Remove from cart</span>
                </button>
              </div>
              ) : (
                <div className="text-center">
                <button className="btn btn-outline-dark mt-auto" onClick={() => setCartItems([...cartItems,data])} >
                  <span>Add to cart</span>
                </button>
              </div>  
              )
            }
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
