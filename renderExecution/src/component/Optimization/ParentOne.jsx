import React, { useState } from "react";

export function ParentOne({children}){
    const [count, setCount] = useState(0)

    console.log("Parent Rendered")

    return(
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count: {count}</button>
            {children}
        </div>
    )
}
