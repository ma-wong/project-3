import React from "react";

export function CodeSnippets({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function CodeSnippetCard(props) {
    return (
        <li className="list-group-item">
            <div className="container">
                <div className="row">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <img className="project-img col-md-7" src="./assets/imgs/react-logo.jpg" alt="..." />
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h5 className="card-title">Sneaker Wikipedia</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-primary" type="button">Github Repository</button>
                                        <button className="btn btn-primary" type="button">Deployed Application</button>
                                    </div>
                                    <br />
                                    <p className="card-text col-md-5"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}