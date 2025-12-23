import { useRef,useState } from "react";

export function Refren() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

export function RefCounter() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  function increment() {
    countRef.current += 1;
    setCount(count + 1);
    console.log("Ref:", countRef.current);
  }

  return <button onClick={increment}>{count}</button>;
}

