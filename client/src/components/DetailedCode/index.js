import React from "react";
import "./style.css";

function DetailedCode(props) {
    return (
        <div class="container">
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value="function hello() alert('Hello');"></textarea>
                <label for="floatingTextarea">Code Block</label>
            </div>
        </div>
    )
}

export default DetailedCode;