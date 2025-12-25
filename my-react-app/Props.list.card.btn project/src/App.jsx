import { useState } from "react";
import Button from "./components/button.jsx";
import Card from "./components/card.jsx";
import List from "./components/list.jsx"


function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);


  function addItem() {
    if (text.trim() === "") return;
    setItems(prev => [...prev, text]);
    setText("");
  }

  function deleteItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <>
    <Card>
      <input type="text"
        placeholder="hello type here"
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <Button
          text="Add Item"
          onClick={addItem}
          type="btn"
        />
        <List
          items={items}
          onDelete={deleteItem}
        />

    </Card>
    </>
    
      
  );
}

export default App;
