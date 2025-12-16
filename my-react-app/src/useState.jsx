import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

export function NameInput() {
  const [name, setName] = useState("");

  return (
    <>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Hello, {name}</p>
    </>
  );
}

export function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <p>{isOn ? "ON" : "OFF"}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </>
  );
}

export function list() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, "New Item"]);
  };

  return (
    <>
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export function User() {
  const [user, setUser] = useState({ name: "Musab", age: 22 });

  const updateAge = () => {
    setUser({ ...user, age: 23 });
  };

  return (
    <>
      <p>{user.name} - {user.age}</p>
      <button onClick={updateAge}>Update Age</button>
    </>
  );
}


