const database = {
  fish: [
      {
          name: "Marlon", //Clown Fish
          size: "4.3 in",
          food: "Crustaceans",
          species: "Clown Fish (Amphiprion ocellaris)",
          location: "Eastern Indian Ocean"

          
      },
      {
        name: "Benny", //Lawnmower Blenny
        size: "5 in",
        food: "Algea",
        species: "Lawnmower Blenny (Salarias fasciatus)",
        location: "Red Sea"
         
    },
    {
      name: "Mark", //Six Line Wrasse
      size: "4 in",
      food: "Anything that fits in its mouth",
      species: "Six Line Wrasse (Pseudocheilinus hexataenia)",
      location: "Coast of Fiji"
      
  },
  {
    name: "Francheska", //Firefish Goby
    size: "3 in",
    food: "Plankton",
    species: "Firefish Goby (Nemateleotris magnifica)",
    location: "Pacific Ocean"
    
},
{
  name: "Sunny", //Yellow Watchman Goby
  size: "4 in",
  food: "Algea",
  species: "Yellow Watchman Goby (Cryptocentrus cinctus)",
  location: "Coastal Bays of Haiti"
  
},
{
  name: "Sam", //Blue Green Chromis
  size: "4 in",
  food:"Plankton",
  species: "Blue Green Chromis (Chromis viridis)",
  location: "Tropical waters of the Pacific Ocean, East of Philippines, New Guinea and Eastern Australia"
  
},
  ]
}

export const getFish = () => {
  return database.fish.map(fish => ({...fish}))
}