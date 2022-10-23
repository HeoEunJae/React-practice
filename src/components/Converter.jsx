import React from 'react';

const Converter = ({counter, setCounter}) => {
  return <div>
    <div> {counter % 2 === 0 ? "짝수" : "홀수"} </div>
    <button onClick={() => {
      setCounter(counter + 1);
    }}
    className={counter % 2 === 0 ? "btn" : "btn btn-accent"}>Button</button>
    </div>
};

export default Converter;