import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RouterProvider, Link,  createBrowserRouter } from "react-router-dom"

export function Header(){
    return (
        <div id='header'>
            <Navigation/>
        </div>
    )
}

function Navigation(){
    return (
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container>
        <Link className="link-no-style" to="/">
        <Navbar.Brand href="#home">
            <img id="logo" src="./public/snakeLogo.png" alt="Logo"/>
            Snake in React JS 
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className="link-no-style pb-2" to="/">Home</Link></Nav.Link>
            <Nav.Link><Link className="link-no-style" to="/Play">Play</Link></Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link className="link-no-style" to="/Rules">Rules</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link className="link-no-style" to="/Test">Test</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item> <Link className="link-no-style" to="/Contact">Contact</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}