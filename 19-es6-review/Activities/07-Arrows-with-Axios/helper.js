const axios = require("axios");

var helper = {
  getData: function() {
    this.markCurrentTime();

    axios.get("https://randomuser.me/api/?results=30").then(function(res) {
      // TODO: we want to call this function after the request is made, but we're currently getting an error. how can we fix this?
      this.markCurrentTime();

      // user data
      console.log(res.data.results);

      // TODO: use some of the array methods that we've learned to create a new array based off of res.data.results. first, filter down to only the names that start with an A, then map the remaining objects to be strings. we should end up with something that looks like this: ["adam bobadam", "amy bobamy"]
    });
  },
  markCurrentTime: function() {
    console.log("current time", new Date());
  }
};

helper.getData();