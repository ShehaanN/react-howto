import React, { useState } from "react";
import "../Components/Test.css";

const Test = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>React Counter App</h1>
      <p className="count">Count: {count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Test;
