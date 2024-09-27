import React from 'react'
import { Link } from "react-router-dom"

function NavigationBar() {
  return (
    <div>
        <Link to="">
            <button>Kodu</button>
        </Link>

        <Link to="cart">
            <button>Ostukorv</button>
        </Link>

        <Link to="admin/maintain-products">
            <button>Halda tooteid</button>
        </Link>

        <Link to="product/:index">
            <button>Toode</button>
        </Link>

        <Link to="admin/add-product">
            <button>Lisa toode</button>
        </Link>

        <Link to="signup">
            <button>Sign up</button>
        </Link>

        
    </div>
  )
}

export default NavigationBar