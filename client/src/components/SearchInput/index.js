import React from "react";
import "./style.css";

function SearchInput({ q, handleInputChange, handleSearchSubmit }) {
    return (
        <form>
            <div className="container">
                <div className="row">
                    
                    <div className="search-input form-group col-md-10">
                        <input
                            className="form-control"
                            id="Title"
                            type="text"
                            value={q}
                            placeholder="Search For Code"
                            name="q"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="col-md-2">
                        <button
                            onClick={handleSearchSubmit}
                            type="submit"
                            className="btn btn-danger float-right">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
  
export default SearchInput;
  