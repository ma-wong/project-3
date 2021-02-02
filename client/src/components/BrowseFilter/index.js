import React from 'react';
import {Button} from 'react-bootstrap'
import './style.css'

function BrowseFilter(props){    
    return(
        <div class="sort-button-container">
        <Button variant="light" size="lg" className="sort-button" onClick={()=>props.changeSortCopies()}>Most Copies</Button>
        <Button variant="light" size="lg" className="sort-button" onClick={()=>props.changeSortLikes()}>Most Likes</Button>
        <Button variant="light" size="lg" className="sort-button" onClick={()=>props.changeSortComments()}>Most Comments</Button>
        </div>
    )
};

export default BrowseFilter;