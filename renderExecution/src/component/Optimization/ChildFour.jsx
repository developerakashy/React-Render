import React from "react";

export function ChildFour({name}){
    const date = new Date()
    console.log('Child Rendered')

    return(
        <div>
            Hello, {name}. It's currently {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </div>
    )
}


export const MemoizedChildFour = React.memo(ChildFour)
