import React from 'react';

const Counter = ({couter, setCounter}) => {  
  return (
    <div>
      <h3>Total clicks: {couter}</h3>
      <button
        onClick={() => {
          setCounter(couter + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;