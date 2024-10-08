import React, { useState, useEffect } from 'react'
// import productsFromCart from "../../data/cart.json"


function Cart() {
  const [cart, setCart] = useState (JSON.parse(localStorage.getItem("cart")) || []);
  const [pakiautomaadid, setPakiautomaadid] = useState([]);

  const add = (newItem) => {
    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart.slice());    
  }

  const deleteOneItem = (index) => {
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart.slice());    
  }

  const emptyTheCart = () => {
    cart.splice(0);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart.slice());
  }

  const totalPrice = () => {
    let sum = 0;
    cart.forEach(product => sum = sum + product.price);
    return sum;
  }

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(body => setPakiautomaadid(body))
  }, []);


  return (
    <div>
      <br />
      {cart.length > 0 && <div>Hind kokku: {totalPrice()} eurot</div>}
      {cart.length > 0 && <div>Ostukorvis on {cart.length} {cart.length === 1 ? "toode" : "toodet"}</div>}
      {cart.length === 0 && <div>Ostukorv on tühi</div>}
      {cart.length > 0 && <button onClick={emptyTheCart}>Tühjenda ostukorv</button>}
      <br /><br />
      {cart.map((product, index )=>
            <div key={product.id}>
                <img style={{width: "100px"}} src={product.image} alt="" />
                <div>{product.title}</div>
                <div>{product.price} eurot</div>
                <button onClick={() => add(product)}>Lisa toode</button>
                <button onClick={() => deleteOneItem(index)}>x</button><br /><br />
            </div>
        )}

        <div>Vali pakiautomaat</div>

        <select>
          {pakiautomaadid.map(automaat => <option>{automaat.NAME}</option>)}
        </select>

    </div>

  )
}

export default Cart