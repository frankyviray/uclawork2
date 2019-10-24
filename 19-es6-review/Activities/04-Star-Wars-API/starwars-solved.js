const axios = require("axios");

// we'll be using the star wars api at https://swapi.co/, which requires us to know the id of each character ahead of time.
const characters = [
  {name: "Luke", id: 1}, 
  {name: "Leia", id: 5}, 
  {name: "Obi-Wan", id: 10}
];

// use "let" here to retain the scope of i inside the second axios request
for (let i = 0; i < characters.length; i++) {
  // we can use that id, though, to get more information about them
  axios.get(`https://swapi.co/api/people/${characters[i].id}`).then(function(res) {
    // character data
    console.log(`${res.data.name} has ${res.data.hair_color} hair.`);

    // follow-up request for home name
    axios.get(res.data.homeworld).then(function(res) {
      // add to original object
      characters[i].homeworld = res.data.name;
      console.log(characters[i]);
    });
  });
}