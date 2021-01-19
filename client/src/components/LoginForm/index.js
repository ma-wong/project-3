import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function LoginForm({ email, password, handleInputChange, handleFormSubmit }) {
  return (
 <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Login</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input 
                onChange={handleInputChange} 
                type="email" 
                id="inputEmail" 
                className="form-control" 
                placeholder="Email address" 
                name="email"
                value={email}
                required autoFocus />
                <label htmlFor="inputEmail">Email address</label>
              </div>
              <div className="form-label-group">
                <input 
                onChange={handleInputChange} 
                type="password" 
                id="inputPassword" 
                className="form-control" 
                placeholder="Password" 
                name="password"
                value={password}
                required />
                <label htmlFor="inputPassword">Password</label>
              </div>
              <button onClick={handleFormSubmit} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Log in</button>
              <hr />
              <div className="terms">
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy</a>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default LoginForm;