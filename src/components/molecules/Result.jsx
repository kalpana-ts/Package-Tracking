import React from "react";

export default function Result({ data }){
    const { id,status,eta,parcel_id,sender,location_name,user_phone,user_name } = data;


    return(
        <div className="result">
            <p>ID: {id}</p>
            <p>Parcel ID: {parcel_id}</p>
            <p>status: {status}</p>
            <p>ETA: {eta}</p>
        </div>
    );
}