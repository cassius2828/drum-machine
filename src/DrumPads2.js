import React from 'react';
import { Pad } from './App';

export const DrumPads2 = (onSound) => {
  return (
    <div className="pad-container">
      <div>
        {" "}
        <Pad onClick={onSound} symbol="Q" />
        <Pad onClick={onSound} symbol="W" />
        <Pad onClick={onSound} symbol="E" />
      </div>{" "}
      <div>
        {" "}
        <Pad onClick={onSound} symbol="A" />
        <Pad onClick={onSound} symbol="S" />
        <Pad onClick={onSound} symbol="D" />
      </div>{" "}
      <div>
        {" "}
        <Pad onClick={onSound} symbol="Z" />
        <Pad onClick={onSound} symbol="X" />
        <Pad onClick={onSound} symbol="C" />
      </div>
    </div>
  );
};