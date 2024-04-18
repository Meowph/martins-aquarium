// Import the function that returns a copy of the fish array
import {getfish} from '../database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    let allfishes = getfish()

    // Start building a string filled with HTML syntax
    let fishlistHTML = '<article class="fish-list">'

    // Create HTML representations of each fish here
    for (let fish of allfishes) {

        // Why is there a backtick used for this string?
        fishlistHTML += `<section class="fish">
        <div class="fish__name">${fish.name}</div>
        <div><img  class="fish__image" src="${fish.image}" /></div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.length}</div>
        <div class="fish__location">${fish.location}</div>
        <div class="fish__food">${fish.food}</div>
    </section>`
    }
    fishlistHTML += `</article>`;

    return fishlistHTML
}