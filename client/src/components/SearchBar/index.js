import React from 'react';
import {Form} from 'react-bootstrap';

function SearchBar(){
    return(
        <>
        <Form.Control size="lg" type="text" placeholder="Search..." style={{"width":"50%","margin": "0 auto", "marginBottom":"10px"}}/>
        </> 
    )
}

export default SearchBar;