//React Core
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components

import HomePage from "./components/templates/HomePage";
import TrackingPage from "./components/templates/TrackingPage";
import Header from "./components/molecules/Header";
import Faq from "./components/templates/Faq";
import Result from "./components/molecules/Result";
import "./css/style.css";


export default function App() {

  //const [status, setstatus] = useState(0);
  //const [information, setInformation] = useState([]);

  //const endPoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Contructor like hook
  useEffect(() => {  
    getData();
  }, []);

  const getData = async () => {    
      const response = await fetch(`https://my.api.mockaroo.com/orders.json?key=e49e6840`);  
      const data = await response.json();     
      console.log(data);   
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Tracking" component={TrackingPage} />
          <Route path="/Faq" component={Faq} />
          
        </Switch>
      </div>
    </Router>
  );
}


