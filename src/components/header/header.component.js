import React from 'react';
import logo from './images/logo.png';
import {Logo} from '../../elements/logo/logo.component';

import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {

  const logoStyle = {
    width: '50%'
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Logo logo={logo} logoStyle={logoStyle}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Who we are?</Nav.Link>
            <Nav.Link href="#link">PacketBoy at work</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
