//React Core
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components

import HomePage from "./components/templates/HomePage";
import TrackingPage from "./components/templates/TrackingPage";
import Header from "./components/molecules/Header";
import Faq from "./components/templates/Faq"
import "./css/style.css";


export default function App() {
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


