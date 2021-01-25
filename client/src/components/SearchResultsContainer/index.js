import React, { useLayoutEffect } from "react";
import Img from "./Img/cow.jpg";
import "./SearchResultsContainer.css";
import hljs from 'highlight.js';
import Tag from "../Tag";
import { Link } from "react-router-dom";

export function SearchResultsList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function SearchResultsItem({ codeId, title, description, tags, updatedAt, language, code }) {

    console.log(codeId);
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
                                    <p id="results-card-tags"> Tags:
                                        {tags?.split(",").map((v,i) =>{
                                        if(i < 4){
                                            return(
                                                <Tag value={v}/>
                                            )
                                        }
                                        })}
                                    </p>
                                </div>
                                <p className="card-text"><small className="text-muted">Last updated: {updatedAt} </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}