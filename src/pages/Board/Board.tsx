import React from 'react';
import './board.scss';
import { List } from './components/List/List';

export const Board = (): JSX.Element => {
  const [title, setTitle] = React.useState('Моя тестова дошка');
  const [lists, setLists] = React.useState([
    {
      id: 1,
      title: 'Плани',
      cards: [
        { id: 1, title: 'помити кота' },
        { id: 2, title: 'приготувати суп' },
        { id: 3, title: 'сходити в магазин' },
      ],
    },
    {
      id: 2,
      title: 'В процесі',
      cards: [{ id: 4, title: 'подивитися серіал' }],
    },
    {
      id: 3,
      title: 'Зроблено',
      cards: [
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
      ],
    },
  ]);

  return (
    <div className='board'>
      <div className="boardHeader">{title}</div>
      <div className="boardWorkPlace">
        {lists.map((e) => (
            <List key={e.id} title={e.title} cards={e.cards} />
        ))}
      </div>
      <button className="boardAddBtn">Add List</button>
    </div>
  );
};
