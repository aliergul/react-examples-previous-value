import { useState } from "react";
import "./App.css";
import Dollar from "./Dollar";

function App() {
  const [amount, setAmount] = useState(35.27);

  return (
    <>
      <Dollar amount={amount} />

      <button onClick={() => setAmount(amount + Math.random() * 2)}>
        Increase
      </button>
      <button onClick={() => setAmount(amount - Math.random() * 2)}>
        Decrease
      </button>
    </>
  );
}

export default App;
