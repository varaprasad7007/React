import React, { Component } from 'react';
import './App.js';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    name: 'superman'

  }

  usernameChange = (event) => {
    this.setState({name: event.target.value })
           
  }                                                   
               
  render() {        
    return ( 
      <div className="App">
        <UserInput  
        changed={this.usernameChange}
        currentvalue={this.usernameChange} />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
      </div>
    );
  }
}

export default App;



