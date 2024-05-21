import { useState } from "react";
export default function Counter(){
    let [count, setCount]=useState(0);  //only initialize once, while reRendering it will be ignored 
    // console.log(arr);

    let increaseCount=()=>{
        setCount(count+1);  //setCount updater function will trigger the reRender

        //Async way of calling setCount method
        // setCount((currCount)=>{
        //     return currCount+1;
        // })
        // setCount((currCount)=>{
        //     return currCount+1;
        // })
    }
    return(
        <>
        <h3>Count ={count}</h3>
        <button onClick={increaseCount}>Increase Count!</button>
        </>
    )
} 