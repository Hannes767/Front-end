import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function NavigationBar() {
    const { t, i18n } = useTranslation();
    
  return (
    <div>
      <div>
        <div class="div1" onClick={() => i18n.changeLanguage("et")}>EST</div>
        <div class="div2" onClick={() => i18n.changeLanguage("en")}>ENG</div>
      </div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t('admin')}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t('cart')}</Nav.Link>
                       
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">{t("login")}</Nav.Link>
            <Nav.Link as={Link} to="/signup">{t('signup')}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t('contact')}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t('map')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavigationBar;

// import React from 'react'
// import { Link } from "react-router-dom"

// function NavigationBar() {
//   return (
//     <div>
//         <Link to="">
//             <button>Kodu</button>
//         </Link>

//         <Link to="cart">
//             <button>Ostukorv</button>
//         </Link>

//         <Link to="admin/maintain-products">
//             <button>Halda tooteid</button>
//         </Link>

//         <Link to="product/:index">
//             <button>Toode</button>
//         </Link>

//         <Link to="admin/add-product">
//             <button>Lisa toode</button>
//         </Link>

//         <Link to="signup">
//             <button>Sign up</button>
//         </Link>

        
//     </div>
//   )
// }

// export default NavigationBar