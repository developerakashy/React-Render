import React from "react";

export function ChildFive({name}){
    console.log('Child Rendered')

    return(
        <div>
            Hello, {name}.
        </div>
    )
}


export const MemoizedChildFive = React.memo(ChildFive)
