import React from "react";
import { useHistory } from 'react-router-dom'
import API from "../utils/API";

function GithubRedirect() {
    const history = useHistory();
    const code = window.location.search

    const handleRedirect = () => {
        console.log(code)
       // API.githubRedirect(code)
       
    }

    return (
        <div>
          <h1 style={{color: "white"}}>Redirecting to home page</h1>
          <button onClick={handleRedirect}>Finish Loggin In</button>
        </div>

    );
}

export default GithubRedirect;