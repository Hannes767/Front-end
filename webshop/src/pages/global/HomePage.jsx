import React from 'react'
import { useState } from 'react'
import productsFromFile from "../../data/products.json"


function HomePage() {
    const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
        <br />
        {products.map(product =>
            <div key={product.id}>
                <img style={{width: "100px"}} src={product.image} alt="" />
                <div>{product.title}</div>
                <div>{product.price}</div><br /><br />

            </div>
        )}
    </div>
  )
}

export default HomePage