import React, { useState } from "react";
import { Mailer } from 'nodemailer-react';
import { useHistory } from 'react-router-dom'
import SignUpForm from "../components/SignUpForm";
import API from "../utils/API";
import axios from "axios";



function Signup() {
    const history = useHistory();

    const [userState, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileUrl: ""
    });

    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');

    const [image, setImage] = useState('');


//put this into it's own file but for now do this
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({
            ...userState,
            [name]: value
        });
    };
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log("email is " + userState.email);
        console.log("username is " + userState.username);
        console.log("password is " + userState.password);

        if (!userState.email || !userState.username || !userState.password) {
            alert("Fill out your results")
            return;
          }

          uploadImage()

       // signUpUser(userState.email, userState.username, userState.password);
    };

    const signUpUser = (email, username, password, profileUrl) => {
        API.signUpUser({
          email: email,
          username: username,
          password: password,
          profileUrl: profileUrl
        })
          .then(function(response) {
              console.log(response)
              console.log(password);
            API.loginUser({
                username: username,
                password: password
            }).then(()=> {
                localStorage.setItem("login", true);
                history.push("/");
          });
        });
    }

    //Github functionality

    const handleGithub = event => {
        event.preventDefault();

    }

    //image functionality

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setImage(file)
        previewFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', "gogabeqt");
        try {
          const res = await axios.post('https://api.cloudinary.com/v1_1/dnjau9tbe/image/upload', formData);
          const imageUrl = res.data.secure_url;
          setUser({
              ...userState,
              profileUrl: imageUrl
          })
          signUpUser(userState.email, userState.username, userState.password, userState.profileUrl)
        } catch (err) {
          console.error(err);
        }
      };
    return (
        <div>
            <SignUpForm
                handleInputChange={handleInputChange}
                handleFormSubmit = {handleFormSubmit}
                handleGithub = {handleGithub}
                username = {userState.username}
                email = {userState.emai}
                password = {userState.password}
                fileInputState = {fileInputState}
                handleFileInputChange = {handleFileInputChange}
                previewSource = {previewSource}
            >
            </SignUpForm>
        </div>
    )
    }

export default Signup;