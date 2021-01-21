import React from 'react';
import {Button} from 'react-bootstrap';

function BrowseFilter(){    
    const btnStyle = {"display":"block", "margin":"1%", "flex":"1", "position":"relative"};
    
    return(
        <div style={{"display":"flex","flexDirection":"row","width":"clamp(300px,70%,900px)","margin":"0 auto"}}>
        <Button variant="light" size="lg" style={btnStyle}>Most Viewed</Button>
        <Button variant="light" size="lg" style={btnStyle}>Most Likes</Button>
        <Button variant="light" size="lg" style={btnStyle}>Most Comments</Button>
        </div>
    )
};

export default BrowseFilter;