import React, { Component } from "react";
import "./nav.css";
import { Navbar, Dropdown, DropdownButton, Image } from 'react-bootstrap'

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
          <div class="col-sm-5 col-md-7 col-lg-11">
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
          {/* usercircle is what I used to create the blue circle */}

          <DropdownButton id="dropdown-basic-button" id="usercircle">
          {/* <DropdownButton id="dropdown-basic-button" title="User cir button" onClick={() => this.setState({ viewBlocks: false, viewUserCircle: true })}>
            {this.state.viewUserCircle ? */}

          {/* Image tag below is what I used to get the image but we may need to go with an npm package */}

            {/* <Image source={{ uri: '' }}
              style={{ width: 51, height: 51 }} /> */}
            <Dropdown.Item href="#/action-1" id="usercirclefont">My Account</Dropdown.Item>
            <Dropdown.Item href="#/action-2" id="usercirclefont">Settings</Dropdown.Item>
            <Dropdown.Item href="#/action-3" id="usercirclefont">Help</Dropdown.Item>
            <Dropdown.Item href="#/action-3" id="usercirclefont">Logout</Dropdown.Item>
          </DropdownButton>
        </div>
        </Navbar>
    )
  }
}

export default Navhead