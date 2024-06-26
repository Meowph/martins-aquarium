import { getFish } from "./database.js"

const allFish = getFish()


for (const fish of allFish) {
    console.log(fish)
}
// Import the FishList function from the correct module
import {fishlist} from './scripts/fishList.js'

    /*What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".container")


parentHTMLElement.innerHTML = fishlist()

//Note: The imported function is wrapped in curly braces. This is needed for anything that is exported from a module that isn't the default export.