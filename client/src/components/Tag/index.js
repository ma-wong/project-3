import React from 'react';
import {Button} from 'react-bootstrap';

function Tag(props){
    return(
        <>
        <Button variant="light" size="md" style={{"margin":"10px","backgroundColor":"#DDD","fontWeight":"500"}}>{props.value}</Button>
        </>
    )
}

export default Tag;