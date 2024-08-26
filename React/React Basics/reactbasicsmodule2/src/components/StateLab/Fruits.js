import React from "react";

export default function Fruits(props) {
  return (
    <div className="border-2 border-purple-700 font-bold p-1 m-1 ">
      {props.fruits.map((f) => (
        <p key={f.id}>{f.fruitName}</p>
      ))}
    </div>
  );
}
