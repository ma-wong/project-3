import React, { useState } from "react";
import LoginForm from "../components/LoginForm"

function Login() {
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
                   /// ls
                if (response.status === 200) {
                    setUser({
                        ...userState,
                        loggedIn: true
                    })
                    
                }
                });
          }

      
          // If we have an email and password we run the loginUser function and clear the form
   //       loginUser(userState.username, userState.password);
        
        // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
        // function loginUser(username, password) {
        //   $.post("/api/login", {
        //     username: username,
        //     password: password,
        //   })
        //     .then(function() {
        //         //Probably use react router here
        //       window.location.replace("/home");
        //       // If there's an error, log the error
        //     })
        //     .catch(function(err) {
        //       console.log(err);
        //     });
        // }


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