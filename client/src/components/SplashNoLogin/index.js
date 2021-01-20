import React from 'react';
import {Form, Button} from 'react-bootstrap'; 
import SearchBar from '../SearchBar';
import "./style.css";

function SplashNoLogin(){
    return(
        <>
        <Form.Group>
            <div className="no-login-box">
                <SearchBar/>
                <Button variant="light" size="lg">
                    Login
                </Button>
                <Button variant="light" size="lg">
                    Sign Up
                </Button>
            </div>
        </Form.Group>
        </> 
    )
}

export default SplashNoLogin;