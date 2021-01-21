import React from "react";
import "./DetailedCode.css";

function DetailedCode(props) {
    return (
        <div>
            <div className="card description-card">
                <div className="card-header">
                    Author: Morgan
                </div>
                <div className="card-body">
                    <h5 className="card-title">Title: Cows</h5>
                    <p className="card-text">Description: Highland cows are the best cows.</p>
                    <a href="#" className="btn btn-primary">Cow-Lang</a>
                </div>
                <div className="card-footer text-muted">
                    Date Added: 1/20/20
                </div>
            </div>
        </div>
    )
}

export default DetailedCode;