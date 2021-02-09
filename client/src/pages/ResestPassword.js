import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import ResetForm from "../components/ResetForm"
import API from "../utils/API";

function ResetPassword() {
    const history = useHistory();
    const [password, setPassword] = useState("");
    const username = localStorage.getItem("username");

    const handleFormSubmit = event => {
        event.preventDefault()
        console.log(username)
        console.log(password)
        API.updatePassword({
            password,
            username
        }).then(response => {
            console.log(response)
            API.loginUser({
                username,
                password
            }).then(response => {
                console.log(response)
                history.push('/');
            })
        })
    }

    return (
        <div>
          <ResetForm 
          handleInputChange = {e => setPassword(e.target.value)}
          handleFormSubmit = {handleFormSubmit}
          password = {password}
          />
        </div>

    );
}

export default ResetPassword;