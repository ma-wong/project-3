import React, { Component } from "react";
import "./nav.css";
// import {Form, Button, Nav, FormControl, Navbar, NavDropdown} from 'react-bootstrap'
import { Navbar, Dropdown, DropdownButton } from 'react-bootstrap'


class Navhead extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     test: "testing",
  //     viewBlocks: true,
  //     viewUserCircle: false,
  //   }
  // }
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Left Dropdown
           </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">My Blocks</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Recent Blocks</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Popular Blocks</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Create Block</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Navbar.Brand href="#home">Left Dropdown</Navbar.Brand> */}
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => this.setState({ viewBlocks: true, viewUserCircle: false })} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {this.state.viewBlocks ?
                <>
                  <div> <Nav.Link href="#home">My Blocks</Nav.Link>
                    <Nav.Link href="#home">Recent Blocks</Nav.Link>
                    <Nav.Link href="#home">Popular Blocks</Nav.Link>
                    <Nav.Link href="#home">Create Block</Nav.Link>
                  </div>
                </> : ""}
            </Nav>
          </Navbar.Collapse> */}
        </div>

        <div>
          <DropdownButton id="dropdown-basic-button" title="Cir Btn To Come">
          {/* <DropdownButton id="dropdown-basic-button" title="User cir button" onClick={() => this.setState({ viewBlocks: false, viewUserCircle: true })}>
            {this.state.viewUserCircle ? */}
                <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Account Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
              {/* </> : ""} */}
          </DropdownButton>
        </div>
      </Navbar>
    )
  }
}

export default Navhead