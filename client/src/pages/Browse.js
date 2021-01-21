import React from 'react';
import BrowseFilter from '../components/BrowseFilter';
import BrowseResults from '../components/BrowseResults';

function Browse(){
    return(
        <>
        <BrowseFilter />
        <br />
        <BrowseResults />
        <div style={{"display":"flex","flexDirection":"row","width":"clamp(300px,70%,900px)","margin":"0 auto"}}>
            
        </div>
        </> 
    )
}

export default Browse;