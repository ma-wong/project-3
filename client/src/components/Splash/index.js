import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';

function Splash(props){
    const btnStyleWait = {"margin": "0 auto", "display":"block", "marginBottom":"10px"};
    const btnStyleMain = {"margin": "0 auto", "display":"inline-block", "marginBottom":"10px", "fontSize":"1.5rem",
    "padding":"50px 50px 50px 50px", "backgroundColor":"rgb(255, 255, 255, .4)", "border":"0", "margin":"10px", "color":"black"};
    return(
        <>
        {props.loggedIn === "true" ? 
        <>
        <Container>
        <Form.Group style={{"marginTop":"40%"}}>
        <Form.Control size="lg" type="text" placeholder="Search..." style={{"width":"50%","margin": "0 auto", "marginBottom":"10px"}}/>
            <div>
            <Button variant="light" size="lg" style={btnStyleWait}>
                Login
            </Button>
            <Button variant="light" size="lg" style={btnStyleWait}>
                Sign Up
            </Button>
            </div>
        </Form.Group>
        </Container>
        </> 
        :
        <>
        <Container>
            <div style={{"marginTop": "40%"}}>
            <Button style={btnStyleMain}>Search</Button>
            <Button style={btnStyleMain}>Browse</Button>
            <Button style={btnStyleMain}>Create</Button>
            </div>
        </Container>
        </>}
        </>
    )
}

export default Splash;