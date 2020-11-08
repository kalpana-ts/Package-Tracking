//React Core
import React, { useState } from "react";

//Other imports
import Result from "../molecules/Result";


export default function TrackingPage({parameter,information}) {
    
    const result = information.filter((item) => {return (item.id)===(parameter)});
    console.log(result);
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
