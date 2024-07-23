import React, { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

export function ParentTwo(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Developer')

    console.log("Parent Rendered")

    return(
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count: {count}</button>
            <button onClick={() => setName('Akash')}>Change name</button>

            <MemoizedChildTwo name={name}/>
        </div>
    )
}
