import { createContext,useState } from "react";
import Check2 from "./useContext2";
import { useContext } from "react";
import { ThemeContext } from "./useContext.jsx";

function Check1(){

    const change = useContext(ThemeContext);
    const [user,setUser] = useState('this is useContext1')

    return(
        <>
        <h2 className="square">user1{user}
            <Check2/>
            <h2>changed value is {change}</h2>
        </h2>
        
        </>
    )
}



export default Check1;