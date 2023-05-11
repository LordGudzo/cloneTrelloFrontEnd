import React from 'react';
import './list.scss';
import { ICard } from '../../../../common/interfaces/ICard';
import { Card } from '../Card/Card';

interface IList {
  title: string;
  cards: ICard[];
}

export const List = (props: IList): JSX.Element => {
  return (
    <div className="list">
      <h2 className='listHeader'>{props.title}</h2>
      <div className="listCards">
        {props.cards.map((e) => {
          return <Card key={e.id} id={e.id} title={e.title}/>
        })}
      </div>
      <button className="listAddBtn">Add Card</button>
    </div>
  );
};
