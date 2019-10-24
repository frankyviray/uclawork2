# Stateful Timer Component

Our App component is passing props to the Timer component, and the Timer component is using those props to set its initial state.

## Instructions

1. Rather than hard-coding three different Timer components in App.js, let's map over the calls array.

2. Currently, the Timer component doesn't actually do anything, so it's kind of pointless that we even set state for it. However, we could have the Timer component continually update the duration by one second every second. That way, we would get "real time" updates on how long the calls are. Where would be an appropriate place to do this logic?

3. In the Timer component, change the color of the span to red if the call duration is greater than 10 minutes.

## Bonus

* Add a "kick" button next to each call record in App.js that would remove the call from the calls array. Note that this will require turning the App component into its own stateful component.

* Look up `componentWillUnmount()` and think about why it would be helpful here.