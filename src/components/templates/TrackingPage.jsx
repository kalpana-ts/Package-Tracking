//React Core
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Other imports
import Result from "../molecules/Result";


export default function TrackingPage({parameter,information}) {
    
    const result = information.filter((item) => {return (item.parcel_id)===(parameter)});
    console.log(result);
    if(result[0] === undefined){
    return (
        <div className="Tracking-Page">
            <h1>Your Parcel Details</h1>
            <p> Could not find entered parcel number , Please check your tracking number again</p>
        </div>     
    );
    }else
    return (
        <div className="Tracking-Page">
            <h1>Your Parcel Details</h1>
            <Result data={result[0]}/>
            <h3>Thank you for visiting!!</h3>
        </div>
    );
}
