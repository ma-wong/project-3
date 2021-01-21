import React, { useState } from "react";
import CreateCodeForm from "../components/CreateCodeForm";
import { useHistory } from 'react-router-dom'


function Create() {
    const history = useHistory();

    useEffect(() => {
        let isLoggedIn = localStorage.getItem("login")
        if (isLoggedIn) {
          return;
        } else {
            history.push("/login")
        }
    });
    return(
        <div>
            <CreateCodeForm />
        </div>
    )
}

export default Create;