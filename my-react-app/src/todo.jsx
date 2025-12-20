import {useState} from 'react';

function ToDo(){
    const [tasks,setTask] = useState(['hello']);
    let [newTask,setNewTask]= useState('')
    function addTask(){
        if(newTask.trim()!== ""){
            setTask(t=>[...t,newTask])
            setNewTask("")
        }
    }

    function delTask(id){
       const updatedTasks =  tasks.filter((_, i) => i !== id)
       setTask(updatedTasks);
    }
    function moveUp(index){
        const copy = [...tasks];
        if(index !== 0){
            let temp = copy[index];
            copy[index] = copy[index - 1];
            copy[index - 1] = temp;

            setTask(copy);
        }
        }

    function moveDown(index){
            
        const copy = [...tasks];
        const lastIndex = copy.length - 1;
        if(index !== lastIndex){
            let temp = copy[index];
            copy[index] = copy[index + 1];
            copy[index + 1] = temp;

            setTask(copy);
        }
        
    }


    return(
        <>
        <div>
            <h2>To-Do List</h2>
            <div>
                <input type="text"  placeholder='type your todo'value={newTask}
                 onChange={(e) => setNewTask(e.target.value)}/>
                <button onClick = {addTask}>ADD</button>
            </div>
            <ol>
                {
                    tasks.map((task,index)=>(
                        <li key={index}>{task} <button onClick= {() =>delTask(index)}>del</button> <button onClick= {() =>moveUp(index)}>Up</button> <button onClick= {() =>moveDown(index)}>down</button></li>
                    ))
                }
            </ol>
        </div>

        
        </>
    )
}
export default ToDo;