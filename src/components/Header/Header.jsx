import './Header.css';
import {Navbar,Nav} from "react-bootstrap";

import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className="Header">
    <Navbar className="mx-auto" expand="lg">
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link  as={NavLink} to="/project">Project</Nav.Link>
      
        <Nav.Link  as={NavLink} to="/runpipeline">Run Pipeline</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
   
    <Nav.Link className="login" href="login">Monica</Nav.Link>
  </Nav>
    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}

export default Header;
