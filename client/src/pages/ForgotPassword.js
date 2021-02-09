import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import ForgotForm from '../components/ForgotForm';
import API from "../utils/API";

function ForgotPassword() {
    const history = useHistory();
    const [email, setEmail] = useState();

    const handleSendEmail = event => {
        event.preventDefault()
        console.log(email);
        API.getUserEmail(email).then(response => {
            if (response) {
                console.log(response.data.email)
                localStorage.setItem("username", response.data.username)
                API.sendResetEmail(email)
            } else {
                alert("email not on record")
            }
        })

    }

    return (
        <div>
        <ForgotForm 
            email={email}
            handleFormSubmit={handleSendEmail}
            handleInputChange = {e => setEmail(e.target.value)}
        />
        </div>

    );
}

export default ForgotPassword;