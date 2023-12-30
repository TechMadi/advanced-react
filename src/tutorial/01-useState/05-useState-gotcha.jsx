import {useState} from "react";

const UseStateGotcha=()=>{

    const [value,setValue]=useState(0)

    const handleClick=()=>{
        setValue((prevState)=>{
            return prevState + 1
        })
    }

    return (
        <div>
            <h1>{value}</h1>
            <button type='button' className="btn" onClick={handleClick}>increase</button>
        </div>
    )
}

export default UseStateGotcha