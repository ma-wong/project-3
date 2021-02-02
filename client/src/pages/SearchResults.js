import React, { Component } from "react";
import API from "../utils/API";
import { SearchResultsItem, SearchResultsList } from "../components/SearchResultsContainer";
import SearchInput from "../components/SearchInput";
import { useHistory } from 'react-router-dom'
import { render } from "react-dom";


class SearchResults extends Component {
    
    state = {
        searchResults: [],
        query: "",
        message: "",
        page: 0
    }

    // const history = useHistory();

    // useEffect(() => {
    //     let isLoggedIn = localStorage.getItem("login")
    //     if (isLoggedIn) {
    //       return;
    //     } else {
    //         history.push("/login")
    //     }
    // });

    componentDidMount() {
        // const bg = {
        //     backgroundImage: 'none'
        // }
        this.getAllResults();
        
        // document.body.style.backgroundColor = "#282828";
    }

    getAllResults = () => {
        API.getPostAll()
        .then(res => {
            this.setState({
                searchResults: res.data
            })
        })
        .catch(err => console.log(err));
    }

    getSearchResults = () => {
        API.getPostsBySearch(this.state.query)
        .then(res => {
            console.log(res)
            this.setState({
                searchResults: res.data
            })
        })
        .catch(() =>
            this.setState({
                searchResults: [],
                message: "No Results Found, Try Searching For Other Key Words"
            })
        )
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        this.getSearchResults();
    };

    increasePage = () => {        
        this.setState({
            page: this.state.page+5
        })
    };

    decreasePage = () =>{
        this.setState({
            page: this.state.page-5
        })
    };

    render() {
        return (
            <div>
                <SearchInput
                    handleInputChange={this.handleInputChange}
                    handleSearchSubmit={this.handleSearchSubmit}
                    query={this.state.query}
                />
                <SearchResultsList
                    increasePage={this.increasePage}
                    decreasePage={this.decreasePage}
                    page={this.state.page}>
                    {this.state.searchResults.map((codeSnippet, index) => {
                        if(index < this.state.page + 5 && index >= this.state.page){
                            return(
                                <SearchResultsItem
                                    codeId={codeSnippet.id}
                                    title={codeSnippet.title}
                                    description={codeSnippet.description}
                                    code={codeSnippet.code}
                                    tags={codeSnippet.tags}
                                    language={codeSnippet.language}
                                    updatedAt={codeSnippet.updatedAt}
                                />)
                        }
                    })}
    
                </SearchResultsList>
            </div>
        )
    }

}

export default SearchResults;
