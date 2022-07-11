import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card/card.component';

function CardList({monsters}) {
  // const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster, index) => { return <Card monster={monster} /> })}
    </div>
  )

}

export default CardList;