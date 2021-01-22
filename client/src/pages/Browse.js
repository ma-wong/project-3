import React, {useState} from 'react';
import BrowseFilter from '../components/BrowseFilter';
import BrowseResults from '../components/BrowseResults';

function Browse(){
    const [sort, setSort] = useState("default");

    function changeSortViews(){
        setSort("views");
    }

    function changeSortLikes(){
        setSort("likes");
    }

    function changeSortComments(){
        setSort("comments");
    }

    return(
        <>
        <BrowseFilter 
        changeSortViews={changeSortViews}
        changeSortLikes={changeSortLikes}
        changeSortComments={changeSortComments}/>
        <br />
        <BrowseResults 
        sort={sort}/>
        <div style={{"display":"flex","flexDirection":"row","width":"clamp(300px,70%,900px)","margin":"0 auto"}}>
            
        </div>
        </> 
    )
}

export default Browse;