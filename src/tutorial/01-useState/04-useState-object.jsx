import {useState} from "react";

const useStateObject=()=>{


    const [person,setPerson]=useState({
        name:'peter',
        age:24,
        hobby:'read books'
    })

    const displayPerson=()=>{
    setPerson({...person,name:'John',hobby:"Eating"})
    }
    return (

        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>Enjoys: {person.hobby}</h4>
            <button className='btn' onClick={displayPerson}>Show John</button>
        </>
    )
}

export default useStateObject