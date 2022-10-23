import React, { useState } from "react";
import Converter from "./components/Converter";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="">
      <Counter couter = {counter} setCounter = {setCounter} />
      <Converter counter = {counter} setCounter = {setCounter}  />
    </div>
  );
}

export default App;
