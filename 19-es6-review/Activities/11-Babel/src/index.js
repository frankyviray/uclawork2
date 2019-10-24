// with ES6, we'll "import" all of the exported properties from the class.js file and store them in separate variables.
import {cat, dog} from "./class.js";

// and then we can run these variables as functions, because that's technically what they are.
cat();
dog();

// however, running this file as is will result in an error, because node doesn't support "import." we will have to use babel to transpile the code into something node can understand.

// in the package.json file, however, we've added a custom script that will transpile code for us. we just need to run "npm run build" from the command line. after you run the command, look in the dist/ folder.