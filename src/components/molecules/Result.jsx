import React from "react";

export default function Result({ data }) {
    const { parcel_id,status, eta,  sender, location_name,notes, } = data;


    return (
        <div className="result">
            <article className="result-left">
                <p>Parcel ID: {parcel_id}</p>
                <p>Sender: {sender} </p>
                <p>Status: {status}</p>
                
            </article>
            <article className="result-right">
                <p>Expected Arrival Time : {eta}</p>
                <p>Notes: {notes} </p>
                <p>location: {location_name}</p>
            </article>
        </div>
    );
}