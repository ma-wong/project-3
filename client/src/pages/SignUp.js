import React, { useState } from "react";
import { Mailer } from 'nodemailer-react';
import { useHistory } from 'react-router-dom'
import SignUpForm from "../components/SignUpForm";
import API from "../utils/API";
import ls from "local-storage";
function Signup() {
    const history = useHistory();

    const [userState, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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

        if (!userState.email || !userState.username || !userState.password) {
            alert("Fill out your results")
            return;
          }

        signUpUser(userState.email, userState.username, userState.password);
    };

    const signUpUser = (email, username, password) => {
        API.signUpUser({
          email: email,
          username: username,
          password: password,
        })
          .then(function(response) {
              console.log(response)
              console.log(password);
            API.loginUser({
                username: username,
                password: password
            }).then(()=> {
                localStorage.setItem("login", true);
                history.push("/");
          });
        });
    }
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