import React, { Component} from "react";
import "./nav.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

  class Navhead extends Component {

    state = {
      isNavMenuOpen:false,
      isAccountMenuOpen:false
    };

    getUserImage = () => {
      API.getUser().then((res) => {
        console.log(res)
        this.setState({
          image: res.data.profileUrl,
          username: res.data.username
        })
      })
    }

    handleNavMenuClick = (event) => {
      if ((event.target.className === "hamburger-button" || event.target.className === "hamburger-button-burger") && this.state.isNavMenuOpen === false) {
        this.setState({
          isNavMenuOpen:true
        });
        document.body.classList.add('nav-menu-push-toright');
      } else if ((event.target.className === "hamburger-button open" || event.target.className === "hamburger-button-burger") && this.state.isNavMenuOpen === true) {
        this.setState({
          isNavMenuOpen:false
        });
        document.body.classList.remove('nav-menu-push-toright');
      } else if (event.target.value === "account-menu" && this.state.isAccountMenuOpen === false) {
        this.setState({
          isAccountMenuOpen:true
        });
        document.body.classList.add('nav-menu-push-toleft');
      } else if (event.target.value === "account-menu" && this.state.isAccountMenuOpen === true) {
        this.setState({
          isAccountMenuOpen:false
        });
        document.body.classList.remove('nav-menu-push-toleft');
      }
    };


  render() {
    return (
      <div>
        <nav className={ this.state.isNavMenuOpen ? "nav-menu nav-menu-vertical nav-menu-left nav-menu-open": "nav-menu nav-menu-vertical nav-menu-left"} id="menu-1">
          <h3>Snippet.ltd</h3>
          <Link to="/">Home</Link>
          <Link to="/results">Search</Link>
          <Link to="/browse">Browse</Link>
          <Link to="/create">Create</Link>
        </nav>
        <nav className={ this.state.isAccountMenuOpen ? "nav-menu nav-menu-vertical nav-menu-right nav-menu-open": "nav-menu nav-menu-vertical nav-menu-right"} id="menu-2">
          <a href="#">Account Settings</a>
          <a href="#">My Blocks</a>
          <a href="#">Help</a>
        </nav>
        <div className="nav-control-row">
          <div className={ this.state.isNavMenuOpen ? "hamburger-button open": "hamburger-button"} onClick={this.handleNavMenuClick} value="navigation-menu">
            <div className="hamburger-button-burger" value="navigation-menu"></div>
          </div>
          <button className="account-button" onClick={this.handleNavMenuClick} value="account-menu">Right</button>
        </div>
      </div>
    )
  }
}

export default Navhead