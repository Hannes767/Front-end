import React from 'react';
import { useState, useEffect } from 'react';
// import productsFromFile from "../../data/products.json";
// import productsFromCart from "../../data/cart.json";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "react-bootstrap";


function HomePage() {
    const [products, setProducts] = useState([]);
    const url = "https://webshop-37564-default-rtdb.europe-west1.firebasedatabase.app/products.json"

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(json => setProducts(json || []))
    }, []);
    

    const addToCart = (newItem) => {
      // productsFromCart.push(newItem);
      toast("Ostukorvi lisatud!");
      const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
      cartLS.push(newItem);
      localStorage.setItem("cart", JSON.stringify(cartLS));
    }

    const sortAZ = () => {
      products.sort((a,b) => a.title.localeCompare(b.title, "en"));
      setProducts(products.slice());
    }
  
    const sortZA = () => {
      products.sort((a,b) => b.title.localeCompare(a.title, "en"));
      setProducts(products.slice());  
    }

    const sortPriceRise = () => {
      products.sort(((a, b) => a.price - b.price));
      setProducts(products.slice());
    }
  
    const sortPriceFall = () => {
      products.sort(((a, b) => b.price - a.price));
      setProducts(products.slice());
    }

    const sortRatedHighly = () => {
      products.sort(((a, b) => a.rating.rate - b.rating.rate));
      setProducts(products.slice());
    }
  
    const sortRatedLowly = () => {
      products.sort(((a, b) => b.rating.rate - a.rating.rate));
      setProducts(products.slice());
    }

    const filterCategoryElectronics = () => {
      const category = products.filter(product => product.category.includes("electronics"));
      setProducts(category);
    } 
    
    if (products.length === 0) {
      return <Spinner/>
    }

  return (
    <div>
      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={sortPriceRise}>Sorteeri hind kasvavalt</button>
      <button onClick={sortPriceFall}>Sorteeri hind kahanevalt</button>
      <button onClick={sortRatedHighly}>Sorteeri hinnang kasvavalt</button>
      <button onClick={sortRatedLowly}>Sorteeri hinnang kahanevalt</button>
      <br />
      <button onClick= {() => filterCategoryElectronics ()}>Filtreeri elektroonika tooted</button>
      <br />
      
        <br /><br />
        <div className="products">
          {products.map((product, index) =>
            <div  className="product" key={product.id}>
                <img style={{width: "100px"}} src={product.image} alt="" />
                <div className="title">{product.title}</div>
                <div>{product.price} eurot</div>
                
                <Link to= {"/product/" + index}>
                  <button>Vaata lähemalt</button>
                </Link>
                <button onClick={() => addToCart(product)}>Lisa ostukorvi</button><br /><br />
          </div>
        )}
        </div>
        <ToastContainer
              position="bottom-right"
              autoClose={2000}          
              theme="dark"
            />
    </div>
  )
}

export default HomePage