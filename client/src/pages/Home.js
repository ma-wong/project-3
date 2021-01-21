import React, {useEffect} from 'react';
import Splash from '../components/Splash';
import { useHistory } from 'react-router-dom'


function Home() {
    const history = useHistory();
    
    useEffect(() => {
        let isLoggedIn = localStorage.getItem("login")
        if (isLoggedIn) {
          return;
        } else {
            history.push("/login")
        }
    });
    return (
    <>
        <Splash
        loggedIn="true"
        />
    </>
    );
  }
  
  export default Home;