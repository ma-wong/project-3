import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import API from "../../utils/API";
import "./style.css";



function CommentDiv({userId, body, createdAt}) {

    const [userInfo, setUserInfo] = useState({
        username: "",
        profileUrl: "",
    }); 

    useEffect(() => {      
        getUser()
    }, []);

    const getUser = () => {
        console.log("doing it");
        API.getUser().then((response) => {
            console.log(response)
            setUserInfo({
                ...userInfo,
                username: response.data.username,
                profileUrl: response.data.profileUrl,
            })
        })
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    

    return (
    <div className="container comment-container">
        <div className="row">
        <div className="col-xs-2 col-md-1 image-col">
            <img src={userInfo.profileUrl} className="img-circle img-responsive" alt="" />
        </div>
        <div className="col-xs-10 col-md-11">
            <div className="comment-header">
                <a href="#">{userInfo.username}</a> on {new Date(createdAt).toLocaleDateString('en-US', options)} {new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="comment-text">
                {body}
            </div>
            </div>
        </div>
    </div>
    )
}

export default CommentDiv;