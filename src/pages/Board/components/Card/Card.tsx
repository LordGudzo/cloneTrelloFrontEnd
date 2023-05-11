import React from 'react';
import { ICard } from '../../../../common/interfaces/ICard';

export const Card = (props: ICard): JSX.Element => {
  return (  
    <div>{props.title}</div>       
  );
};