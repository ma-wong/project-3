import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//use process.env for production
function ForgotForm({ email, handleInputChange, handleFormSubmit }) {
  return (
 <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Enter Your Email</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input 
                onChange={handleInputChange} 
                type="email" 
                id="inputEmail" 
                className="form-control" 
                placeholder="Email" 
                name="email"
                value={email}
                required />
                <label htmlFor="inputEmail">Email</label>
              </div>
              <button onClick={handleFormSubmit} className="btn btn-lg btn-primary btn-block text-uppercase signupbtn" type="submit">Send Email</button>
              <h6 style={{color: "white", marginTop: "5%", textAlign: "center"}}>An email will be sent to you with further instructions.</h6>
              <hr />
              <div className="terms">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy</a>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default ForgotForm;