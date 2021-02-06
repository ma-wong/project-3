import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm"
import API from "../utils/API";
import { useHistory } from 'react-router-dom'


function Login() {
    const history = useHistory();

    const [userState, setUser] = useState({
        username: "",
        password: "",
        loggedIn: false
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
        event.preventDefault()
      
          if (!userState.username || !userState.password) {
            alert("Fill in all credentials please")
            return;
          }
          loginUser(userState.username, userState.password);

        };
      
          const loginUser = (username, password) => {
            API.loginUser({
              username: username,
              password: password,
            })
              .then(response => {
                console.log(response)
                   
                if (response.status === 200) {
                    history.push("/");
                    localStorage.setItem("login", true);
                }
                });
          }
         const handleGithub = () => {
         //   window.location.href = 'https://github.com/login/oauth/authorize?client_id=7910389ed19df31e2a02'
          }

    return(
        <LoginForm 
        handleGithub ={handleGithub}
        handleInputChange={handleInputChange}
        handleFormSubmit = {handleFormSubmit}
        username = {userState.username}
        password = {userState.password}
        />
    )

}

export default Login;