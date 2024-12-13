import { createContext } from "react";

//In createContext, pass 2 parameters. first default value of the context, 
//and second a callback function.
const ThemeContext = createContext(["light", ()=>{}]);

export default ThemeContext;