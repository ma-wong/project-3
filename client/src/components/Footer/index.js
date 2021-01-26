import React from "react";
import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <nav class="navbar fixed-bottom">
        <div class="container">
          <div class="row footer">
            <div class="col-md-4 col-xs-4">
              <a class="navbar-brand" href="https://github.com/wlawsonkelly"
                >Github</a>
            </div>
            <div class="col-md-4 col-xs-4">
              <a class="navbar-brand" href="https://www.linkedin.com/in/law95/"
                >LinkedIn</a>
            </div>
            <div class="col-md-4 col-xs-4">
              <a
                class="navbar-brand"
                href="https://stackoverflow.com/users/10708100/guywitmanyhquestion"
                >Stack Overflow</a>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;