import React, { Component } from "react"
import "../pageStyles/Details.css";
import { useHistory } from 'react-router-dom'


class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
        copySuccess: false
        }
    }

    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
        this.setState({copySuccess: true})
    }

    render() {
        return (
            <div className="container">
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        id="code-block-text"
                        ref={(textarea) => this.textArea = textarea}
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Convallis tellus id interdum velit laoreet id donec ultrices. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis posuere morbi leo urna molestie at elementum eu. Porttitor massa id neque aliquam vestibulum morbi. Nullam eget felis eget nunc lobortis mattis. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Rhoncus est pellentesque elit ullamcorper dignissim. Maecenas sed enim ut sem viverra aliquet eget sit.
                        Et netus et malesuada fames ac turpis egestas maecenas pharetra. Condimentum lacinia quis vel eros donec. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Elementum eu facilisis sed odio morbi quis commodo odio. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Id porta nibh venenatis cras sed. Justo eget magna fermentum iaculis. Sagittis id consectetur purus ut faucibus. Ridiculus mus mauris vitae ultricies leo. Lectus urna duis convallis convallis tellus id interdum. Nunc consequat interdum varius sit amet."
                    />
                    <label for="code-block-text">Code Block</label>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-primary" onClick={() => this.copyCodeToClipboard()}>
                        Copy to Clipboard
                    </button>
                    {
                        this.state.copySuccess ?
                        <div style={{"color": "green"}}>
                        Success!
                        </div> : null
                    }
                </div>
            </div>
        )
    }
}

export default Details;