import React from 'react';
import {Button} from 'react-bootstrap';
import './style.css'

function Tag(props){
    return(
        <>
        <Button size="md" className="tag">{props.value}</Button>
        </>
    )
}

export default Tag;