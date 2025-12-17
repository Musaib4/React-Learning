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


export function UpdateArray() {
  // 1 Simple array
  const [fruits, setFruits] = useState(["Apple", "Banana"]);

  // 2 Array of objects
  const [users, setUsers] = useState([
    { id: 1, name: "Musab" },
    { id: 2, name: "Ali" }
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🍎 Fruits</h2>

      {/* Display fruits */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* Add item */}
      <button onClick={() => setFruits(prev => [...prev, "Mango"])}>
        Add Mango
      </button>

      {/* Remove item */}
      <button
        onClick={() =>
          setFruits(prev => prev.filter(fruit => fruit !== "Apple"))
        }
      >
        Remove Apple
      </button>

      {/* Update item */}
      <button
        onClick={() =>
          setFruits(prev =>
            prev.map(fruit =>
              fruit === "Banana" ? "Orange" : fruit
            )
          )
        }
      >
        Replace Banana → Orange
      </button>

      {/* Clear array */}
      <button onClick={() => setFruits([])}>
        Clear Fruits
      </button>

      <hr />

      <h2>👤 Users (Array of Objects)</h2>

      {/* Display users */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>

      {/* Add user */}
      <button
        onClick={() =>
          setUsers(prev => [
            ...prev,
            { id: 3, name: "Ahmed" }
          ])
        }
      >
        Add User
      </button>

      {/* Update user */}
      <button
        onClick={() =>
          setUsers(prev =>
            prev.map(user =>
              user.id === 1
                ? { ...user, name: "Musaib" }
                : user
            )
          )
        }
      >
        Update Musab → Musaib
      </button>

      {/* Remove user */}
      <button
        onClick={() =>
          setUsers(prev =>
            prev.filter(user => user.id !== 2)
          )
        }
      >
        Remove Ali
      </button>
    </div>
  );
}

