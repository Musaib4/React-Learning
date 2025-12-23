import { createContext,useState,useContext } from "react";
import { ThemeContext } from "./useContext.jsx";


function Check2(){

    const change2 = useContext(ThemeContext);
    const [user,setUser] = useState('this is useContext2')

    return(
        <>
        <h2 className="square">user2{user}
            <h2>changed value is {change2}</h2>
        </h2>
        
        </>
    )
}

export default Check2;