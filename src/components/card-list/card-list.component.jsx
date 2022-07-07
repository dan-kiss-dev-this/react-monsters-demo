import { Component } from 'react';

class CardList extends Component {

  render() {
    const { monsters } = this.props;
    console.log(this.props)
    return (
      <div className="card-list"> {monsters.map((monster, index) => { return <div key={monster.id}>{monster.name}</div> })}</div>
    )
  }
}

export default CardList;