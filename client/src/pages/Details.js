import React, { Component } from "react"
import "../pageStyles/Details.css";
import DetailedCode from "../components/DetailedCode";
import Rating from "../components/Rating";
import Comments from "../components/Comments";
import CommentDiv from "../components/CommentDiv"
import API from "../utils/API";
import hljs from 'highlight.js';

class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
        postDetails: {},
        username: "",
        comments: [],
        postData: [],
        copyCount: 0,
        copySuccess: false,
        commentText: "",
        userid: ""
        }
    }

    componentDidMount() {
        const url = new URL(window.location.href);
        const id = url.pathname.split("/")[2];
        console.log(id);
        this.getUser()
        this.getPostById(id);
        this.getPostDataById(id);
    }

    componentDidUpdate() {
        document.querySelectorAll("pre code").forEach(e => {
            hljs.highlightBlock(e);
        });
    }

    getUser = () => {
        console.log("doing it");
        API.getUser().then((response) => {
            console.log(response)
            this.setState({
                userid: response.data.id
            })
        })
    }

    getPostById = id => {
        API.getPost(id)
        .then(res => {
            this.setState({
                postDetails: res.data,
                username: res.data.User.username
            },() => {
                this.getComments(id)
            })
        })
        .catch(err => console.log(err));
    }

    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
        this.setState({copySuccess: true})
        this.countCopies();
    }

    getPostDataById = postId => {
        API.getPostData(postId)
        .then(res => {
            console.log(res)
            this.setState({
                postData: res.data,
                copyCount: res.data.copies
            }, () => {
                console.log(this.state.postData)
            })
        })
        .catch(err => console.log(err));
    }

    countCopies = () => {
        const url = new URL(window.location.href);
        const id = url.pathname.split("/")[2];
        this.state.copyCount +=1;
        console.log(this.state.copyCount)
        this.updateCopyCount(id);
    }
    
    updateCopyCount = postId => {
        API.updatePostData(postId, {
            copies: this.state.copyCount
        })
        .catch(err => console.log(err));
    }
    
    getComments = postId  => {
        API.getComments(postId)
            .then(res => {
                console.log(res.data)
                this.setState({
                    comments: res.data
                })
            })
            .catch(err => console.log(err))
    }

    postComment = event => {
        event.preventDefault();
        console.log("clicked");
        console.log(this.state.postDetails.id);
        console.log(this.state.commentText)
        API.postComment({
            body: this.state.commentText,
            postid: this.state.postDetails.id,
            userid: this.state.userid
        }).then(res=>{
            this.setState({
                comments: [...this.state.comments, {
                    body: this.state.commentText,
                    postid: this.state.postDetails.id,
                    userid: this.state.userid
                }]
            })
        });
    }

   

    //TODO
    //need an input did change function

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log(this.state.commentText)
      };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="form-floating" id="code-block-container">
                        <pre id="details-pre-code-block" ><code id="details-code-block" className={this.state.postDetails.language}>{this.state.postDetails.code}</code></pre>

                        <textarea
                            className="form-control"
                            id="code-block-textarea"
                            ref={(textarea) => this.textArea = textarea}
                            value={this.state.postDetails.code}
                        />
                        {/* <label id="textarea-label" for="code-block-textarea">Code Block</label> */}
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-primary"
                            id="copy-btn"
                            onClick={() => this.copyCodeToClipboard()}>
                            Copy to Clipboard
                        </button>
                        {
                            this.state.copySuccess ?
                            <div style={{"color": "green"}}>
                            Copied!
                            </div> : null
                        }
                    </div>
                </div>
                
                <div className="row">
                    <DetailedCode 
                        title={this.state.postDetails.title}
                        description={this.state.postDetails.description}
                        tags={this.state.postDetails.tags}
                        language={this.state.postDetails.language}
                        updatedAt={this.state.postDetails.updatedAt}
                        userId={this.state.username}
                    />
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <Comments 
                        postComment={this.postComment}
                        handleInputChange={this.handleInputChange}
                        commentText={this.state.commentText}
                        />
                    </div>
                    <div className="col-md-4">
                        <Rating />
                    </div>
                </div>
            <div style={{marginBottom: "100px"}}>
               {typeof this.state.comments === "object" ? (this.state.comments.map(comment =>
                 <CommentDiv
                  id={comment.id}
                  key={comment.id}
                  body={comment.body}
                  userId={comment.userId}
                  createdAt={comment.createdAt}
               />
                )) : <h3>No Comments Yet</h3>}
            </div>
            </div>
        )
    }
}

export default Details;