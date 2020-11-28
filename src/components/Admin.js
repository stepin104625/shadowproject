// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React, { Component } from 'react';
import './App.css';
import './App.js';
import * as microsoftTeams from "@microsoft/teams-js";
import { Button, Flex } from '@fluentui/react-northstar'
import { CallVideoIcon } from '@fluentui/react-icons-northstar'
import fire from './fire';

//
//

/**
 * The 'PersonalTab' component renders the main tab content
 * of your app.
 */
class Admin extends React.Component {
  constructor(props){
    super(props)
     this.login = this.login.bind(this);
     this.handleChange = this.handleChange.bind(this);

    this.signup = this.signup.bind(this);
    this.state = {
      email : "",
        password : ""

    }
  }
  
  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
         window.location.href=("/AdminProfile")
    }).catch((err)=>{
        console.log(err);
    })

}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}


  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  // componentDidMount(){
  //   // Get the user context from Teams and set it in the state
  //   microsoftTeams.getContext((context, error) => {
  //     this.setState({
  //       context: context
  //     });
  //   });
  //   // Next steps: Error handling using the error object
  // }

//   render() {

//       let userName = Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";
     
//       return (
//       <div class= "doctormain">
//         <form class="doctortab">
//         <table align="center" border="2">
//               <label for="ename">Email ID</label>
//               <input type="email"  id="email" name="email" placeholder="enter email address" onChange={this.handleChange} value={this.state.email}/>
//               <label for="password">Password</label>
//               <input name="password" type= "password" onChange={this.handleChange} id="password"placeholder="enter          password"value={this.state.password}/></th>
//               <center><button onClick={this.login}>Login</button></center>
//               </table>
//           </form>
//       </div>
          
//       );
//   }
// }

render()
{
    return(

<div class= "form-wrap">
          <form >
          <table  cellspacing="2" align="center" cellpadding="8" border="0">
            <tr>
            <td align = "right"> Enter Email ID:  </td>
            <td><input class="tb" type="email"  id="email" name="email" placeholder="enter email address" onChange={this.handleChange} value={this.state.email} required/></td>
            </tr> 
            <br></br>          
            <tr>
              <td align = "right"> Password:  </td>
              <td> <input class="tb" name="password" type= "password" onChange={this.handleChange} id="password"placeholder="enter password"value={this.state.password} required/>  </td>
            </tr> <br></br>
              <center><button onClick={this.login}>Login</button></center>
            </table>
         </form>
      </div>
    );
}
}



export default Admin;