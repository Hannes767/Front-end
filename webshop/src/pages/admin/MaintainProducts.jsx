import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());

  const deleteItem = (index) => {
    productsFromFile.splice(index,1);
    setProducts(productsFromFile.slice());
  }

  return (
    <div>
      <br />
      <table className='table-color'>
        <thead>
            <tr>
              <th>Toote pilt</th>
              <th>ID</th>
              <th>Nimetus</th>
              <th>Hind</th>
              <th>Kirjeldus</th>
              <th>Kategooria</th>
              <th>Hinnang</th>
              <th>Hinnangu andnute arv</th>
              <th>Tegevused</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) =>
              <tr key={index}>
                <td><img style={{width: "100px"}} src={product.image} alt="" /></td>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price} eurot</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
                <td><button onClick={() => deleteItem(index)}>Kustuta</button> </td>         
              </tr>)}
          </tbody>
      </table>
    </div>
  )
}

export default MaintainProducts