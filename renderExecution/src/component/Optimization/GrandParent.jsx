import React, { useState } from "react";
import { ParentOne } from "./ParentOne";
import { ChildOne } from "./ChildOne";

export function GrandParent(){
    const [newCount, setNewCount] = useState(0)
    console.log("GrandParent Render")

    return(
        <div>
            <button onClick={() => setNewCount(prevCount => prevCount + 1)}>GrandParent count - {newCount}</button>
            <ParentOne>
                <ChildOne/>
            </ParentOne>
        </div>
    )
}
