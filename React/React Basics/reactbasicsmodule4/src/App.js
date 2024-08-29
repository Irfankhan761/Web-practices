import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState(0);
  const inputRef = useRef(null);

  const add = (e) => {
    e.preventDefault();
    const value = parseInt(inputRef.current.value);
    if (!isNaN(value)) {
      setRes((prevRes) => prevRes + value);
    }
    inputRef.current.value = "";
  };

  const minus = (e) => {
    e.preventDefault();
    const value = parseInt(inputRef.current.value);
    if (!isNaN(value)) {
      setRes((prevRes) => prevRes - value);
    }
    inputRef.current.value = "";
  };

  const divide = (e) => {
    e.preventDefault();
    const value = parseInt(inputRef.current.value);
    if (!isNaN(value)) {
      setRes((prevRes) => prevRes / value);
    }
    inputRef.current.value = "";
  };

  const multiply = (e) => {
    e.preventDefault();
    const value = parseInt(inputRef.current.value);
    if (!isNaN(value)) {
      setRes((prevRes) => prevRes * value);
    }
    inputRef.current.value = "";
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  const resetResult = (e) => {
    e.preventDefault();
    setRes(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        Simplest Working Calculator
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-2xl text-gray-800 mb-4">{res}</p>
        <input
          className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="number"
          ref={inputRef}
        />
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={add}
            className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Add
          </button>
          <button
            onClick={minus}
            className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Subtract
          </button>
          <button
            onClick={multiply}
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Multiply
          </button>
          <button
            onClick={divide}
            className="bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
          >
            Divide
          </button>
          <button
            onClick={resetInput}
            className="col-span-2 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"
          >
            Reset Input
          </button>
          <button
            onClick={resetResult}
            className="col-span-2 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
          >
            Reset Result
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
