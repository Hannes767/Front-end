import React, { useEffect, useRef, useState } from 'react'

function MaintainCategories() {
  const url = "https://webshop-37564-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);

  const addCategory = () => {
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    //saata andmebaasi
    fetch (url, {method: "PUT", body: JSON.stringify(categories)});
  }

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    setCategories(categories.slice());
    //saata andmebaasi
    fetch (url, {method: "PUT", body: JSON.stringify(categories)});
  }

  return (
    <div>
      <label>Category</label>
      <input ref={categoryRef} type="text" /><br />
      <button onClick={addCategory}>Add</button>
      {categories.map((category, index) =>
        <div>
          <div>{category.name}</div>
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>
      )}
    </div>
  )
}

export default MaintainCategories
