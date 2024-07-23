import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFour } from "../Optimization/ChildFour";

export function ParentThree(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Developer')

    console.log("Parent Rendered")

    return(
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count: {count}</button>
            <button onClick={() => setName('Akash')}>Change name</button>

            <MemoizedChildFour name={name}/>
            {/* <MemoizedChildThree name={name}>
                <strong>Hello</strong>
            </MemoizedChildThree> */}
        </div>
    )
}
