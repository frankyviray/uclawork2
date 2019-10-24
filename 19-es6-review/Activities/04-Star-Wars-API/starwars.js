const axios = require("axios");

// we'll be using the star wars api at https://swapi.co/, which requires us to know the id of each character ahead of time.
const characters = [
  {name: "Luke", id: 1}, 
  {name: "Leia", id: 5}, 
  {name: "Obi-Wan", id: 10}
];

for (var i = 0; i < characters.length; i++) {
  // we can use that id, though, to get more information about them
  axios.get(`https://swapi.co/api/people/${characters[i].id}`).then(function(res) {
    // character data
    console.log(res.data);

    // TO DO: console.log some of the character's properties using a template literal.

    // TO DO: note the homeworld url in the response. we'll need to make a follow-up request to that url to get the actual name of this character's home. once you have the planet name, add it as a property to our original object. we should end up with this: {name: "Luke", id: 1, homeworld: "Tatooine"}.
  });
}