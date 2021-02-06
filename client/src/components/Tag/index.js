import React from 'react';
import {Button} from 'react-bootstrap';
import './style.css'
import {Link} from 'react-router-dom';

function Tag(props){
    return(
        <>
        <Link to={"/tag/" + props.value}><Button size="md" className="tag">{props.value}</Button></Link>
        </>
    )
}

export default Tag;