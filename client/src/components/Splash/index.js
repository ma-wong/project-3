import React from 'react';
import SplashNoLogin from '../SplashNoLogin'
import SplashLogin from '../SplashLogin'
function Splash(){

    let isLoggedIn = localStorage.getItem("login")
    
    return(
        <>
        {isLoggedIn === true ? 
        <SplashNoLogin />
        :
        <SplashLogin />
        }
        </>
    )
}

export default Splash;