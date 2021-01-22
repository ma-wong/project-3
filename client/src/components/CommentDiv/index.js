import React from "react";

function Comment(author, body, profileUrl) {
    return (
        <div>
            <h3>Sample Comment</h3>
            <div>
                {author}
                {body}
                {profileUrl}
            </div>
        </div>
    )
}

export default Comment;