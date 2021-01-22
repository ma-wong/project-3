import React from "react";
import Img from "./Img/cow.jpg";
import "./SearchResultsContainer.css";

export function SearchResultsList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function SearchResultsItem({ title, description, tags, updatedAt }) {
    return (
        <div className="container">
            <li className="list-group-item">
                <div className="results-card card">
                    <div className="row g-0">
                        <img className="snippet-img col-md-7" src={Img} />
                        <div className="col-md-5">
                            <div className="card-body">
                                <h5 className="card-title">Code Snippet Title: {title} </h5>
                                <p className="card-text">This is a description of the code snippet: {description} </p>
                                <div className="d-grid gap-2 d-md-block">
                                    <button className="btn btn-primary" type="button">Tags: {tags} </button>
                                </div>
                                <br />
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago: {updatedAt} </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}