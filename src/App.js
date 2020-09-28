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

switchNameHandler = (gun) => {
  this.setState({                   
    persons:[                      
      {name: gun, age:24},           
      {name: 'chowdhary', age:25},
      {name: 'saidu', age:26}
    ]
  })
}

nameChangedHandler= (event) => {
  this.setState({
    persons: [
      {name: event.tart, age:23},
      {name: event.target.value, age:24},
      {name: 'sai', age:24}
    ]
  })
}

  render() {
    return (
      <div className="App">
       <h1>hi, I am React </h1>
       <p> this app is working paragraph</p>
       <button onClick={() => this.switchNameHandler('rajshekar')}>switch Name</button>
       <Person 
       name = {this.state.persons[0].name} 
       age = {this.state.persons[0].age}/>
       
       <Person 
       name = {this.state.persons[1].name} 
       age = {this.state.persons[0].age}
       changed = {this.nameChangedHandler}>My Hobbies: Racing</Person>
       
       <Person 
       name = {this.state.persons[2].name}
      age = {this.state.persons[0].age}
      click = {this.switchNameHandler.bind(this, 'nagarjun')}
      // changed = {this.nameChangedHandler}
      />

      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hi now its using h1 tag inside text ') );
  }
}

export default App;
