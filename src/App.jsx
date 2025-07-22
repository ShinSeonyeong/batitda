import React from "react"
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}></button>
    </>
  )
}

export default App
