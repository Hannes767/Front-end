import React, { useRef, useState } from 'react';
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from 'react-toastify';

function MaintainCategories() {
  const uniqueCategories = [...new Set(productsFromFile.map(product => product.category))];
  const [message, setMessage] = useState("Lisa juurde kategooria");
  const categoryRef = useRef();
  const addCategoryRef = useRef();
  const [categories, setCategories] = useState(uniqueCategories);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const add = () => {
    productsFromFile.push(
       {        
        "category": addCategoryRef.current.value,         
        }         
    );
    const newCategory = addCategoryRef.current.value;
      setCategories([...categories, newCategory]);
      // setCategories([...categories, addCategoryRef.current.value]);
      setMessage("Toode edukalt lisatud!")
      toast.success("Toode edukalt lisatud!")
  }

  // const deleteCategory = (index) => {
  //   productsFromFile.splice(index,1);
  //   setCategories(productsFromFile.slice());
  //   toast.success("Kustutatud!");
  // }

  const deleteCategory = (categoryToDelete) => {
    const updatedCategories = categories.filter(category => category !== categoryToDelete);
    setCategories(updatedCategories);  // Uuendame kategooriate olekut
    if (updatedCategories.length === 0) {
      setSelectedCategory('');  // Tühjenda valitud kategooria
    } else {
      setSelectedCategory(updatedCategories[0]);  // Määra uus valitud kategooria
    }
    toast.success(`${categoryToDelete} kategooria kustutatud!`);
  }

  return (
    <div>
      Toodete kategooriate muutmine ja lisamine

      <div>{message}</div> <br />

      <label>Olemasolevad toote kategooriad</label><br />
      <select onChange={(e) => setSelectedCategory(e.target.value)} ref={categoryRef}>
        {categories.map((category, index )=>
         <option key={index} value={category}>{category}</option>)}
      </select><br />
      <input ref={addCategoryRef} type="text" placeholder="Lisa uus kategooria" /><br />

      <button onClick={add}>Lisa</button><br /><br />
      {/* <button onClick={() => deleteCategory(index)}>Kustuta</button> */}
      <br />
      <button onClick={() => deleteCategory(selectedCategory)}>Kustuta valitud kategooria</button><br /><br />
      <ToastContainer
          position="bottom-right"
          autoClose={2000}          
          theme="dark"
          />
    </div>
  )
}

export default MaintainCategories