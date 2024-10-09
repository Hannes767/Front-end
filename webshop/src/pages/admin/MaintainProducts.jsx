import React, { useState, useRef, useEffect } from 'react'
import {Link} from "react-router-dom"
// import productsFromFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "react-bootstrap";

function MaintainProducts() {
  
  const searchRef = useRef();
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
    const url = "https://webshop-37564-default-rtdb.europe-west1.firebasedatabase.app/products.json"

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(json => {
          setProducts(json || []);
          setDbProducts(json || []);
        })
    }, []);

  const deleteItem = (index) => {
    products.splice(index,1);
    setProducts(products.slice());
    fetch (url, {method: "PUT", body: JSON.stringify(products)});
    toast.success("Kustutatud!");
  }

  const findProductsByTitle = () => {
    const title = dbProducts.filter(product => 
      product.title.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchRef.current.value.toLowerCase())
  ) ;
    setProducts(title);
  }

  if (dbProducts.length === 0) {
    return <Spinner/>
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
                <td>
                  <button onClick={() => deleteItem(index)}>Kustuta</button>
                    <Link to= {"/admin/edit-product/" + index}>
                      <button>Muuda</button>
                    </Link>
                </td>                    
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