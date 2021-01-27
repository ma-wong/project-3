import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import API from "../utils/API";

function ConfirmEmail() {

    return(
       <div>
        <div className="jumbotron jumbotron-fluid" style={{backgroundColor: "#66FCF1"}}>
         <div className="container">
            <h1 className="display-4">Click The Confirmation Link in Your Email!</h1>
            <p className="lead">Please check your spam and junk folders.</p>
        </div>
    </div>
     </div>
    )

}

export default ConfirmEmail;