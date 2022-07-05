import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

class App extends Component {
  constructor() {
    super();
    console.log(1)
    this.state = {
      filteredMonsters: [],
      monsters: [],
      search: ''
    }
  }



  componentDidMount() {
    console.log(2);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monstersObject => this.setState({ monsters: monstersObject }))
  }



  render() {
    const filteringMonsters = e => {
      if(e.target.value) {
        // set search value
        const searchedValue = e.target.value
        console.log(searchedValue);
        // trigger the filter
        this.setState({ filteredMonsters: this.state.monsters.filter(monster => monster.name.includes(searchedValue) ? monster : null) })
      } else {
        this.setState({ filteredMonsters: this.state.monsters })
      }
    }

    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="Search monsters" onChange={event => { filteringMonsters(event) }} />
        {this.state.monsters.map((monster, index) => { return <div key={monster.id}>{monster.name}</div> })}
        <div>hi</div>
        {this.state.filteredMonsters.map((monster, index) => { return <div key={monster.id}>{monster.name}</div> })}
      </div>
    )
  }
}

export default App;
