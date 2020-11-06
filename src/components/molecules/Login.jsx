import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    //Reactive Data
    const [query, setQuery] = useState("");
    return (
        <form className="login-form">
            <label >Enter your Phone number </label>
            <input className="search-bar"
                type="text"
                placeholder="Mobile Number"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <Link to={`/customer/${query}`}>Submit</Link>
        </form>
    );
}