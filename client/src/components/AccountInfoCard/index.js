import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './accountStyle.css'

function AccountInfoCard({ email, username, profileUrl, createdAt, handleInputChange, handleFormSubmit, handleLogout}) {
  return (
<div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body account-card-body">
            <div className ="row">
                <div className = "col-md-12">
                  <img className="avatar-img" src={profileUrl}/>
                </div>
            </div>
            <div className ="row">
                <div className = "col-md-12 usertext">
                <h5>Username: <span contentEditable="true">{username}</span></h5>
                </div>
            </div>
            <div className ="row">
                <div className = "col-md-12">
                <h5>Email: <span contentEditable="true">{email}</span></h5>
                </div>
            </div>
            <div className ="row">
                <div className = "col-md-12">
                <h5>Created Account: <span>{createdAt}</span></h5>
                </div>
            </div>
            <div className ="row">
                <div className = "col-md-12">
                <h5>Kata: <span>7</span></h5>
                </div>
            </div>
            <hr />
            <button className="account-info-btn btn btn-lg btn-primary btn-block text-uppercase signupbtn">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default AccountInfoCard;