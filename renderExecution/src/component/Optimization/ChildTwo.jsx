import React from "react";

export function ChildTwo({name}){

    console.log('Child Rendered')

    return(
        <div>
            Hello, {name}
        </div>
    )
}


export const MemoizedChildTwo = React.memo(ChildTwo)
