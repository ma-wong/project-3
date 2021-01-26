import React from 'react';
import {Button} from 'react-bootstrap';

function Tag(props){
    return(
        <>
        <Button size="md" style={{"margin":"10px","backgroundColor":"#3500d3","borderColor":"#3500d3","fontWeight":"500"}}>{props.value}</Button>
        </>
    )
}

export default Tag;