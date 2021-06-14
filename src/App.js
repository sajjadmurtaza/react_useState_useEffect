import "./styles.css";
import React, { useEffect, useState } from "react";

import TestComponent from "./TestComponent";

export default function App() {
  const [count, setCount] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  const hanldeScroll = () => {
    setCount(count + screenY);
  };

  useEffect(() => {
    window.addEventListener("scroll", hanldeScroll);

    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  });

  return (
    <div className="App">
      {count}

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <hr />

      <button onClick={() => setShowComponent(!showComponent)}>
        Hide/Show Test COmponent
      </button>

      {showComponent && <TestComponent />}
    </div>
  );
}
