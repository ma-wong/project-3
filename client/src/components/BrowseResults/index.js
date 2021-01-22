import React, { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import Tag from '../Tag'
import hljs from 'highlight.js';
import '../../pageStyles/atom-one-dark.css';
import API from '../../utils/API'


function BrowseResults (){
    const sample = [{
        title:'Sample Title #1',
        code:`var a = ["a", "b", "c"];
        a.forEach(function(entry) {
            console.log(entry);
        });`,
        description:'test description',
        tags:['forEach Loop','JS101'],
        language:'js'
    },{
        title:'Sample Title #2',
        code:`<!doctype html>

        <html lang="en">
        <head>
          <meta charset="utf-8">
        
          <title>The HTML5 Herald</title>
          <meta name="description" content="The HTML5 Herald">
          <meta name="author" content="SitePoint">
        
          <link rel="stylesheet" href="css/styles.css?v=1.0">
        
        </head>
        
        <body>
          <script src="js/scripts.js"></script>
        </body>
        </html>`,
        description:'test description',
        tags:['starter','HTML101'],
        language:'html'
    },{
        title:'Sample Title #3',
        code:`a.button1{
             display:inline-block;
             padding:0.35em 1.2em;
             border:0.1em solid #FFFFFF;
             margin:0 0.3em 0.3em 0;
             border-radius:0.12em;
             box-sizing: border-box;
             text-decoration:none;
             font-family:'Roboto',sans-serif;
             font-weight:300;
             color:#FFFFFF;
             text-align:center;
             transition: all 0.2s;
            }
            a.button1:hover{
             color:#000000;
             background-color:#FFFFFF;
            }
            @media all and (max-width:30em){
             a.button1{
              display:block;
              margin:0.4em auto;
             }
            }`,
        description:'test description',
        tags:['button','CSS101'],
        language:'css'}]

    const [codeList, setCodeList] = useState([]);

    useEffect( () => {
        let mounted = true;        
        API.getPostAll()
        .then(res => {
            if(mounted) {
                setCodeList(res.data)
                console.log(codeList)
            }
        })
        document.querySelectorAll("pre code").forEach(e => {
            hljs.highlightBlock(e);
          });
        return () => mounted = false;        
    },[])

    return(
        <>
        {codeList.map((val, index) => {
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