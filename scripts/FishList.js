// Import the function that returns a copy of the fish array
import {getfish} from './database.js'

export const fishlist = () => {
    // Invoke the function that you imported from the database module
    let allfishes = getfish()

    // Start building a string filled with HTML syntax
    let fishlistHTML = '<div class="fish-list">'

    // Create HTML representations of each fish here
    for (let fish of allfishes) {

        // Why is there a backtick used for this string?
        fishlistHTML += `<div>
         <ul  class="fish-list">
            <h1>Name: ${fish.name}</h1>
            <li> Size: ${fish.size}</li>
            <li>Food: ${fish.food}</li>
            <li>Species: ${fish.species}</li>
            <li>Location:${fish.location}</li>
        </ul>
            </div>`
    }
    fishlistHTML += `</div>`

    return fishlistHTML
}