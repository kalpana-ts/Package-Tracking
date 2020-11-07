//React Core
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components

import HomePage from "./components/templates/HomePage";
import TrackingPage from "./components/templates/TrackingPage";
import CustomerPage from "./components/templates/CustomerPage";
import Header from "./components/molecules/Header";
import Faq from "./components/templates/Faq";


import "./css/style.css";

import information from "./information.json";


export default function App() {
  // const [information, setInformation] = useState([]);
  // useEffect(() => {  
  //   getData();
  // }, []);

  // const getData = async () => {    
  //     const response = await fetch(`https://my.api.mockaroo.com/orders.json?key=e49e6840`);  
  //     const data = await response.json();     
  //     setInformation(data);  
  // };


  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Customer/:query"
            render={({ match }) => (
              <CustomerPage match={match} information={information} />
            )}
          />
          <Route path="/Result/:query"
            render={({ match }) => (
              <TrackingPage match={match} information={information} />
            )}
          />
          <Route path="/Faq" component={Faq} />
        </Switch>
      </div>
    </Router>
  );
}


