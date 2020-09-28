import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>hi, I am React </h1>
       <p> this app is working paragraph</p>
       <Person name ="prasad" age = "23"/>
       <Person name = "kishore" age = "24">My Hobbies: Racing</Person>
       <Person name = "sai" age = "24"/>

      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hi now its using h1 tag inside text ') );
  }
}

export default App;
