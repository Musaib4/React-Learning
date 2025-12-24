import { useState } from "react";
import './index.css'

function Counter(){

    const [count,setCount] = useState(0)

    function increment(){
        setCount(c=> c+1)
    }

    function decrement(){
        setCount(c=> c-1)
    }

    function reset(){
        setCount(0)
    }

    return(
        <>
        <div className="container">

        
            <input className="input" type="number" placeholder="type here" onChange={(e)=> setCount(Number(e.target.value))} />
            <div>
                <p className="count">{count}</p>
                <button className="b1" onClick={increment} >Inc </button>
                <button className="b2" onClick={decrement} >Dec </button>
                <button className="b3" onClick={reset} >Reset </button>
            </div>
        </div>
        </>
    )
}

export default Counter;