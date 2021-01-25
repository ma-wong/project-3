import React from "react";
import "./Comments.css";

function Comments({postComment, commentText, handleInputChange}) {
    return (
        <div>
            <h3 id="comment-heading">Leave A Comment</h3>
            <div class="form-floating">
                <textarea onChange={handleInputChange} name="commentText" value={commentText} class="form-control" placeholder="Leave a comment here" id="comment-input"></textarea>
                <label for="comment-input">Comments</label>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button onClick={postComment} id="submit-comment-btn" class="btn btn-info" type="button">Submit</button>
            </div>
        </div>
    )
}

export default Comments;
