import React from 'react';

const Card = ({ title, color }: any) => {
  return (
    <div>
      <p>{title}</p>
      <img src="https://placekitten.com/200/300" alt="A nice cat" />
    </div>
  );
};

export default Card;
