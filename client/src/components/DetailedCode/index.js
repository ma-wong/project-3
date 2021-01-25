import React from "react";
import "./DetailedCode.css";
import Tag from "../Tag";

function DetailedCode({ title, description, tags, language, updatedAt, userId }) {
    return (
        <div>
            <div className="card description-card">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    <div className="row">
                        <p className="language-info col-md-3"><span className="detail-name">Language: </span>{language}</p>
                        <p className="details-card-tags col-md-9"><span className="detail-name">Tags: </span>
                            {tags?.split(",").map((v,i) =>{
                            if(i < 4){
                                return(
                                    <Tag value={v}/>
                                )
                            }
                            })}
                        </p>
                    </div>
                    <p className="card-text"><span className="detail-name">Description: </span>{description}</p>
                </div>
                <div className="card-footer text-muted">
                    <div className="row">
                        <p className="col-md-6"><span className="detail-name">Last Updated: </span>{updatedAt}</p>
                        <p className="author-info col-md-6"><span className="detail-name">Author: </span>{userId}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedCode;