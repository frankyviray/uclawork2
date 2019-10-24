# Transpile the Front End

In this activity, we already have a working front-end. However, the JS code was written using some ES6 features that aren't supported in all browsers. If you open `index.html` in Internet Explorer, for example, the app doesn't even run. We need to use babel to transpile the code.

## Instructions

* Create a `package.json` file.
* Look at the previous activity for a reminder of what npm packages you need to install.
* Add a custom script to `package.json` that will transpile/build the code.
* Update `index.html` to point to the new, transpiled JS file.