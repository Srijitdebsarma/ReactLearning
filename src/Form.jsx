import { useState } from "react"

export default function Form(){
    let [fullName,setFullName]=useState("");
    let handleNameChange=(event)=>{
        console.log(event.target.value);
        setFullName(event.target.value);
    }
    let onSubmit=(event)=>{
        event.preventDefault();
        console.log(fullName);
    }
    return(
        <form onSubmit={onSubmit}>
            <input placeholder="Enter your name" type="text" value={fullName} onChange={handleNameChange}></input>
            <button type="submit">Submit</button>
        </form>
    )
}