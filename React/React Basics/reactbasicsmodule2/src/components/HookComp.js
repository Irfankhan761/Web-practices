import { useState } from "react";

export default function HookComp(props) {
  const [text, setText] = useState("hello");
  const handleReset = () => {
    setText("hi");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="flex flex-col w-2/4 m-auto mt-2 p-2 border-emerald-500 border-4 bg-white">
      <span className=" p-1 m-1 w-full">Type text here</span>
      <input
        className="border-black border-2 p-1 m-1 w-full"
        placeholder="Enter ...."
        type="text"
        value={text}
        onChange={handleChange}
      />
      <span className=" p-1 m-1 w-full">Updated text will be shown here</span>
      <p className="border-black border-2 p-1 m-1 w-full"> {text}</p>
      <button
        className="border-black border-2 p-1 m-1 w-full btn-primary"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
