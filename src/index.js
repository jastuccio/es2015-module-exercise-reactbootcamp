import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
          <p>I’d like one RANDOMFRUIT, please.<\p>
          <p>Here you go: RANDOMFRUIT”<\p>
          <p>Delicious! May I have another?</p>
          <p>I’m sorry, we’re all out. We have FRUITSLEFT left<\p>
      </>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById("root"));

//This file should import the fruits and both array helpers. It should then:

/*
        1. Randomly draw a fruit from the array
        2. Log messages
        3. Remove the fruit from the array of fruits
        4. Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”

Testing This

Run this with npm start and you should see something like this in your browser console:

I'd like one 🍉, please

Here you go: 🍉

Delicious! May I have another?

I'm sorry, we're all out. We have 14 left.

*/
