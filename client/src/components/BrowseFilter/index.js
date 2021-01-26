import React from 'react';
import {Button} from 'react-bootstrap'
import './style.css'

function BrowseFilter(props){    
    return(
        <div class="sort-button-container">
        <Button variant="light" size="lg" class="sort-button" onClick={()=>props.changeSortViews()}>Most Viewed</Button>
        <Button variant="light" size="lg" class="sort-button" onClick={()=>props.changeSortLikes()}>Most Likes</Button>
        <Button variant="light" size="lg" class="sort-button" onClick={()=>props.changeSortComments()}>Most Comments</Button>
        </div>
    )
};

export default BrowseFilter;