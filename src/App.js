import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    console.log(2);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monstersObject => this.setState({ monsters: monstersObject}))
  }

  render() {
    const searchAction = e => {
      const searchedValue = e.target.value.toLowerCase();
      this.setState({ search: searchedValue})
    }

    const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.search) )

    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="Search monsters" onChange={event => { searchAction(event) }} />
        {filteredMonsters.map((monster, index) => { return <div key={monster.id}>{monster.name}</div> })}
      </div>
    )
  }
}

export default App;
