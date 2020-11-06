//React Core
import React, { useState } from "react";

//Other imports

import Search from "../molecules/Search";
import AllParcel from "../molecules/AllParcel";


export default function CustomerPage({match,information}) { 
    const query=new RegExp(match.params.query, "i");
   
     const result = information.filter((item) => item.user_phone.match(query));
    return (
        <div className="Customer-Page">
            <h1>Welcome {result[0].user_name}</h1>
            <Search />
            <thead>
                    <tr>
                        <th>ID</th>
                        <th>Parcel_ID</th>
                        <th>Status</th>
                    </tr>
            </thead>
            {information.map(item=>(
                <AllParcel id={item.id} 
                parcel_id={item.parcel_id} 
                status={item.status}/>
            ))}
            
        </div>
    );
}

