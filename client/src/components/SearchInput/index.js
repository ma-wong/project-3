import React from "react";
import "./SearchInput.css";

function SearchInput({ q, handleInputChange, handleSearchSubmit }) {
    return (
        <div className="container">
                
            <div className="input-group results-search-bar">
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search For Code"
                    aria-describedby="button-addon2"
                    id="Title"
                    value={q}
                    name="q"
                    onChange={handleInputChange}
                    required
                />
                <button
                    onClick={handleSearchSubmit}
                    className="btn btn-secondary"
                    type="submit"
                    id="search-input-btn">
                    <i className="fa fa-search"></i>
                </button>
            </div>

        </div>
    );
}
  
export default SearchInput;
  