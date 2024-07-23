import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export function ChildA(){
    console.log("ChildA rendered")
    return(
        <div>
            Child A
            <ChildB/>
        </div>
    )
}

export const MemoizedChildA = React.memo(ChildA)

export function ChildB(){
    console.log("ChildB rendered")
    return(
        <div>
            Child B
            <ChildC/>
        </div>
    )
}

export function ChildC(){
    const count = useContext(CountContext)
    console.log("ChildC rendered")

    return(
        <div>
            Child C - {count}
        </div>
    )
}
