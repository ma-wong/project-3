import React, { useEffect, useState, useLayoutEffect } from 'react';
import Tag from '../Tag'
import hljs from 'highlight.js';
import '../../pageStyles/atom-one-dark.css';
import API from '../../utils/API'


function BrowseResults (props){
    const [codeList, setCodeList] = useState([]);

    let sort = props.sort;
    
    useEffect( () => {
        switch(sort){
            case "views":
                API.getPostViews()
                .then(res => {
                    setCodeList(res.data);
                }).catch(err => console.log(err))
                break;
            case "likes":
                API.getPostLikes()
                .then(res => {
                    setCodeList(res.data);
                }).catch(err => console.log(err))
                break;
            case "comments":
                API.getPostComments()
                .then(res => {
                    setCodeList(res.data);
                }).catch(err => console.log(err))
                break;
            default:
                API.getPostAll()
                .then(res => {
                    console.log(res)
                    setCodeList(res.data);
                }).catch(err => console.log(err))
            }
    },[sort])

    useLayoutEffect( () => {
        document.querySelectorAll("pre code").forEach(e => {
            hljs.highlightBlock(e);
          });
    })

    return(
        <>
        {codeList?.map((val, index) => {
                if(index < 4){
                return(
                    <div key={val.id} style={{"display":"flex","flexDirection":"column","width":"clamp(300px,70%,900px)","margin":"0 auto",
                    "backgroundColor":"white", "padding":"20px", "borderRadius":"5px","boxShadow": "10px 10px 5px grey", "marginBottom":"15px"}} href="/">
                    <h2>{val.title}</h2>
                    <pre><code style={{"borderRadius":"5px", "maxHeight":"10rem"}} className={val.language}>{val.code}</code></pre>
                    <div style={{"display":"flex","flexDirection":"row"}}>                        
                        <Tag value={val.language}/>
                        {
                        val.tags.split(",").map((v,i) =>{
                            if(i < 4){
                                return(
                                    <Tag value={v}/>)
                            }
                        })}
                    </div>
                </div>)
            }})}        
        </>
    )
};

export default BrowseResults;