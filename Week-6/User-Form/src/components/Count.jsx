import {useState} from "react";

function Counter(){
    const [count,setCount]=useState(0);

    //fn to modify state
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }

    return(
        <div className="bg-green-700 px-6 py-3 onClick=[increment]"></div>
    )
}