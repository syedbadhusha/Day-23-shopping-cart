import Header from "./Header";
import Nav from "./Nav";
import Section from "./Section";
import Footer from "./Footer";
import "/node_modules/Bootstrap/dist/css/Bootstrap.css";
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
function App() {
  const products = [
    {
      id:1,
      name: "Fancy Product",
      priceRange: "$40.00 - $80.00",
    },
    {
      id:2,
      name: "Special Item",
      star: 5,
      oldPrice: "$20.00",
      newPrice: " $18.00",
    },
    {
      id:3,
      name: "Sale Item",
      oldPrice: "$50.00",
      newPrice: " $25.00",
    },
    {
      id:4,
      name: "Popular Item",
      star: 5,
      priceRange: "$40.00",
    },
    {
      id:5,
      name: "Sale Item",
      star: 5,
      oldPrice: "$50.00",
      newPrice: " $25.00",
    },
    {
      id:6,
      name: "Fancy Product",
      priceRange: "$120.00 - $280.00 ",
    },
    {
      id:7,
      name: "Special Item",
      star: 5,
      oldPrice: "$20.00",
      newPrice: " $18.00",
    },
    {
      id:8,
      name: "Popular Item",
      star: 5,
      priceRange: "$40.00",
    },
  ];

  const [cart,setCart] = useState([])

  function addCartItem(product){
    setCart([...cart,product])
  }

  function removeCartItem(product) {
    const newcart = cart.filter((ele)=>ele.id !==product.id)
    setCart(newcart)
  }

  return (
    <>
      <Nav cart={cart} removeCartItem={removeCartItem}/>
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product,index) => {
              return (
                <Section
                  key = {index}
                  item = {product}
                  addCartItem={addCartItem}
                  cart={cart}
                  removeCartItem={removeCartItem}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
