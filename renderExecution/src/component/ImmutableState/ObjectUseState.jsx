import React, { useState } from "react";

const initialState = {
    firstName: 'Akash',
    lastName: 'Yadav'
}

export function ObjectUseState(){
    const [person, setPerson] = useState(initialState)

    const ChangeName = () => {

        const newPerson = {
            ...person,
            firstName: 'Jon',
            lastName: 'Doe'
        }

        setPerson(newPerson)
    }

    return(
        <div>
            <button onClick={ChangeName}>{person.firstName} {person.lastName}</button>

        </div>
    )
}
