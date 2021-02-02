import React, { useLayoutEffect} from "react";
import "./SearchResultsContainer.css";
import hljs from 'highlight.js';
import Tag from "../Tag";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';



export function SearchResultsList({ children, increasePage, decreasePage, page }) {
    return (
        <>
        <ul className="list-group">{children}</ul>
        <div className="browse-nav-row">
        {page > 0 ? <Button onClick={()=>decreasePage()} className="browse-nav-btn">Prev</Button> : <Button className="browse-nav-btn" disabled>Prev</Button>}
        {page < children.length - 5 ? <Button onClick={()=>increasePage()} className="browse-nav-btn">Next</Button> : <Button className="browse-nav-btn" disabled>Next</Button>}  
        </div>
        </>
        );
}

export function SearchResultsItem({ codeId, title, description, tags, updatedAt, language, code }) {
    useLayoutEffect( () => {
        document.querySelectorAll("pre code").forEach(e => {
            hljs.highlightBlock(e);
        });
    });
    
    return (
        <div className="container">
            <li className="list-group-item results-list-item">
                <div id="results-card-container" className="card">
                    <div className="row g-0">
                        <pre id="pre-code-block" className="col-md-7"><code id="code-block" className={language}>{code}</code></pre>
                        <div className="col-md-5">
                            <div className="card-body results-body">
                                <Link to={"/details/" + codeId}>
                                    <a className="card-title" id="results-card-title">{title}</a>
                                </Link>
                                <hr/>
                                <p className="card-text"> {description} </p>
                                <div className="d-grid gap-2 d-md-block">
                                    <p id="results-card-tags"> <span className="results-id">Tags:</span>
                                        {tags?.split(",").map((v,i) =>{
                                        if(i < 4){
                                            return(
                                                <Tag value={v}/>
                                            )
                                        }
                                        })}
                                    </p>
                                </div>
                                <p className="card-text results-card-footer"><small className="text-muted"> <span className="results-id">Last updated: </span>{updatedAt} </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}