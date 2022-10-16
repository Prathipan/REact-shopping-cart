import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import iphone12 from "./assets/iphone12.jpg";
import iphone13 from "./assets/iphone13.jpg";
import onePlus10T from "./assets/oneplus10T.png";
import oneplus9 from "./assets/onplus9.jpg";
import oneplus10pro from "./assets/onplus10pro.jpg";
import oppoA74 from "./assets/oppoA74.jpg";
import samsungFold from "./assets/samsungFold.jpg";
import samsungNote9 from "./assets/samsungNote9.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { createContext, useState } from "react";

export const CartContext = createContext();
function App() {
 
  const [cartItems,setCartItems] = useState([]);
  const [disable,setdisable] = useState(false);
  const content = [
    {
      id: 1,
      value: "iphone 12",
      price: 55000,
      imgUrl: iphone12,
    },
    {
      id: 2,
      value: "onePlus 10 T",
      price: "50000",
      imgUrl: onePlus10T
    },
    {
      id: 3,
      value: "oppo A74",
      price: 15000,
      imgUrl: oppoA74
    },
    {
      id: 4,
      value: "iphone 13",
      price: 90000,
      imgUrl: iphone13
    },
    {
      id: 5,
      value: "samsung Fold",
      price: 100000,
      imgUrl: samsungFold
    },
    {
      id: 6,
      value: "onePlus 10 Pro",
      price: 65000,
      imgUrl: oneplus10pro,
    },
    {
      id: 7,
      value: "Samsung note 9",
      price: 75000,
      imgUrl: samsungNote9
    },
    {
      id: 8,
      value: "onePlus 9",
      price: 45000,
      imgUrl: oneplus9
    },
  ];
  console.log(cartItems)
  // const clickFunc = (item) => {
  //     setCartItems([...cartItems, item]);
  // }
  const deleteFunc = (id) => {
    const arr = cartItems.filter((item,index)=> cartItems.indexOf(item) !== id);
    setCartItems(arr);
  }
  return (
    <Router>
      <div className="App">
        <CartContext.Provider value={{cartItems,setCartItems,disable,setdisable}}>
        <NavBar cartItems={cartItems}/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <section className="py-5">
                  <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                      {content.map((content,index) => {
                        return <Card key={index} data={content}  deleteFunc={deleteFunc}/>;
                      })}
                    </div>
                  </div>
                </section>
                  <Footer />
              </>
            }
          />
          <Route path="/cart" element={<Cart deleteFunc={deleteFunc}/>} />
        </Routes>
        </CartContext.Provider>
      </div>
    </Router>
  );
}

export default App;
