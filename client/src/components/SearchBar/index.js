import React from 'react';
import {Form} from 'react-bootstrap';

function SearchBar(){
    return(
        <>
        <Form.Control size="lg" type="text" placeholder="Search..." style={{"width":"clamp(300px,50%,800px)","margin": "0 auto", "marginBottom":"10px"}}/>
        </> 
    )
}

export default SearchBar;