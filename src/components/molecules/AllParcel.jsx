import React from "react";

export default function Allparcel({id,parcel_id,status}){
    return(
        <div className="All-Parcel">
            <h1>{id}</h1>
            <p>{parcel_id}</p>
            <p>{status}</p>  
        </div>
    );
}