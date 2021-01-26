import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import "./nav.css";
// import logo from "./Roki2.jpg"


// class Navhead extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       image: "./Roki2.jpg"
//     }
//   }

  class Navhead extends Component {
    state = {
      open: false,
      width: window.innerWidth
    };
  
    updateWidth = () => {
      const newState = { width: window.innerWidth };
  
      if (this.state.open && newState.width > 991) {
        newState.open = false;
      }
  
      this.setState(newState);
    };
  
    toggleNav = () => {
      this.setState({ open: !this.state.open });
    };
  
    componentDidMount() {
      window.addEventListener("resize", this.updateWidth);
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWidth);
    }





  render() {
    return (
        <Navbar bg="dark" expand="lg">
          <div className="wrapper">
            {/* <img src={logo} /> */}
          <div>

          {/* <Navbar.Brand href="#home">Left Dropdown</Navbar.Brand> */}
          <Nav className="basic-navbar-nav navbar navbar-expand-lg navbar-dark bg-dark p-0">
            {/* <Link className="navbar-brand"> */}
            {/* Blocks */}
            {/* </Link> */}
            {/* <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className="nav-link"
              >
                My Blocks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className="nav-link"
              >
                Recent Blocks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className="nav-link"
              >
                Popular Blocks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className="nav-link"
              >
                Create Blocks
              </Link>
            </li>
          </ul>
        </div> */}
            </Nav>


            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic" className="dd-arrow">
              <span className="navbar-toggler-icon" />
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

          {/* <DropdownButton menuAlign="left" >
          <span className="navbar-toggler-icon" />
<Dropdown.Item href="#/action-1" id="usercirclefont">My Account</Dropdown.Item>
<Dropdown.Item href="#/action-2" id="usercirclefont">Settings</Dropdown.Item>
<Dropdown.Item href="#/action-3" id="usercirclefont">My Help</Dropdown.Item>
<Dropdown.Item href="#/action-3" id="usercirclefont">Logout</Dropdown.Item>
</DropdownButton> */}

          <DropdownButton id="usercircle" menuAlign="right" style={{  backgroundImage: `url(${this.state.image})` }}>

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