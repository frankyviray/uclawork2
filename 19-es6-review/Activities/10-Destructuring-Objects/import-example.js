// the "import" keyword is another way we can destructure modules
import {spawn, exec, fork} from "child_process";

// ...unfortunately, we get an error when we try to run this command. while node supports many ES6 features out of the box, it still doesn't allow us to use import.