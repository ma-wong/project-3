import React, { useState } from "react";
import LoginForm from "../components/LoginForm"

function Account() {
    const [userState, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({
            ...userState,
            [name]: value
        });
    };
//WRITE THIS FUNc
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log("username is " + userState.email);
        console.log("password is " + userState.password);
    };

    return(
       <div>
       </div>
    )

}

export default Account;