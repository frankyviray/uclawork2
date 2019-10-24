const axios = require("axios");

var helper = {
  getData: function() {
    this.markCurrentTime();

    axios.get("https://randomuser.me/api/?results=30").then((res) => {
      // using the arrow syntax, we can preserve what "this" means
      this.markCurrentTime();

      // array methods can be chained together. first, we'll filter out all non-A names, then map the remaining user objects to a new array of strings. we're using simplified arrow syntax here. by omitting the { }, the return is implied.
      const users = res.data.results
        .filter(user => user.name.first.startsWith("a"))
        .map(user => `${user.name.first} ${user.name.last}`);

      console.log(users);
    });
  },
  markCurrentTime: function() {
    console.log("current time", new Date());
  }
};

helper.getData();