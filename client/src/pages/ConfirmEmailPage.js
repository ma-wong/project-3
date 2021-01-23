import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import API from "../utils/API";

function ConfirmEmail() {

    return(
       <div>
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor: "blue"}}>
         <div class="container">
            <h1 class="display-4">Click The Confirmation Link in Your Email!</h1>
            <p class="lead">Please check your spam and junk folders.</p>
        </div>
    </div>
     </div>
    )

}

export default ConfirmEmail;