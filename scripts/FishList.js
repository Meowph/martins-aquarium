// Import the function that returns a copy of the fish array
import {getfish} from './database.js'

export const fishlist = () => {
    // Invoke the function that you imported from the database module
    const fishes = getfish()

    // Start building a string filled with HTML syntax
    const fishlistHTML = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        fishlistHTML += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__size">${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__food">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}