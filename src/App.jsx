import { useState } from "react"; // Import useState hook to manage state
import "./App.css"; // Import CSS for styling

function App() {
  // State to store the counter value
  const [counter, setCounter] = useState(0);

  // State to store how much to increment
  const [incrementby, setIncrementby] = useState("1");

  // State to store how much to decrement
  const [decrementby, setDecrementby] = useState("1");

  // Function to increment the counter
  const increment = () => {
    // Convert incrementby to integer and add to counter
    setCounter((prev) => prev + Math.floor(Number(incrementby) || 1));
  };

  // Function to decrement the counter
  const decrement = () => {
    // Convert decrementby to integer and subtract, ensure counter doesn't go below 0
    setCounter((prev) => Math.max(prev - Math.floor(Number(decrementby) || 1), 0));
  };

  // Function to reset everything
  const reset = () => {
    setCounter(0);       // Reset counter
    setIncrementby("1"); // Reset increment value
    setDecrementby("1"); // Reset decrement value
  };

  return (
    <div className="AppComponent">
      {/* Display the current counter value */}
      <div className="count">{counter}</div>

      {/* Input section */}
      <div className="input-group">
        {/* Label and input for increment value */}
        <label>Increment by:</label>
        <input
          type="number"             // Accept numbers only
          value={incrementby}       // Controlled input bound to state
          onChange={(e) => setIncrementby(e.target.value)} // Update state on change
          min="1"                   // Minimum value allowed
          step="1"                  // Step for up/down arrows
        />

        {/* Label and input for decrement value */}
        <label>Decrement by:</label>
        <input
          type="number"             // Accept numbers only
          value={decrementby}       // Controlled input bound to state
          onChange={(e) => setDecrementby(e.target.value)} // Update state on change
          min="1"                   // Minimum value allowed
          step="1"                  // Step for up/down arrows
        />
      </div>

      {/* Buttons section */}
      <div className="button-group">
        {/* Increment button */}
        <button className="increment-button" onClick={increment}>
          [+]
        </button>

        {/* Decrement button, disabled if counter is 0 */}
        <button className="decrement-button" onClick={decrement} disabled={counter === 0}>
          [-]
        </button>
      </div>

      {/* Reset button */}
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App; // Export the component



