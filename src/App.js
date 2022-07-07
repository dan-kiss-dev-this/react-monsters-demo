import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monstersObject => this.setState({ monsters: monstersObject }))
  }

  onSearchChange = e => {
    const searchedValue = e.target.value.toLowerCase();
    this.setState({ search: searchedValue })
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.search))

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onChangeHandler={this.onSearchChange} className="monsters-search-box" placeholder="Search monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
