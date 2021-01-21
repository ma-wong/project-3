import React, {useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'; 
import SearchBar from '../components/SearchBar';
import { useHistory } from 'react-router-dom'


function Search(){
    const history = useHistory();

    useEffect(() => {
        let isLoggedIn = localStorage.getItem("login")
        if (isLoggedIn) {
          return;
        } else {
            history.push("/login")
        }
    });
    const btnStyle = {"margin": "0 auto", "display":"block", "flex":"1", "position":"relative", "width":"10%", "margin":"10px"};

    const languages = ['React','JS','HTML','CSS','Bootstrap']
    return(
        <>
        <Form.Group style={{"marginTop":"40px"}}>
            <SearchBar/>            
            <div style={{"margin":"10% auto", "marginTop":"40px", "display":"flex", "flexDirection": "row", "width":"clamp(10px,700px,100%)"}}>
            {languages.map((value, index) => {
                while(index < 4){
                return <Button variant="light" size="lg" style={btnStyle}>
                    {value} 
                </Button>}
            })}
            </div>
        </Form.Group>
        </> 
    )
}

export default Search;