import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    const RANDOMFRUIT = "<test> fruit";
    const FRUITSLEFT = "<test> left";
    return (
      <>
        <p>I’d like one {RANDOMFRUIT}, please.</p>
        <p>Here you go: {RANDOMFRUIT}</p>
        <p>Delicious! May I have another?</p>
        <p>I’m sorry, we’re all out. We have {FRUITSLEFT} left</p>
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
/*

//This file should import the fruits and both array helpers. It should then:


        Randomly draw a fruit from the array
        Log the message “I’d like one RANDOMFRUIT, please.”
        Log the message “Here you go: RANDOMFRUIT”
        Log the message “Delicious! May I have another?”
        Remove the fruit from the array of fruits
        Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”

Testing This

Run this with npm start and you should see something like this in your browser console:

I'd like one 🍉, please

Here you go: 🍉

Delicious! May I have another?

I'm sorry, we're all out. We have 14 left.

*/
