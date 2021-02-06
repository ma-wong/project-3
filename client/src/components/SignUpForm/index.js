import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import './signUpStyle.css'

function SignUpForm({ username, email, password, confirmPassword, handleInputChange, handleFormSubmit, fileInputState, handleFileInputChange, previewSource, handleLogin, handleGithub }) {

  return (
 <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign Up</h5>
            <form className="form-signin">
            <div style={{marginBottom:"20px"}}>
            <Form.File
                    id="fileInput"
                    label="Upload a Profile Picture"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    custom
                    />
                   {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    className="signup-img"
                />
            )}
             </div>
              <div className="form-label-group">
                <input
                 onChange={handleInputChange} 
                 type="input" 
                 id="inputEmail" 
                 className="form-control" 
                 placeholder="Email address" 
                 //react stuff
                 name="email"
                 value={email}
                 required autoFocus />
                <label htmlFor="inputEmail">Email address</label>
              </div>

              <div className="form-label-group">
                <input 
                onChange={handleInputChange} 
                type="input" 
                id="inputUsername" 
                className="form-control" 
                placeholder="Username" 
                //react stuff
                 name="username"
                 value={username}
                required />
                <label htmlFor="inputUsername">Username</label>
              </div>

              <div className="form-label-group">
                <input onChange={handleInputChange} 
                type="password" 
                id="inputPassword" 
                className="form-control" 
                placeholder="Password" 
                //react stuff
                name="password"
                value={password}
                required />
                <label htmlFor="inputPassword">Password</label>
              </div>

              {/* <div className="form-label-group">
                <input onChange={handleInputChange} 
                type="password" 
                id="inputConfirmPassword" 
                className="form-control" 
                placeholder="Confirm Password" 
                name="confirmPassword"
                value={confirmPassword}
                required />
                <label htmlFor="inputConfirmPassword">Confirm Password</label>
              </div> */}
              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Agree to Terms and Conditions</label>
              </div>
              <button onClick={handleFormSubmit} className="btn btn-lg btn-primary btn-block text-uppercase signupbtn" type="submit">Sign Up</button>
              <button onClick={handleGithub} className="btn githubBttn btn-block text-uppercase" type="button">Sign Up With Github</button>
              <hr />
              <div className="terms">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy</a>
                </div>
                <div className="login-link-div">
                    <a id="login-link" href="/login">Already have an account? Login</a>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default SignUpForm;