import { useState } from "react";

export function UpdateCounter() {
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


export function Profile() {
  const [user, setUser] = useState({
    name: "Musab",
    age: 20,
    city: "Srinagar"
  });

  return (
    <>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <button
        onClick={() =>
          setUser(prev => ({
            ...prev,
            age: prev.age + 1
          }))
        }
      >
        Increase Age
      </button>
    </>
  );
}


