import React, { useContext, useState } from "react";
import { CartContext } from "../App";

function Card(props) {
  // console.log(props);
  const {cartItems,setCartItems} = useContext(CartContext);
  const [show,setShow] = useState(true);

  const handleClick = (data) => {
    props.clickFunc(data);
    setShow(!show);
  }
 const handleDelete = (id) => {
  const arr = cartItems.filter((item)=> item.id !== id);
  setCartItems(arr);
  setShow(!show)
 }
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          
          <img
            className="card-img-top custom-img"
            src={props.data.imgUrl}
            alt="props.data.value"
          />
          
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props.data.value}</h5>
              <span>₹{props.data.price}</span>
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            {/* <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{props.data.view ? (<span>View Options</span>) : (<span>Add to cart</span>)}</a></div> */}
            {
              show ? <div className="text-center">
              <button className=" btn btn-outline-dark mt-auto" onClick={() => handleClick(props.data)}>
                <span>Add to cart</span>
              </button>
            </div> :
            <div className="text-center">
            <button className=" btn btn-outline-danger mt-auto" onClick={() => handleDelete(props.data.id)}>
              <span>Remove from cart</span>
            </button>
          </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
