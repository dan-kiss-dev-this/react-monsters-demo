import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Linda'
        },
        {
          name: 'Frank'
        },
        {
          name: 'Jacky'
        }]

    }
  }



  render() {
    // console.log('log')
    return (
      <div>
        {this.state.monsters.map((value, index) => { return <div key={index}>{value.name}</div> })}
        {/* {this.state.monsters.map(function (value, index) { return <div>{value.name}</div> })} */}
      </div>
    )
  }
}

export default App;
