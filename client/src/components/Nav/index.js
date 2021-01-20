import React, { Component } from "react";
import "./nav.css";
// import {Form, Button, Nav, FormControl, Navbar, NavDropdown} from 'react-bootstrap'
import {Nav, Navbar} from 'react-bootstrap'


class Navhead extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Left Dropdown</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">My Blocks</Nav.Link>
            <Nav.Link href="#home">Recent Blocks</Nav.Link>
            <Nav.Link href="#home">Popular Blocks</Nav.Link>
            <Nav.Link href="#home">Create Block</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form> */}
        </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default Navhead