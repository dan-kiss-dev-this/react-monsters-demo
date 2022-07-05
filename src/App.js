import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

class App extends Component {


  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monstersObject => this.setState({ monsters: monstersObject }))
  }



  render() {
    // console.log('log')
    return (
      <div>
        {this.state.monsters.map((monster, index) => { return <div key={monster.id}>{monster.name}</div> })}
        {/* {this.state.monsters.map(function (value, index) { return <div>{value.name}</div> })} */}
      </div>
    )
  }
}

export default App;
