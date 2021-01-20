import React, { useState } from "react";
import "./createCodeForm.css";

function CreateCodeForm(){
    var tags =[];
    return(
        <div className="create-code-background">
            <div className="create-form-container">
                <form className="create-form">
                    <input type="text" name="title" placeholder="title" />
                    <textarea name="code-block" />
                    <select name="language" placeholder="language">
                        <option value="" disabled selected>language</option>
                        <option value="javascript">Javascript</option>
                        <option value="python">Python</option>
                        <option value="html">HTML</option>
                    </select>
                    <input type="text" name="tags" placeholder="tags" />
                    <div className="tags-box">
                        Tags will appear here.
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCodeForm;