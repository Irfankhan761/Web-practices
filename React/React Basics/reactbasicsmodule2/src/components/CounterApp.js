import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="mt-1 m-auto border-2 border-cyan-700 w-2/4">
      <h1 className="border-2 border-purple-700 font-bold p-1 m-1 ">{count}</h1>
      <button className="btn-primary mt-1 w-full" onClick={handleCount}>
        CLick
      </button>
      <button className="btn-primary mt-1 w-full" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
