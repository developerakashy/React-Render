import React from "react";

export function ChildThree({children, name}){

    console.log('Child Rendered')

    return(
        <div>
            {children}, {name}
        </div>
    )
}


export const MemoizedChildThree = React.memo(ChildThree)
