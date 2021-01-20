import React, { useState } from "react";
import { Mailer } from 'nodemailer-react';
import SignUpForm from "../components/SignUpForm";
function Signup() {
    const [userState, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
//put this into it's own file but for now do this

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
        console.log("email is " + userState.email);
        console.log("username is " + userState.username);
        console.log("password is " + userState.password);
    };
    return (
        <div>
            <SignUpForm
                handleInputChange={handleInputChange}
                handleFormSubmit = {handleFormSubmit}
                username = {userState.username}
                email = {userState.emai}
                password = {userState.password}
            >
            </SignUpForm>
        </div>
    )

}

export default Signup;