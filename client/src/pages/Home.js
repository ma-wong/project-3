import React from 'react';
import Splash from '../components/Splash'

function Home(props) {

    return(
        <>        
        <Splash
        loggedIn={props.loggedIn}/>
        </>
    )

}

export default Home;