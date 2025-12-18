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
                        <li key={index}>{task} <button onClick= {() =>delTask(index)}>del</button></li>
                    ))
                }
            </ol>
        </div>

        
        </>
    )
}
export default ToDo;