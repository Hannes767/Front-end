import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import productsFromFile from "../../data/products.json";

function AddProduct() {
  const [message, setMessage] = useState("Lisa juurde üks toode");    
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRateRef = useRef();

  const uniqueCategories = [...new Set(productsFromFile.map(product => product.category))];
    
    

  const add = () => {
      productsFromFile.push(
         {
          "id": idRef.current.value,
          "title": titleRef.current.value,
          "price": priceRef.current.value,
          "description": descriptionRef.current.value,
          "category": categoryRef.current.value,
          "image": imageRef.current.value,
          "rating": {
            "rate": ratingRateRef.current.value,   
            "rating.count": 0,  
          }   
         }
      );
      
      setMessage("Toode edukalt lisatud!")
      toast.success("Toode edukalt lisatud!")

   }
  return (
    <div>
      <br />
      <div>{message}</div> <br />
      <label>Toote id</label><br />
      <input ref={idRef} type="number" /><br />
      <label>Toote pealkiri</label><br />
      <input ref={titleRef} type="text" /><br />
      <label>Toote hind</label><br />
      <input ref={priceRef} type="number" /><br />
      <label>Toote kirjeldus</label><br />
      <input ref={descriptionRef} type="text" /><br />

      <label>Toote kategooria</label><br />
      <select ref={categoryRef}>
        {uniqueCategories.map(category => <option>{category}</option>)}
      </select>
      <br />
      <label>Toote pilt failist või internetist</label> <br />
      <input ref={imageRef} type="file" />
      <label>Toote pildi URL: </label>
      <input ref={imageRef} type="text" /> <br />
      <label>Toote hinnang</label><br />
      <input ref={ratingRateRef} type="number" /><br />
       
      {/* <div>Kokku: {tooted.length}</div> */}
      <button onClick={add}>Lisa</button><br /><br />

        <ToastContainer
          position="bottom-right"
          autoClose={2000}          
          theme="dark"
          />
    </div>
  )
}

export default AddProduct