import React, { useState } from "react";

const initialState = ['Person1', 'Person2']

export function ArrayUseState(){

    const [persons, setPerson] = useState(initialState)

    const ChangeNameArray = () => {
        const newPerson = [...persons]

        newPerson.push('Person3')
        newPerson.push('Person4')

        setPerson(newPerson)
    }

    return(
        <div>
            <button onClick={ChangeNameArray}>Add new name</button>
            {persons.map(person => <h2 key={person}>{person}</h2>)}
        </div>
    )

}
