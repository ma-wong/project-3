import React, {useState, useEffect} from 'react';
import API from '../utils/API';
import hljs from 'highlight.js'
import {SearchResultsItem} from '../components/SearchResultsContainer'
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';


function MyBlocks(){
    const [codeList, setCodeList] = useState([]);
    const [userId, setUserId] = useState([]);    
    const [page, setPage]=useState(0);                
    const history = useHistory();

    useEffect(()=>{
        API.getUser()
        .then(res=>{
            setUserId(res.data.id)})
        .catch(err=>console.log(err))        
    },[])

    useEffect(()=>{
        if(typeof userId === "number"){
            API.getPostsByAuthor(userId)
            .then(res=>{
                setCodeList(res.data);
            })
            .catch(err=>console.log(err))
        }
            
    },[userId])

    useEffect(()=>{
        document.querySelectorAll("pre code").forEach(e => {
            hljs.highlightBlock(e);
        });
    },[page,codeList])

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
                    <SearchResultsItem
                        codeId={val.id}
                        title={val.title}
                        description={val.description}
                        code={val.code}
                        tags={val.tags}
                        language={val.language}
                        updatedAt={val.updatedAt}
                    />
                )
            }})}
        <div className="browse-nav-row">
        {page > 0 ? <Button onClick={()=>decreasePage()} className="browse-nav-btn">Prev</Button> : <Button className="browse-nav-btn" disabled>Prev</Button>}
        {page < codeList.length - 5 ? <Button onClick={()=>increasePage()} className="browse-nav-btn">Next</Button> : <Button className="browse-nav-btn" disabled>Next</Button>}  
        </div>
        </>
    )

}

export default MyBlocks;