import React from "react";
import "./DetailedCode.css";
import Tag from "../Tag";
import '../../pageStyles/docco.css'

function DetailedCode({ title, description, tags, language, updatedAt, userId }) {
    return (
        <div>
            <div className="card description-card">
                <div className="card-header details-card-header">
                    {title}
                </div>
                <div className="card-body details-card-body">
                    <div className="row">
                        <p className="language-info col-md-3"><span className="detail-name">Language: </span><Tag value={language}/></p>
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
                <div className="card-footer text-muted details-card-footer">
                    <div className="row">
                        <p className="col-md-6 details-footer"><span className="detail-name">Last Updated: </span>{updatedAt}</p>
                        <p className="author-info col-md-6 details-footer"><span className="detail-name">Author: </span>{userId}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedCode;