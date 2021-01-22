import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './accountStyle.css'

function AccountInfoCard({ email, username, profileUrl, handleInputChange, handleFormSubmit, handleLogout}) {
  return (
<div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <div className ="row">
                <div className = "col-md-12">
                <Image cloudName="dnjau9tbe" publicId="samples/bike.jpg" width="300" crop="scale" />
                </div>
            </div>
            <div className ="row">
                <div className = "col-md-12">
                <h5>Username: <span contentEditable="true">{username}</span></h5>
                </div>
            </div>
            <div className ="row">
                <div className = "col-md-12">
                <h5>Email: <span contentEditable="true">{email}</span></h5>
                </div>
            </div>
            
            <button className="account-info-btn btn btn-lg btn-primary btn-block text-uppercase">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default AccountInfoCard;