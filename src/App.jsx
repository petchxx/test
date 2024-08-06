import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <div
        onClick={() => {
          increment();
        }}
      >
        Hello World {count}
      </div>
    </>
  );
}

export default App;
