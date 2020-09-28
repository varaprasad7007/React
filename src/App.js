import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      {name: 'prasad', age:23},
      {name: 'kishore', age:24},
      {name: 'sai', age:24}
    ]
  }

switchNameHandler = () => {
  this.setState({
    persons:[
      {name: 'vara', age:24},
      {name: 'chowdhary', age:25},
      {name: 'saidu', age:26}
    ]
  })
}


  render() {
    return (
      <div className="App">
       <h1>hi, I am React </h1>
       <p> this app is working paragraph</p>
       <button onClick={this.switchNameHandler}>switch Name</button>
       <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
       <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My Hobbies: Racing</Person>
       <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>

      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hi now its using h1 tag inside text ') );
  }
}

export default App;
