import React from "react";

function CommentDiv(author, body, profileUrl, createdAt) {
    return (
        <div className="row"> 
            <div className="col-md-3"> 
            </div> 
            <div className="col-md-2"> 
                <img className="comment-avatar" src={profileUrl} alt="" /> 
                <span className="comment-username">{author}</span>
            </div>
            <div className="col-md-4">
                <span className="user-comment">{body} </span>
                </div>
                <div className="col-md-3">
                </div>
            </div>
    )
}

export default CommentDiv;