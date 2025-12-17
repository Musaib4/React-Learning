import { useState } from "react";

function UpdateCounter() {
  const [count, setCount] = useState(0);
  function previousVal(){
    setCount(prev => prev - 1)
  }
  function nextVal(){
    setCount(prev => prev + 1)
  }
  function reset(){
    setCount(0)
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={previousVal}>
        decrement
      </button>
      <button onClick={nextVal}>
        Increment
      </button>
      <button onClick={reset}>
        reset
      </button>
    </>
  );
}

export default UpdateCounter;
