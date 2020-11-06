//React Core
import React, { useState } from "react";

//Other imports
import Result from "../molecules/Result";


export default function TrackingPage({match,information}) {
//Check the dev ed video
    const query=new RegExp(match.params.query, "i");
   // const [result, setResult, isError] = useState("");
    const result = information.filter((item) => item.id.match(query));
    
    if(result[0] === undefined){
    return (
        <div className="Tracking-Page">
            <h1>Tracking Page</h1>
            <p>Entered tracking ID is not valid, check again</p>
        </div>     
    );
    }else
    return (
        <div className="Tracking-Page">
            <h1>Tracking Page</h1>
            <Result data={result[0]}/>
        </div>
    );
}
