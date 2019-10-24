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

class App extends React.Component {
  // es7 way of assigning state with no constructor
  state = {
    calls: calls
  };

  // custom method to remove an id from calls array
  kickCall = (id) => {
    let filteredCalls = this.state.calls.filter((call) => {
      // keep all calls that do not have this id
      return (call.id !== id);
    });

    // update state with newly filtered array
    this.setState({
      calls: filteredCalls
    });
  };

  render() {
    return (
      <div>
        {
          // convert the array of call data into an array of jsx elements
          this.state.calls.map((call) => {
            // insert our timer component inside each h2 tag
            return (
              <h2 key={call.id}>
                {call.name} on call for <Timer time={call.startTime} />
                {" "}
                <button onClick={() => this.kickCall(call.id)}>Kick</button>
              </h2>
            );
          })
        }
      </div>
    );
  }
}

export default App;
