// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tabtrail3 from "./Tabtrial3";
import Tabtrial from "./Tabtrial";
import Tabtrail1 from "./Tabtrail1";
import Tabtrail2 from "./Tabtrial2";
import { Component  } from "react";
import fire from "./fire";
import Admin from './Admin';
import AdminProfile from './AdminProfile';
import DoctorProfile from './DoctorProfile';









/**
 * The main app which handles the initialization and routing
 * of the app.
 */
function App() {
  // Check for the Microsoft Teams SDK object.
  if (microsoftTeams) {

    // Set app routings that don't require microsoft Teams
    // SDK functionality.  Show an error if trying to access the
    // Home page.
    if (window.parent === window.self) {
      return (
        <Router>
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/termsofuse" component={TermsOfUse} />
          <Route exact path="/Tab" component={TeamsHostError} />
          <Route exact path="/Tab1" component={TeamsHostError} />
           <Route exact path="/Tabtrial" component={TeamsHostError} />
           <Route exact path="/Tabtrail1" component={TeamsHostError} />
           <Route exact path="/Tabtrail3" component={TeamsHostError} />
            <Route exact path="/Admin" component={TeamsHostError} />
          <Route exact path="/Tab2" component={TeamsHostError} />
          <Route exact path="/Tab3" component={TeamsHostError} />
          <Route exact path="/Tabtrial2" component={TeamsHostError} />
          <Route exact path="/AdminProfile" component={TeamsHostError} />
          <Route exact path="/DoctorProfile" component={TeamsHostError} />
        
        </Router> 
        
        
      );
    }

    // Initialize the Microsoft Teams SDK
    microsoftTeams.initialize();

    // Display the app home page hosted in Teams
    return (
      <Router>
        <Route exact path="/Tab" component={Tab} />
        <Route exact path="/Tab1" component={Tab1} />
        <Route exact path="/Tab2" component={Tab2} />
        <Route exact path="/Tabtrial" component={Tabtrial} />
        <Route exact path="/Tabtrail1" component={Tabtrail1} />
        <Route exact path="/Tabtrial2" component={Tabtrail2} />
        <Route exact path="/Tabtrial3" component={Tabtrail3} />
        <Route exact path="/Tab3" component={Tab3} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/AdminProfile" component={AdminProfile} />
        <Route exact path="/DoctorProfile" component={DoctorProfile} />
       
            
      
      </Router>
    );
  }

  // Error when the Microsoft Teams SDK is not found
  // in the project.
  return (
    <h3>Microsoft Teams SDK not found.</h3>
  );

  
}

/**
 * This component displays an error message in the
 * case when a page is not being hosted within Teams.
 */
class TeamsHostError extends React.Component {
  render() {
    return (
      <div>
        <h3 className="Error">Ready to debug your app within Teams...</h3>
       
      </div>
      
    );
    
  }
  //
  //
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

   render(){
    return (
      <div className="App">
        {this.state.user ? (<DoctorProfile/>) : (<Tab2/>)}
      </div>
    );
  }


   render(){
    return (
      <div className="App">
        {this.state.user ? (<AdminProfile/>) : (<Tab/>)}
      </div>
    );
  }
}


export default App;
