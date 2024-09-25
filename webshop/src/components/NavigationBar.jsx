import React from 'react'
import { Link } from "react-router-dom"

function NavigationBar() {
  return (
    <div>
        <Link to="">
            <button>Home page</button>
        </Link>

        <Link to="cart">
            <button>Cart</button>
        </Link>

        <Link to="admin/maintain-products">
            <button>Maintain Products</button>
        </Link>

        <Link to="product/:index">
            <button>Single Product</button>
        </Link>

        
    </div>
  )
}

export default NavigationBar