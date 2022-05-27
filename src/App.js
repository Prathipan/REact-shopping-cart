import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const content = [
    {
      value: "Fancy Product",
      price: "$40.00 - $80.00",
      view : true
    },
    {
      value: "Special Item",
      price: "$20.00",
      SalePrice: "$18.00",
      Batch: true,
      Rating : true
    },
    {
      value: "Sale Item",
      price: "$50.00",
      SalePrice: "$25.00",
      Batch: true
    },
    {
      value: "Popular Item",
      price: "$40.00",
      Rating : true
    },
    {
      value: "Sale Item",
      price: "$50.00",
      SalePrice: "$25.00",
      Batch: true
    },
    {
      value: "Fancy Product",
      price: "$120.00 - $280.00",
      view : true
    },
    {
      value: "Special Item",
      price: "$20.00",
      SalePrice: "$18.00",
      Batch: true,
      Rating : true
    },
    {
      value: "Popular Item",
      price: "$40.00",
      Rating : true
    },
  ]
  return (
    <div className="App">
      <NavBar />
      <Header />
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
            content.map( (content) => {
             return <Card data={content} />
            }
            )
            }
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
