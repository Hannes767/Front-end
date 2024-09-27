import React, { useState, useRef } from 'react'
import productsFromFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const searchRef = useRef();

  const deleteItem = (index) => {
    productsFromFile.splice(index,1);
    setProducts(productsFromFile.slice());
    toast.success("Kustutatud!");
  }

  const findProductsByTitle = () => {
    const title = productsFromFile.filter(product => product.title.includes(searchRef.current.value));
    setProducts(title);
  }

  return (
    <div>
      <input ref={searchRef} onChange={findProductsByTitle} type="text" />
      <br /><br />
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

      <ToastContainer
          position="bottom-right"
          autoClose={4000}          
          theme="dark"
          />
    </div>
  )
}

export default MaintainProducts