//React Core
import React from "react";
import { Link } from "react-router-dom";

export default function Search() {
    //Reactive Data
    //const [query, setQuery] = useState("");
    return (  
            <form className="search-form">               
                <label htmlFor="trackNumber">Enter your tracking number </label>
                <input className="search-bar" type="text" />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>     
    );
}