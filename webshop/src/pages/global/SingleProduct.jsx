import React from 'react'
import { useParams } from  "react-router-dom"
import productsFromFile from "../../data/products.json"

function SingleProduct() {
  const {index} = useParams();

  // const products = productsFromFile.slice(); kui tahan mappida
  const product = productsFromFile[index];

  if (product === undefined) {    
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
      <div>Järjekorranumber, mis on URLis: {index}</div>
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
            </tr>
          </thead>
          <tbody>
          {/* {products.map((product, index) => */}
              <tr>
                <td><img style={{width: "100px"}} src={product.image} alt="Toote pilt" /></td>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price} eurot</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
                         
              </tr>
          </tbody>
      </table>
    </div>
  )
}

export default SingleProduct