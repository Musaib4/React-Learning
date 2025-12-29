import { useState,useRef,useEffect,useContext } from "react";
import './index.css'
import {ThemeContext} from "./theme";

export function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Theme is {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}



export function Todo(){
    const [todos, setTodos] = useState(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        return Array.isArray(storedTodos) ? storedTodos : [];
    });

    const [inputValue, setInputValue] = useState("")
    const [editIndex, setEditIndex] = useState(null);
    const [showCompleted, setShowCompleted] = useState(false);
    const inputRef = useRef(null);
    const lastTodoRef = useRef(null);

    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        lastTodoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [todos]);
    
       

    function addTodo(){
        setShowCompleted(false);

        inputRef.current?.focus();

        if (inputValue.trim() === "")
            return;

        if (editIndex !== null) {
        // SAVE UPDATED TODO
        const updatedTodos = todos.map((todo, i) =>
           i === editIndex ? { ...todo, text: inputValue } : todo
        );
        setTodos(updatedTodos);
        setEditIndex(null);
        } else {
        // ADD NEW TODO
        setTodos(v => [...v, { text: inputValue, completed: false }]);
        }

        

    setInputValue("");
    }

    function delTodo(index){
        const newTodo = todos.filter((_, i) => i !== index)
        setTodos(newTodo)
    }

    function delAllTodo(){
        setTodos([])
    }

    function updateTodo(index){
        inputRef.current?.focus();
        setInputValue(todos[index].text);
        setEditIndex(index);
    }



    function toggleComplete(index) {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    }




    return(
        <>
        <div className="container">

            <div>
                
                <input className="inputvalue" ref={inputRef} type="text"  placeholder="enter your todo here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="add" onClick={addTodo}>Add Todo</button>
                <button className="delall" onClick={delAllTodo}>delete all</button>
                <button className="add"  onClick={() => {setShowCompleted(!showCompleted)}} >Completed</button>
            </div>

            <div className="show">
                {
                    todos
                        .filter(todo => (showCompleted ? todo.completed : true))
                        .map((todo, index) => (
                        <p key={index} 
                        ref={index === todos.length - 1 ? lastTodoRef : null}
                        className={todo.completed ? "done" : ""}>
                            {index}. 
                        {todo.text} 
                        <button className="del" onClick={()=> delTodo(index)} >del</button>
                        <button className="upd" onClick={() => updateTodo(index)}>upd</button>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(index)}
                            />
                           
                        </p>
                    ))
                }
            </div>
        </div>
        </>
    )
}

