import React from "react";

//Importamos React Rout Dom
import { useHistory } from 'react-router-dom';

//Importo Icono
import CartWidget from "../CartWidget/CartWidget.js"

//Importamos componente
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"

//Importamos estilos CSS de BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

export default function MostrarNavBar() {

  let history = useHistory()

  return (
    
    <div className="nav-bar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={()=>history.push('/')} style={{color: 'white', fontWeight: '900'}}>UNIQUE</Navbar.Brand>
        {/* <Navbar.Brand onClick={()=>history.push('/')} href="#home">UNIQUE</Navbar.Brand> ASI VIENE DE FÁBRICA*/}
        <Navbar.Brand href="#home" className="cart-widget"><CartWidget/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav  className="mr-auto">
            <Nav.Link href="#home" style={{color: 'white', fontWeight: '600'}}>Nosotros</Nav.Link>
            <Nav.Link href="#link"  style={{color: 'white', fontWeight: '600'}}>Registrate</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">

              <NavDropdown.Item onClick={()=>history.push('/category/anillos')} >Anillos</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>history.push('/category/collares')}>Collares</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>history.push('/category/remeras')}>Remeras</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>history.push('/category/gorras')}>Gorras</NavDropdown.Item>
        
              {/* <NavDropdown.Item href="#action/3.4">Gorras</NavDropdown.Item> ESTA ES LA ESTRUCTURA BASE QUE VENIA*/}

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                ¿Cómo funciona la subasta?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="¿Qué querés buscar?" className="mr-sm-2" />
            <Button variant="outline-success">Buscar</Button>
          </Form>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
