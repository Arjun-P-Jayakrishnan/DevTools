"use client";

import path from "path";
import { createContext,ReactNode,useContext,useState } from "react";


export interface NavigationContext{
    path:string;
    push:(relativePath:string)=>void;
    pop:()=>string;
    reload:(path:string)=>void;
}


interface Props{
    children:ReactNode
}


const NavigationContext = createContext({});


export const NavContext=({children}:Props)=>{

    const [path,setPath]=useState('/dashboard/library/');

    const push=(path:string)=>{}

    const pop=()=>{
        return '';
    }

    const reload=(path:string)=>{

    }

    let sharedNavigationContext:NavigationContext={
        path:"/dashboard/library/",
        push:push,
        pop:pop,
        reload:reload
    }

    return (

        <NavigationContext.Provider value={sharedNavigationContext}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigationContext(){
    return useContext(NavigationContext);
} 