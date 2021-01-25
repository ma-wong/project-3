import React from 'react';
import {Button} from 'react-bootstrap';

function Tag(props){
    return(
        <>
        <Button size="md" style={{"margin":"10px","backgroundColor":"#240090","fontWeight":"500"}}>{props.value}</Button>
        </>
    )
}

export default Tag;