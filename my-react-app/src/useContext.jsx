import { createContext,useState } from "react";
import Check1 from "./useContext1";
import "./index.css";



export const ThemeContext = createContext();

function Check(){

    const [user,setUser] = useState('this is actual Parents which changes the data')

    return(
        
        <>
        <ThemeContext.Provider value= {user}>
                <h1 className="square">user{user}
                    <Check1/>
                </h1>
                
        </ThemeContext.Provider>
            
            
        
        </>
    )
}

export default Check;