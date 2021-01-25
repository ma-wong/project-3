import React from 'react';
import {Container, Button} from 'react-bootstrap';
import "./SplashLogin.css";
import { Link } from "react-router-dom";

function SplashLogin(){
    // const btnStyle = {"margin": "0 auto", "display":"block", "fontSize":"1.5rem",
    // "padding":"clamp(15px, 5%, 50px)", "backgroundColor":"rgb(255, 255, 255, .4)", "border":"0", "color":"black"};

    return(
        <div>
        {/* <div style={{"display":"flex", "justifyContent":"center"}}>
        <Container   style={{"padding":"0","maxWidth":"800px"}}>
            <div style={{"margin":"10% auto", "marginTop": "10%", "display":"flex", "flexDirection": "row"}}>
            <Button style={btnStyle} href="/results">Search</Button>
            <Button style={btnStyle} href="/browse">Browse</Button>
            <Button style={btnStyle} href="/create">Create</Button>
            </div>
        </Container>
        </div>   */}

            <div className="container btn-container">
                
                <Link to="/browse" className="col-md-4 d-flex justify-content-center">
                    <button className="btn draw-border">BROWSE</button>
                </Link>

                <Link to="/results" className="col-md-4 d-flex justify-content-center">
                    <button className="btn draw-border">SEARCH</button>
                </Link>

                <Link to="/create" className="col-md-4 d-flex justify-content-center">
                    <button className="btn draw-border">CREATE</button>
                </Link>

            </div>

        </div>
    )
}

export default SplashLogin;
