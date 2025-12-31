import React from 'react';


const Status = ({pet}) => {

  const { mood, love, health, hunger } = pet;
  // html
  return (
    <div>
      <span> Mood: {mood} </span> |
      <span> Love: {love} </span> |
      <span> Hunger: {hunger} </span> |
      <span> Health: {health} </span>
    </div>
  );
};

export default Status;