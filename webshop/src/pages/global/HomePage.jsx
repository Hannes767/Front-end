import React from 'react'
import { useState } from 'react'
import productsFromFile from "../../data/products.json"
import productsFromCart from "../../data/cart.json"
import {Link} from "react-router-dom"


function HomePage() {
    const [products, setProducts] = useState(productsFromFile);

    const addToCart = (newItem) => {
      productsFromCart.push(newItem);
    }
    

  return (
    <div>
        <br />
        {products.map((product, index) =>
            <div key={product.id}>
                <img style={{width: "100px"}} src={product.image} alt="" />
                <div>{product.title}</div>
                <div>{product.price} eurot</div>
                <Link to= {"/product/" + index}>
                  <button>Vaata lähemalt</button>
                </Link>
                <button onClick={() => addToCart(product)}>Lisa ostukorvi</button><br /><br />
            </div>
        )}
    </div>
  )
}

export default HomePage