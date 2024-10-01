import React, { useRef, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from 'react-toastify';

function EditProduct() {
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRateRef = useRef();
  const ratingCountRef = useRef();
  const [message, setMessage] = useState("Muuda toodet"); 
  const {index} = useParams();
  const found = productsFromFile[index];
  const [imagePreview, setImagePreview] = useState(found.image);

  if (found === undefined) {        
    return <div>Toodet ei leitud</div>
  }

    const change = () => {
      productsFromFile[index] = (
         {
          "id": idRef.current.value,
          "title": titleRef.current.value,
          "price": priceRef.current.value,
          "description": descriptionRef.current.value,
          "category": categoryRef.current.value,
          "image": imageRef.current.value,
          "rating": {
            "rate": ratingRateRef.current.value,   
            "count": ratingCountRef.current.value,  
          }   
         }
      );
      
      setMessage("Toode edukalt muudetud!")
      toast.success("Toode edukalt muudetud!")
   }

   const handleImageChange = () => {
    setImagePreview(imageRef.current.value);
  };

  return (
    <div>
      <div>{message}</div> <br />
      <label>Toote id</label><br />
      <input ref={idRef} type="number" defaultValue={found.id}/><br />
      <label>Toote pealkiri</label><br />
      <input ref={titleRef} type="text" defaultValue={found.title} /><br />
      <label>Toote hind</label><br />
      <input ref={priceRef} type="number" defaultValue={found.price} /><br />
      <label>Toote kirjeldus</label><br />
      <input ref={descriptionRef} type="text" defaultValue={found.description} /><br />
      <label>Toote kategooria</label><br />
      <input ref={categoryRef} type="text" defaultValue={found.category} /><br />      
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
       
      <Link to="/admin/edit-product">
        <button onClick={change}>Muuda</button><br />
      </Link>
      

      <ToastContainer
          position="bottom-right"
          autoClose={2000}          
          theme="dark"
          />
    </div>
  )
}

export default EditProduct