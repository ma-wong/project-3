import React, { useEffect, useState, useLayoutEffect } from 'react';
import Tag from '../Tag'
import {Button} from 'react-bootstrap'
import hljs from 'highlight.js';
import './style.css';
// import '../../pageStyles/atom-one-dark.css';
import '../../pageStyles/rainbow.css'
import '../../pageStyles/docco.css'
import API from '../../utils/API'
import {useHistory} from 'react-router-dom';


function BrowseResults (props){
    const [codeList, setCodeList] = useState([]);
    const [page, setPage]=useState(0);            
    const history = useHistory();

    let sort = props.sort;

    useEffect(()=>{},[page]);
    
    useEffect( () => {
        switch(sort){
            case "views":
                setPage(0);
                API.getPostViews()
                .then(res => {
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

    function redirectDetails(id){
        history.push('/details/' + id);
    }

    return(
        <>
        {codeList.map((val, index) => {
                if(index < page + 5 && index >= page){
                return(                                                        
                    <div key={val.id} className="browse-result"
                    onClick={()=>redirectDetails(val.id)}>
                    <h2>{val.title}</h2>
                    <pre><code className="browse-code"  className={val.language}>{val.code}</code></pre>
                    <div className="browse-tag-row">                        
                        <Tag value={val.language}/>
                        {
                        val.tags?.split(",").map((v,i) =>{
                            if(i < 4){
                                return(
                                    <Tag value={v}/>)
                            }
                        })}
                    </div>
                </div>
                )
            }})}
        <div className="browse-nav-row">
        {page > 0 ? <Button onClick={()=>decreasePage()} className="browse-nav-btn">Prev</Button> : <Button className="browse-nav-btn" disabled>Prev</Button>}
        {page < codeList.length - 5 ? <Button onClick={()=>increasePage()} className="browse-nav-btn">Next</Button> : <Button className="browse-nav-btn" disabled>Next</Button>}  
        </div>        
        </>
    )
};

export default BrowseResults;