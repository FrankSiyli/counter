import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

function handleDecrease(){
  setCount(count - 1)
}


  return (
    <div className="App">
      <p>{count}</p>
      <button type="button" onClick={handleIncrease}>
        +
      </button>
      <button type="button" onClick={handleDecrease}
      >-</button>
    </div>
  );
}

export default App;
