import React from "react";
import Timer from "./components/Timer";

// fake call data that could have come from an API
// "startTime" is the timestamp of the call in unix milliseconds
const calls = [
  {
    id: 1,
    name: "Jan",
    startTime: new Date().getTime()
  },
  {
    id: 2,
    name: "Tom",
    startTime: new Date().getTime() - 500000
  },
  {
    id: 3,
    name: "Karen",
    startTime: new Date().getTime() - 600000
  }
];

const App = () => (
  <div>
    <h2>Jan on call for <Timer time={calls[0].startTime} /></h2>
    <h2>Tom on call for <Timer time={calls[1].startTime} /></h2>
    <h2>Karen on call for <Timer time={calls[2].startTime} /></h2>
  </div>
);

export default App;
