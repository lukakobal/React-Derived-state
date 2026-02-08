import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const isEven = count % 2 === 0;

  return (
    <div className="app">
      <h1>React 81 – Derived State</h1>

      <p>Števec: {count}</p>
      <p>{isEven ? "Sodo število ✅" : "Liho število ❌"}</p>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}
