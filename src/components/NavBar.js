import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../App';

function NavBar() {
    const {cartItems} = useContext(CartContext);
    const navigate= useNavigate();
  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">Start Bootstrap</Link>
                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                    </ul>
                        <button className="btn btn-outline-dark" onClick={() => navigate("/cart")}>
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItems.length}</span>
                        </button>
                </div>
            </div>
        </nav>
  </>
}

export default NavBar