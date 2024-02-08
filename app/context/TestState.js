"use client"
import { createContext, useState } from "react";
export const TestContext=createContext();
const TestState=(props)=>{
    const listObj={
        id:''
    }
    const [test,setTest]=useState(listObj);
    return(
        <TestContext.Provider value={{test, setTest}}>
            {props.children}
        </TestContext.Provider>
    )
}
export default TestState;