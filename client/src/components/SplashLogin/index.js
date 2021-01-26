import React from 'react';
import "./SplashLogin.css";
import { Link } from "react-router-dom";
import backgroundImg from './ImgTest/test1.png'

function SplashLogin(){

    return(

        <div style={{ backgroundImage: `url(${backgroundImg})`}}>

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
