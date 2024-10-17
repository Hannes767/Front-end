import React, { useRef, useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
// import productsFromFile from "../../data/products.json";


function EditProduct() {
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRateRef = useRef();
  const ratingCountRef = useRef();  
  const {index} = useParams();
  
  

  const [products, setProducts] = useState([]);
  const url = "https://webshop-37564-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  const [categories, setCategories] = useState([]);
  const categoryurl = "https://webshop-37564-default-rtdb.europe-west1.firebasedatabase.app/categories.json"

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(json => setProducts(json || []))
    }, []);

    useEffect(() => {
      fetch(categoryurl)
        .then(res => res.json())
        .then(json => setCategories(json || []))
    }, []);

    const found = products[index];
    const [imagePreview, setImagePreview] = useState();

  if (found === undefined) {        
    return <div>Toodet ei leitud</div>
  }

    const change = () => {
      products[index] = (
         {
          "id": Number(idRef.current.value),
          "title": titleRef.current.value,
          "price": Number(priceRef.current.value),
          "description": descriptionRef.current.value,
          "category": categoryRef.current.value,
          "image": imageRef.current.value,
          "rating": {
            "rate": Number(ratingRateRef.current.value),   
            "count": Number(ratingCountRef.current.value),  
          }   
         }         
      ); 
      fetch (url, {method: "PUT", body: JSON.stringify(products)});     
      
   }

   const handleImageChange = () => {
    setImagePreview(imageRef.current.value);
  };

  return (
    <div>
      
      <label>Toote id</label><br />
      <input ref={idRef} type="number" defaultValue={found.id}/><br />
      <label>Toote pealkiri</label><br />
      <input ref={titleRef} type="text" defaultValue={found.title} /><br />
      <label>Toote hind</label><br />
      <input ref={priceRef} type="number" defaultValue={found.price} /><br />
      <label>Toote kirjeldus</label><br />
      <input ref={descriptionRef} type="text" defaultValue={found.description} /><br />
      <label>Toote kategooria</label><br />
      {/* <input ref={categoryRef} type="text" defaultValue={found.category} /><br /> */}
      <select ref={categoryRef} defaultValue={found.category}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select>
      <br />

      <label>Toote pilt: </label><br />
      <input
        ref={imageRef}
        type="url"
        defaultValue={found.image}
        onChange={handleImageChange} // Update the image preview when input changes
        /><br />
      <img src={imagePreview} alt="Toote pilt" style={{ width: '150px' }} /> <br />
      <label>Toote hinnang</label><br />
      <input ref={ratingRateRef} type="number" defaultValue={found.rating.rate} /><br />
      <label>Toote hinnang</label><br />
      <input ref={ratingCountRef} type="number" defaultValue={found.rating.count} /><br />
       
      <Link to="/admin/maintain-products">
        <button onClick={change}>Muuda</button><br />
      </Link>
      
    </div>
  )
}

export default EditProduct