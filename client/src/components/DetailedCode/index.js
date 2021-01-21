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
                    <h5 className="card-title">Title: "Hello World!" in COW language</h5>
                    <p className="card-text">Description: The COW programming language is an esoteric programming language created by Sean Heber in 2003. It is a Brainfuck variant designed humorously with Bovinae in mind. COW has twelve instructions (four more than Brainfuck) and is Turing-complete. Most instructions are moos, only the capitalization varies: mOo, moO, mOO, Moo, and so on. MMM, OOO, oom and OOM are the exceptions. All other character combinations are ignored and treated as comments.</p>
                    <a href="#" className="btn btn-primary">COW</a>
                </div>
                <div className="card-footer text-muted">
                    Date Added: 1/20/20
                </div>
            </div>
        </div>
    )
}

export default DetailedCode;