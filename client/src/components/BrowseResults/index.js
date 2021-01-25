import React, { useEffect, useState, useLayoutEffect } from 'react';
import Tag from '../Tag'
import {Button} from 'react-bootstrap'
import hljs from 'highlight.js';
import '../../pageStyles/atom-one-dark.css';
import API from '../../utils/API'


function BrowseResults (props){
    const [codeList, setCodeList] = useState([]);
    const [page, setPage]=useState(0)

    let sort = props.sort;

    useEffect(()=>{console.log(":)")},[page]);
    
    useEffect( () => {
        switch(sort){
            case "views":
                setPage(0);
                API.getPostViews()
                .then(res => {
                    console.log(res);
                    setCodeList(res.data);
                }).catch(err => console.log(err))
                break;
            case "likes":
                setPage(0);
                API.getPostLikes()
                .then(res => {
                    setCodeList(res.data);
                }).catch(err => console.log(err))
                break;
            case "comments":
                setPage(0);
                API.getPostComments()
                .then(res => {
                    console.log(res)
                    setCodeList(res.data);
                }).catch(err => console.log(err))
                break;
            default:
                setPage(0);
                API.getPostAll()
                .then(res => {
                    setCodeList(res.data);
                }).catch(err => console.log(err))
            }
    },[sort])

    useLayoutEffect( () => {
        document.querySelectorAll("pre code").forEach(e => {
            hljs.highlightBlock(e);
          });
    })

    function increasePage(){        
        setPage(page+5)
    };

    function decreasePage(){
        setPage(page-5)
    };

    return(
        <>
        {codeList.map((val, index) => {
                if(index < page + 5 && index >= page){
                return(
                    <div key={val.id} style={{"display":"flex","flexDirection":"column","width":"clamp(300px,70%,900px)","margin":"0 auto",
                    "backgroundColor":"white", "padding":"20px", "borderRadius":"5px","boxShadow": "10px 10px 5px grey", "marginBottom":"15px"}} href="/">
                    <h2>{val.title}</h2>
                    <pre><code style={{"borderRadius":"5px", "maxHeight":"10rem"}} className={val.language}>{val.code}</code></pre>
                    <div style={{"display":"flex","flexDirection":"row"}}>                        
                        <Tag value={val.language}/>
                        {
                        val.tags?.split(",").map((v,i) =>{
                            if(i < 4){
                                return(
                                    <Tag value={v}/>)
                            }
                        })}
                    </div>
                </div>)
            }})}
        <div style={{"display":"flex","flexDirection":"row","justifyContent":"center"}}>
        {page > 0 ? <Button onClick={()=>decreasePage()} style={{"marginRight":"10px"}}>Prev</Button> : <Button style={{"marginRight":"10px"}} disabled>Prev</Button>}
        {page < codeList.length - 5 ? <Button onClick={()=>increasePage()}>Next</Button> : <Button disabled>Next</Button>}  
        </div>        
        </>
    )
};

export default BrowseResults;