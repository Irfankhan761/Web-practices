import { useState } from "react";

export default function Item(props) {
  const [status, setStatus] = useState("Eat it");

  const handleClick = () => {
    if (status !== "Eaten!") {
      setStatus("Eaten!");
      props.onEat();
    }
  };
  return (
    <div>
      <h2 className="border-black border-2 p-1 m-1 w-full">
        {props.meal}, {props.calories} calories
      </h2>
      <button className="btn-primary mt-1 w-full" onClick={handleClick}>
        {status}
      </button>
    </div>
  );
}
