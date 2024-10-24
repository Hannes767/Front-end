import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import productsFromFile from "../../data/products.json";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


function AddProduct() {
  const [message, setMessage] = useState("Lisa juurde üks toode");    
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRateRef = useRef();  

  const [products, setProducts] = useState([]);
  const url = "https://webshop-37564-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  const [categories, setCategories] = useState([]);
  const categoryurl = "https://webshop-37564-default-rtdb.europe-west1.firebasedatabase.app/categories.json"

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Authenticated user:", user);
      } else {
        console.log("User not authenticated");
        window.location.href = '/admin/google-login'; // Suuna sisselogimise lehele
      }
    });

    return () => unsubscribe(); // Puhasta vaataja
  }, []);

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

    const add = () => {
      const auth = getAuth(); // Saad auth objekti
      if (!auth.currentUser) {
        setMessage("Sa ei ole sisselogitud!");
        toast.error("Palun logi sisse!");
        return;
      }
      
      // Kui kasutaja on sisseloginud, lisa toode
      products.push({
        "id": Number(idRef.current.value),
        "title": titleRef.current.value,
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "image": imageRef.current.value,
        "rating": {
          "rate": Number(ratingRateRef.current.value),
          "count": 0
        }
      });
    
      setMessage("Toode edukalt lisatud!");
      toast.success("Toode edukalt lisatud!");
    
      auth.currentUser.getIdToken().then((idToken) => {
        fetch('https://webshop-37564-default-rtdb.europe-west1.firebasedatabase.app/products.json', {
          method: 'PUT',
          headers: {
            'Authorization': 'Bearer ' + idToken,  // Lisa autentimismärk
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(products),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Autoriseerimata päring');
          }
          return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));
      });
      
    
      // Tühjenda väljad pärast lisamist
      idRef.current.value = "";
      titleRef.current.value = "";
      priceRef.current.value = "";
      descriptionRef.current.value = "";
      categoryRef.current.value = "";
      imageRef.current.value = "";
      ratingRateRef.current.value = "";
    };
    
    
    // const uniqueCategories = [...new Set(products.map(product => product.category))]; 

  // const add = () => {
  //     products.push(
  //        {
  //         "id": Number(idRef.current.value),
  //         "title": titleRef.current.value,
  //         "price": Number(priceRef.current.value),
  //         "description": descriptionRef.current.value,
  //         "category": categoryRef.current.value,
  //         "image": imageRef.current.value,
  //         "rating": {
  //           "rate": Number(ratingRateRef.current.value),   
  //           "count": 0,  
  //         }   
  //        }
  //     );
      
  //     setMessage("Toode edukalt lisatud!")
  //     toast.success("Toode edukalt lisatud!")
  //     fetch(url, {method: "PUT", body: JSON.stringify(products)});
  //     idRef.current.value = "";
  //     titleRef.current.value = "";
  //     priceRef.current.value = "";
  //     descriptionRef.current.value = "";
  //     categoryRef.current.value = "";
  //     imageRef.current.value = "";
  //     ratingRateRef.current.value = "";

  //  }
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
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
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