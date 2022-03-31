import { useState } from "react";

export function Counter() {
  const [counter, SetCounter] = useState(0);

  function increment() {
    SetCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Incrementaasas
      </button>
    </div>
  );
}
