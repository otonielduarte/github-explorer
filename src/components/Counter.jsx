import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return <>
    <div>{`you are clicked ${counter}`}</div>
    <button onClick={increment}>Clique aqui</button>
  </>
}