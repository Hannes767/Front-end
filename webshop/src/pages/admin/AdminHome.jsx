import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function AdminHome() {
  return (
    <div>
      <Button as={Link} to="/maintain-products" variant="outline-primary">Halda tooteid</Button>{' '}
      <Button as={Link} to="add-product" variant="outline-secondary">Lisa toode</Button>{' '}
      {/* <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button> */}
    
      {/* <Link to="maintain-products">
          <button>Halda tooteid</button>
      </Link>       

      <Link to="add-product">
        <button>Lisa toode</button>
      </Link> */}
    </div>
  )
}

export default AdminHome