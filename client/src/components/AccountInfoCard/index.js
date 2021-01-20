import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function AccountInfoCard({ email, username, profileUrl, handleInputChange, handleFormSubmit }) {
  return (
<div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">{username}</h5>
 
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default AccountInfoCard;