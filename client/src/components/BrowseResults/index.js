import React, { useEffect } from 'react';
import {Button} from 'react-bootstrap';
import hljs from 'highlight.js';
import '../../pageStyles/atom-one-dark.css';


function BrowseResults(){
    const sample = [{
        title:'Sample Title #1',
    code:`var a = ["a", "b", "c"];
    a.forEach(function(entry) {
        console.log(entry);
    });`,
    description:'test description',
    tags:['forEach Loop','JS101'],
    language:'JS'}]

    useEffect( () => {
        document.querySelectorAll("pre code").forEach(block => {
            hljs.highlightBlock(block);
          });
    })

    return(
        <>  
        <div style={{"display":"flex","flexDirection":"column","width":"clamp(300px,70%,900px)","margin":"0 auto"}}>
        {sample.map((value, index) => {        
                while(index < 4){
                return(
                <>
                    <h2>{value.title}</h2>                    
                    <pre><code className={value.language}>{value.code}</code></pre>
                    <div style={{"display":"flex","flexDirection":"row"}}>                        
                        <Button variant="light" size="md" style={{"margin":"10px"}}>{value.language}</Button>
                        {value.tags.map((v,i) =>{
                            while(i < 4){
                                return(
                                <Button variant="light" size="md" style={{"margin":"10px"}}>{v}</Button>)
                            }
                        })}
                    </div>
                </>)
            }})}
        </div>
        </>
    )
};

export default BrowseResults;