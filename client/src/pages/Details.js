import React, { Component } from "react"
import "../pageStyles/Details.css";
import DetailedCode from "../components/DetailedCode";
import Rating from "../components/Rating";
import Comments from "../components/Comments";
import API from "../utils/API";

class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
        postDetails: [],
        copySuccess: false
        }
    }

    componentDidMount() {
        const url = new URL(window.location.href);
        const id = url.pathname.split("/")[2];
        console.log(id);
        this.getPostById(id);
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

    // logCopyCount = id => {
    //     API.update({

    //     })
    // }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="form-floating" id="code-block-container">
                        <textarea
                            className="form-control"
                            id="code-block-text"
                            ref={(textarea) => this.textArea = textarea}
                            value={this.state.postDetails.code}
                        />
                        <label for="code-block-text">Code Block</label>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-primary" id="copy-btn" onClick={() => this.copyCodeToClipboard()}>
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
            </div>
        )
    }
}

export default Details;