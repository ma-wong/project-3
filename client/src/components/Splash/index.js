import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';

function Splash(props){
    const btnStyleWait = {"margin": "0 auto", "display":"block", "marginBottom":"10px"};
    const btnStyleMain = {"margin": "0 auto", "display":"block", "fontSize":"1.5rem",
    "padding":"clamp(15px, 5%, 50px)", "backgroundColor":"rgb(255, 255, 255, .4)", "border":"0", "color":"black"};
    return(
        <>
        {props.loggedIn === "true" ? 
        <>
        <Form.Group style={{"marginTop":"40px"}}>
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
        </> 
        :
        <>
        <div style={{"display":"flex", "justifyContent":"center"}}>
        <Container   style={{"padding":"0","maxWidth":"800px"}}>
            <div style={{"margin":"10% auto", "marginTop": "10%", "display":"flex", "flexDirection": "row"}}>
            <Button style={btnStyleMain}>Search</Button>
            <Button style={btnStyleMain}>Browse</Button>
            <Button style={btnStyleMain}>Create</Button>
            </div>
        </Container>
        </div>  
        </>}
        </>
    )
}

export default Splash;