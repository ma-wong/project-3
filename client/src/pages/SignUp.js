import React, { useState } from "react";
import { Mailer } from 'nodemailer-react';
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import SignUpForm from "../components/SignUpForm";
import API from "../utils/API";
import axios from "axios";



class Signup extends React.Component {
    //this.history = useHistory();
    constructor(props) {
        super(props)

    }

    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileUrl: "",
        fileInputState: "",
        previewSource: "",
        image: "",
        redirect: false,
        loginRedirect: false
    }


     handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
     handleFormSubmit = event => {
        event.preventDefault();
        console.log("email is " + this.state.email);
        console.log("username is " + this.state.username);
        console.log("password is " + this.state.password);

        if (!this.state.email || !this.state.username || !this.state.password) {
            alert("Fill out your results")
            return;
          }
          this.uploadImage()

       // signUpUser(userState.email, userState.username, userState.password);
    };

     signUpUser = (email, username, password, profileUrl) => {
        API.signUpUser({
          email: email,
          username: username,
          password: password,
          profileUrl: profileUrl
        })
          .then((response) => {
              console.log(response)
              console.log(password);
            API.loginUser({
                username: username,
                password: password
            }).then(()=> {
                localStorage.setItem("login", true);
                this.setState({
                    redirect: true
                }, () => {
                    this.renderRedirect()
                })
          })
        });
    }

    //Github functionality

     handleGithub = event => {
        event.preventDefault();

    }

    //image functionality

     handleFileInputChange = (e) => {
        const file = e.target.files[0];
        this.setState({
            image: file,
            fileInputState: e.target.value
        })
        this.previewFile(file);
    };

     previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            this.setState({
                previewSource: reader.result
            })
        };
    };

     uploadImage = async () => {
        const formData = new FormData();
        formData.append('file', this.state.image);
        formData.append('upload_preset', "gogabeqt");
        try {
          const res = await axios.post('https://api.cloudinary.com/v1_1/dnjau9tbe/image/upload', formData);
          const imageUrl = res.data.secure_url;
          this.setState({
              profileUrl: imageUrl
          }, ()=> {
            this.signUpUser(this.state.email, this.state.username, this.state.password, this.state.profileUrl)
          })
        } catch (err) {
          console.error(err);
        }
      };

      renderRedirect = () => {
          console.log("hello")
        if (this.state.redirect) {
          return this.props.history.push("/")
        } else if (this.state.loginRedirect) {
            return this.props.history.push("/login")
        }
      }

    handleLogin = () => {
        this.setState({
            loginRedirect: true
        },() => {
            this.renderRedirect()
        })
      }
    render() {
    return (
        <div>
            {this.renderRedirect}
            <SignUpForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit = {this.handleFormSubmit}
                handleGithub = {this.handleGithub}
                username = {this.state.username}
                email = {this.state.emai}
                password = {this.state.password}
                fileInputState = {this.fileInputState}
                handleFileInputChange = {this.handleFileInputChange}
                previewSource = {this.state.previewSource}
            >
            </SignUpForm>
        </div>
          )
        }
    }

export default Signup;