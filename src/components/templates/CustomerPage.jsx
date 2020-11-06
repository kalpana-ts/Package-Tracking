//React Core
import React, { useState } from "react";

//Other imports

import Search from "../molecules/Search";
import AllParcel from "../molecules/AllParcel";


export default function CustomerPage({information}) { 

    return (
        <div className="Customer-Page">
            <h1>Welcome Customer</h1>
            <Search />
            {information.map(item=>(
                <AllParcel id={item.id} 
                parcel_id={item.parcel_id} 
                status={item.status}/>
            ))}
            
        </div>
    );
}

