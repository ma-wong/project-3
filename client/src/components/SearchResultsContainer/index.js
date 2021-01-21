import React from "react";
import Img from "./Img/cow.jpg";
import "./SearchResultsContainer.css";

export function SearchResultsList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function SearchResultsItem(props) {
    return (
        <li className="list-group-item">
            <div className="container">
                <div className="row">
                    <div className="results-card card mb-3">
                        <div className="row g-0">
                            <img className="snippet-img col-md-7" src={Img} />
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h5 className="card-title">Code Snippet Title</h5>
                                    <p className="card-text">This is a description of the code snippet</p>
                                    <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-primary" type="button">Tag</button>
                                        <button className="btn btn-primary" type="button">Another Tag</button>
                                    </div>
                                    <br />
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}