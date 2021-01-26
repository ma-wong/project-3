import React from 'react';
import {Button} from 'react-bootstrap';

function Tag(props){
    return(
        <>
        <Button size="md" style={{"margin":"10px","backgroundColor":"#66FCF1","borderColor":"#66FCF1","fontWeight":"500","color":"#0B0C10"}}>{props.value}</Button>
        </>
    )
}

export default Tag;