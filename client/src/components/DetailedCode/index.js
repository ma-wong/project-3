import React from "react";
import "./DetailedCode.css";
import Tag from "../Tag";
import { useState, useEffect } from "react"; 

function DetailedCode({ title, description, tags, language, updatedAt, userId }) {
    
    const [hello, setHello] = useState(tags);
    useEffect(() => {console.log(tags)
    setHello(tags)}, [])

    const splitTags = (hello) => 
        {hello.split(",").map((v,i) =>{
            if(i < 4){
                return(
                    <Tag value={v}/>
                )
            }
        })
    }

    
    return (
        <div>
            <div className="card description-card">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    <div className="row">
                        <p className="language-info col-md-3">Language: {language}</p>
                        <p className="tags col-md-9">Tags:
                            {/* {hello.split(",").map((v,i) =>{
                            if(i < 4){
                                return(
                                    <Tag value={v}/>
                                )
                            }
                            })} */}
                            {hello ? splitTags(hello) : (
                                <div></div>
                            )}

                        </p>
                    </div>
                    <p className="card-text">Description: {description}</p>
                </div>
                <div className="card-footer text-muted">
                    <div className="row">
                        <p className="col-md-6">Last Updated: {updatedAt}</p>
                        <p className="author-info col-md-6">Author: {userId}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedCode;