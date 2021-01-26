import React from "react";
import "./Rating.css";

function Rating() {
    return (
        <div className="rating-container">
            <h4 id="rating-text">Was This Helpful?</h4>
            <div className="rating">
                {/* Thumbs Up */}
                <div className="like grow">
                    <i className="fa fa-thumbs-up fa-3x like" aria-hidden="true"></i>
                </div>
                {/* Thumbs Down */}
                {/* <div className="dislike grow">
                    <i className="fa fa-thumbs-down fa-3x like" aria-hidden="true"></i>
                </div> */}
            </div>
        </div>
    )
}

export default Rating;