import React, { Component } from "react";
import "./nav.css";
import { Navbar, Dropdown, DropdownButton, Image } from 'react-bootstrap'

// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

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
          <div className="wrapper">
          {/* <div className="col-sm-5 col-md-7 col-lg-11"> */}
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
          </div>
        <div>

          {/* usercircle is what I used to create the blue circle */}
          {/* title is where the image is place w/in the blue circle */}          
          <DropdownButton id="usercircle" title={ <img src=""></img> } menuAlign="right">

            <Dropdown.Item href="#/action-1" id="usercirclefont">My Account</Dropdown.Item>
            <Dropdown.Item href="#/action-2" id="usercirclefont">Settings</Dropdown.Item>
            <Dropdown.Item href="#/action-3" id="usercirclefont">My Help</Dropdown.Item>
            <Dropdown.Item href="#/action-3" id="usercirclefont">Logout</Dropdown.Item>
          </DropdownButton>

        {/* old colding below. Ignore */}

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

          {/* title={ <img src={{ uri: ''}} style={{ width: 51, height: 51}}> </img> } */}
          {/* <DropdownButton id="dropdown-basic-button" title="User cir button" onClick={() => this.setState({ viewBlocks: false, viewUserCircle: true })}>
            {this.state.viewUserCircle ? */}

          {/* <DropdownButton
            menuAlign="right"
            title="ASDF"
            id="dropdown-menu-align-right"
            // drop="left"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton> */}
        </div>
        </div>
        </Navbar>
    )
  }
}

export default Navhead