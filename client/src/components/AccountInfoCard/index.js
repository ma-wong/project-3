import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './accountStyle.css'

function AccountInfoCard({ email, username, profileUrl, createdAt, handleInputChange, handleFormSubmit, handleLogout}) {
  return (
<div className="container acccount-container">
<div className="row justify-content-center">
    <div className="col-12 col-lg-10 col-xl-8 mx-auto">
        <h2 className="h3 mb-4 page-title">Settings</h2>
        <div className="my-4">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li className="nav-item account-nav-item">
                    <a className="nav-link active account-link-active" id="home-tab" data-toggle="tab" href="#" role="tab" aria-controls="home" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item account-nav-item">
                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#" role="tab" aria-controls="home" aria-selected="false">Privacy</a>
                </li>
                <li className="nav-item account-nav-item">
                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#" role="tab" aria-controls="home" aria-selected="false">Terms of Use</a>
                </li>
                <li className="nav-item account-nav-item">
                    <a className="nav-link" id="home-tab" data-toggle="tab" href="#" role="tab" aria-controls="home" aria-selected="false">Custimize Your BarberShop</a>
                </li>
            </ul>
            <form>
                <div className="row mt-5 align-items-center">
                    <div className="col-md-3 text-center mb-5">
                        <div className="avatar avatar-xl">
                            <img src={profileUrl} alt="..." className="avatar-img rounded-circle" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <h4 className="mb-1">{username}</h4>
                                <p className="small mb-3"><span className="badge badge-dark">Your Location</span></p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-7">
                                <p className="text-muted">
                      
                                    Member since: {createdAt}
                                </p>
                            </div>
                            <div className="col">
                                <p className="small mb-0 text-muted">Billing Address</p>
                                <p className="small mb-0 text-muted"> Billing Address 2</p>
                                <p className="small mb-0 text-muted">Phone Number</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="form-row">
                    <div className="form-group-account col-md-6">
                        <label for="firstname">Firstname</label>
                        <input type="text" id="firstname" value="Firstname" className="form-control" placeholder="Firstname" />
                    </div>
                    <div className="form-group-account col-md-6">
                        <label for="lastname">Lastname</label>
                        <input type="text" id="lastname" value="Lastname" className="form-control" placeholder="Lastname" />
                    </div>
                </div>
                <div className="form-group-account">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" value={email} id="inputEmail4" placeholder={email} />
                </div>
                <div className="form-group-account">
                    <label for="inputAddress5">Address</label>
                    <input type="text" className="form-control" value="Address" id="inputAddress5" placeholder="Enter Billing Address" />
                </div>
                <div className="form-row">
                    <div className="form-group-account col-md-6">
                        <label for="inputCompany5">Company</label>
                        <input type="text" className="form-control" value="Company" id="inputCompany5" placeholder="Your Company" />
                    </div>
                    <div className="form-group-account col-md-4">
                        <label for="inputState5">State</label>
                        <select id="inputState5" className="form-control">
                            <option selected="">Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group-account col-md-2">
                        <label for="inputZip5">Zip</label>
                        <input type="text" className="form-control" value="Zip" id="inputZip5" placeholder="Zip" />
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className="form-group-account">
                            <label for="inputPassword4">Old Password</label>
                            <input type="password" className="form-control" id="inputPassword5" />
                        </div>
                        <div className="form-group-account">
                            <label for="inputPassword5">New Password</label>
                            <input type="password" className="form-control" id="inputPassword5" />
                        </div>
                        <div className="form-group-account">
                            <label for="inputPassword6">Confirm Password</label>
                            <input type="password" className="form-control" id="inputPassword6" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="mb-2">Password requirements</p>
                        <p className="small text-muted mb-2">To create a new password, you have to meet all of the following requirements:</p>
                        <ul className="small text-muted pl-4 mb-0">
                            <li>Minimum 8 character</li>
                            <li>At least one special character</li>
                            <li>At least one number</li>
                            <li>Can’t be the same as a previous password</li>
                        </ul>
                    </div>
                </div>
                <button type="submit" className="btn accountBtn btn-primary">Save Change</button>
            </form>
        </div>
    </div>
</div>

</div>
  );
}

export default AccountInfoCard;