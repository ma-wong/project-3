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
        User: {},
        username: "",
        author: "",
        profileUrl: "",
        comments: [],
        postData: [],
        copyCount: 0,
        copySuccess: false,
        commentText: "",
        userid: "",
        clicks: 0
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
                User: response.data,
                userid: response.data.id,
                username: response.data.username,
                profileUrl: response.data.profileUrl
            })
        })
    }

    getPostById = id => {
        API.getPost(id)
        .then(res => {
            this.setState({
                postDetails: res.data,
                author: res.data.User.username
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
                copyCount: res.data.copies,
                clicks: res.data.clicks
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

    countclicks = () => {
        const url = new URL(window.location.href);
        const id = url.pathname.split("/")[2];
        this.state.clicks +=1;
        console.log(this.state.clicks)
        this.updateCopyCount(id);
    }
    
    updateCopyCount = postId => {
        API.updatePostData(postId, {
            copies: this.state.copyCount,
            clicks: this.state.clicks
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
        console.log(this.state.userid)
        API.postComment({
            body: this.state.commentText,
            postid: this.state.postDetails.id,
            userid: this.state.userid
        }).then(res=>{
            console.log(res.data)
           this.state.comments.unshift({
                body: res.data.body,
                postid: res.data.PostId,
                userid: res.data.UserId,
                User: this.state.User,
                createdAt: res.data.createdAt
            })
            this.setState({
                comments: this.state.comments,
                commentText: ""
            });
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
                        <button type="button" className="btn btn-outline-light"
                            id="copy-btn"
                            onClick={() => this.copyCodeToClipboard()}>
                            Copy to Clipboard
                        </button>
                        {
                            this.state.copySuccess ?
                            <div style={{"color": "#66FCF1", "fontWeight": "bolder"}}>
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
                        userId={this.state.author}
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
                        <Rating 
                        handleLike={this.countclicks}
                        />
                    </div>
                </div>
            <div style={{marginBottom: "100px"}}>
               {typeof this.state.comments === "object" ? (this.state.comments.map(comment =>
                 <CommentDiv
                  id={comment.id}
                  key={comment.id}
                  body={comment.body}
                  userName={comment.User.username}
                  profileUrl={comment.User.profileUrl}
                  createdAt={comment.createdAt}
               />
                )) : <h3>No Comments Yet</h3>}
            </div>
            </div>
        )
    }
}

export default Details;