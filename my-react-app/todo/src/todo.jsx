import { useState } from "react";
import './index.css'
function Todo(){
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [editIndex, setEditIndex] = useState(null);

    

    function addTodo(){
        if (inputValue.trim() === "") return;

        if (editIndex !== null) {
        // SAVE UPDATED TODO
        const updatedTodos = todos.map((todo, i) =>
            i === editIndex ? inputValue : todo
        );
        setTodos(updatedTodos);
        setEditIndex(null);
        } else {
        // ADD NEW TODO
        setTodos(v => [...v, inputValue]);
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
        setInputValue(todos[index]);
        setEditIndex(index);
    }



    return(
        <>
        <div className="container">

            <div>
                <input className="inputvalue" type="text"  placeholder="enter your todo here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="add" onClick={addTodo}>Add Todo</button>
                <button className="delall" onClick={delAllTodo}>delete all</button>
            </div>

            <div className="show">
                {
                    todos.map((todo,index)=>(
                        <p key={index}>
                            {index}. 
                            {todo} 
                        <button className="del" onClick={()=> delTodo(index)} >del</button>
                        <button className="upd" onClick={() => updateTodo(index)}>upd</button>
                        </p>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Todo;