import React from 'react';
import {Form, Button} from 'react-bootstrap'; 
import SearchBar from '../SearchBar';

function SplashNoLogin(){
    const btnStyle = {"margin": "0 auto", "display":"block", "marginBottom":"10px"};
    return(
        <>
        <Form.Group style={{"marginTop":"40px"}}>
        <SearchBar/>
            <Button variant="light" size="lg" style={btnStyle}>
                Login
            </Button>
            <Button variant="light" size="lg" style={btnStyle}>
                Sign Up
            </Button>
        </Form.Group>
        </> 
    )
}

export default SplashNoLogin;