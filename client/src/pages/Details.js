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
        postDetails: [],
        comments: [],
        postData: [],
        copySuccess: false
        }
    }

    componentDidMount() {
        const url = new URL(window.location.href);
        const id = url.pathname.split("/")[2];
        console.log(id);
        this.getPostById(id);
        this.getPostDataById(id);
    }

    componentDidUpdate() {
        document.querySelectorAll("pre code").forEach(e => {
            hljs.highlightBlock(e);
        });
    }

    getPostById = id => {
        API.getPost(id)
        .then(res => {
            console.log(res)
            this.setState({
                postDetails: res.data
            },() => {
                console.log(this.state.postDetails)
            })
        })
        .catch(err => console.log(err));
    }

    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
        this.setState({copySuccess: true})
    }

    getPostDataById = postId => {
        API.getPostData(postId)
        .then(res => {
            this.setState({
                postData: res.data
            }, () => {
                console.log(this.state.postData)
            })
        })
        .catch(err => console.log(err));
    }

    // updateCopyCount = () => {
    //     API.updatePostData({
    //         PostId: this.state.postDetails.id,

    //     })
    // }

    render() {
        return (
            <div className="container">
                <div className="row">
                {/* <pre id="details-pre-code-block" ><code id="details-code-block" className={this.state.postDetails.language}>{this.state.postDetails.code}</code></pre> */}
                    <div className="form-floating" id="code-block-container">
                        {/* <pre id="details-pre-code-block" >
                            <code id="details-code-block"
                                className={this.state.postDetails.language}
                                ref={(code) => this.code = code}>
                                {this.state.postDetails.code}
                            </code>
                        </pre> */}

                        <textarea
                            className="form-control"
                            id="code-block-text"
                            ref={(textarea) => this.textArea = textarea}
                            value={this.state.postDetails.code}
                        />
                        <label for="code-block-text">Code Block</label>
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
                        userId={this.state.postDetails.UserId}
                    />
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <Comments />
                    </div>
                    <div className="col-md-4">
                        <Rating />
                    </div>
                </div>
                
               {this.state.comments.map(comment =>
                 <CommentDiv
                 id={comment.id}
                 key={comment.id}
                 author={comment.author}
                 profileUrl={comment.profileUrl}
                 body={comment.body}
               />
                )}
            </div>
        )
    }
}

export default Details;