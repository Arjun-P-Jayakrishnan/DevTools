import React from "react";

export default function StyledInput(props:React.InputHTMLAttributes<HTMLInputElement>){
    return (
        <input {...props} style={{padding:'8px', borderRadius:'4px'}}/>
    );
}