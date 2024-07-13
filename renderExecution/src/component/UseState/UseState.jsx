import React, { useState } from 'react'

export function UseState(){
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    const decrement = () => {
        setCount(prevState => prevState - 1)
    }

    const reset = () => {
        setCount(0)
    }

    console.log("UseState rendered")
    return(
        <div>
            <div>Count: {count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
