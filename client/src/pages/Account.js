import React, { useState } from "react";
import AccountInfoCard from "../components/AccountInfoCard"

function Account() {
    const [userInfo, setUserInfo] = useState({
        email: "Jimmy@gmail.com",
        username: "jimmy",
        profileUrl: "https://cdn.vox-cdn.com/thumbor/CmMjXu8KUUpGp0nMRWCYtKBJURY=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19921093/mgidarccontentnick.comc008fa9d_d.png"
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleSave = event => {
        event.preventDefault();
        console.log("username is " + userInfo.username);
        console.log("email is " + userInfo.email);
    };
//WRITE THIS FUNc

    return(
       <div>
           <AccountInfoCard 
           handleFormSubmit={handleSave}
           handleInputChange={handleInputChange}
           email ={userInfo.email}
           username={userInfo.username}
           profileUrl={userInfo.profileUrl}
           />
       </div>
    )

}

export default Account;