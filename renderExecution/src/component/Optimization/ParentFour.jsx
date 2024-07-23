import React, { useState,useMemo, useCallback  } from "react";
import { MemoizedChildFive } from "./ChildFive";


export function ParentFour(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Developer')

    const person = {
        fname: 'Akash',
        lname: 'Yadav'
    }
    const memoizedPerson = useMemo(() => person, [])

    const handleClick = () => {}

    const memoizedHandleClick = useCallback(handleClick, [])

    console.log("Parent Rendered")

    return(
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count: {count}</button>
            <button onClick={() => setName('Akash')}>Change name</button>

            {/* <MemoizedChildFive name={name} person={memoizedPerson}/> */}
            <MemoizedChildFive name={name} handleClick={memoizedHandleClick}/>
        </div>
    )
}
