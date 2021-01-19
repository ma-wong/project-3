import React, { useState } from "react";
import LoginForm from "../components/LoginForm"

function Login() {
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
        <LoginForm 
        handleInputChange={handleInputChange}
        handleFormSubmit = {handleFormSubmit}
        email = {userState.emai}
        password = {userState.password}
        />
    )

}

export default Login;