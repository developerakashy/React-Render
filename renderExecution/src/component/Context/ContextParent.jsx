import React, { useState } from "react";
import { MemoizedChildA } from "./ContextChild";

export const CountContext = React.createContext()

const ContextProvider = CountContext.Provider

export function ContextParent(){
    const [count, setCount] = useState(0)

    return(
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count: {count}</button>
            <ContextProvider value={count}>
                <MemoizedChildA/>
            </ContextProvider>
        </div>
    )
}
