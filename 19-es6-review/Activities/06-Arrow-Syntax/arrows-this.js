var obj = {
  name: "Potato",
  type: "raw",
  mashIt: function() {
    // remember this problem? setTimeout creates a new context, so "this" no longer means what we think it means.
    setTimeout(function() {
      this.type = "mashed";
      console.log(this);
    }, 1000);

    // in the past, we solved this problem by saving the scope in a local variable beforehand. but an arrow function would also help us retain the scope of this.
  },
  mashItForReals: function() {
    setTimeout(() => {
      // thank you, arrow functions!
      this.type = "mashed";
      console.log(this);
    }, 1000);
  }
};

obj.mashIt();