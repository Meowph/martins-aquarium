const database = {
  fish: [
      {
          name: "Marlon", //Clown Fish
          size: 4.3,
          food: "Crustaceans",
          "scientific name": "Amphiprion Ocellaris",
          "pairs or alone": "Pairs" 
      },
      {
        name: "Benny", //Lawnmower Blenny
        size: 5,
        food: "Algea",
        "scientific name": "Salarias fasciatus",
        "pairs or alone": "Pairs" 
    },
    {
      name: "Mark", //Six Line Wrasse
      size: 4,
      food: "Anything that fits in its mouth",
      "scientific name": "Pseudocheilinus hexataenia",
      "pairs or alone": "alone" 
  },
  {
    name: "Francheska", //Firefish Goby
    size: 3,
    food: "Plankton",
    "scientific name": "Nemateleotris magnifica",
    "pairs or alone": "Either or" 
},
{
  name: "Sunny", //Yellow Watchman Goby
  size: 4,
  food: "Algea",
  "scientific name": "Cryptocentrus cinctus",
  "pairs or alone": "Either or" 
},
{
  name: "Sam", //Blue Green Chromis
  size: 4,
  "scientific name": "Chromis viridis",
  "pairs or alone": "Pairs" 
},
  ]
}

export const getFish = () => {
  return database.fish.map(fish => ({...fish}))
}