const database = {
  fish: [
      {
          name: "Marlon", //Clown Fish
          size: 4.3,
          food: "Crustaceans",
          species: "Clown Fish (Amphiprion ocellaris)",
          location: "Eastern Indian Ocean and Western Pacific Ocean"

          
      },
      {
        name: "Benny", //Lawnmower Blenny
        size: 5,
        food: "Algea",
        species: "Lawnmower Blenny (Salarias fasciatus)",
        location: "Red Sea, Indian Ocean, and Pacific Ocean"
         
    },
    {
      name: "Mark", //Six Line Wrasse
      size: 4,
      food: "Anything that fits in its mouth",
      species: "Six Line Wrasse (Pseudocheilinus hexataenia)",
      location: "Coast of Fiji"
      
  },
  {
    name: "Francheska", //Firefish Goby
    size: 3,
    food: "Plankton",
    species: "Firefish Goby (Nemateleotris magnifica)",
    location: "Indian and Pacific Oceans"
    
},
{
  name: "Sunny", //Yellow Watchman Goby
  size: 4,
  food: "Algea",
  species: "Yellow Watchman Goby (Cryptocentrus cinctus)",
  location: "Coastal Bays and Lagoons in the Western Pacific"
  
},
{
  name: "Sam", //Blue Green Chromis
  size: 4,
  food:"Plankton",
  species: "Blue Green Chromis (Chromis viridis)",
  location: "Tropical waters of the Pacific Ocean, East of Philippines, New Guinea and Eastern Australia"
  
},
  ]
}

export const getFish = () => {
  return database.fish.map(fish => ({...fish}))
}