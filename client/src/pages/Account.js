import React, { useState, useEffect } from "react";
import AccountInfoCard from "../components/AccountInfoCard";
import { useHistory } from 'react-router-dom'
import API from "../utils/API";

function Account() {
    const history = useHistory();

    const [userInfo, setUserInfo] = useState({
        email: "",
        username: "",
        profileUrl: ""
    }); 

    useEffect(() => {
        let isLoggedIn = localStorage.getItem("login")
        if (isLoggedIn) {
            getUser()
          return;
        } else {
            history.push("/login")
        }
    }, []);

    const getUser = () => {
        console.log("doing it");
        API.getUser().then((response) => {
            console.log(response)
            setUserInfo({
                ...userInfo,
                email: response.data.email,
                username: response.data.username,
                profileUrl: ""
            })
        })
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleSave = event => {
        event.preventDefault();
        console.log("username is " + userInfo.username);
        console.log("email is " + userInfo.email);
    };

    const handleLogout = event => {
        event.preventDefault();
        API.logOutUser().then(() => {
            localStorage.setItem("login", false);
            history.push('/login');
        })
    }
//WRITE THIS FUNc

    return(
       <div>
           <AccountInfoCard 
           handleFormSubmit={handleSave}
           handleInputChange={handleInputChange}
           handleLogout={handleLogout}
           email ={userInfo.email}
           username={userInfo.username}
           profileUrl={userInfo.profileUrl}
           />
       </div>
    )

}

export default Account;