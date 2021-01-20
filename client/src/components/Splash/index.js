import React from 'react';
import SplashNoLogin from '../SplashNoLogin'
import SplashLogin from '../SplashLogin'
function Splash(props){
    
    return(
        <>
        {props.loggedIn === "true" ? 
        <SplashNoLogin />
        :
        <SplashLogin />
        }
        </>
    )
}

export default Splash;