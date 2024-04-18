// Import the function that returns a copy of the fish array
import {getfish} from './database.js'

export const fishlist = () => {
    // Invoke the function that you imported from the database module
    const allfishes = getfish()

    // Start building a string filled with HTML syntax
    let fishlistHTML = '<div class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of allfishes) {

        // Why is there a backtick used for this string?
        fishlistHTML += `<div class="fish card">
             <div>
            <div><img src="${fish.image}" /></div>
            <ul>
                <h1>${fish.name}</h1>
                <li>${fish.size}</li>
                <li>${fish.food}</li>
                <li">${fish.species}</li>
                <li>${fish.location}</li>
            </ul>
            </div>
`
    }
    fishlistHTML += `</div>`

    return fishlistHTML
}