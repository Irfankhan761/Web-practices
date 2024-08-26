import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function MainLab() {
  const [fruits] = React.useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);
  return (
    <div className="mt-1 m-auto border-2 border-cyan-700 w-2/4">
      <h1 className="border-2 border-purple-700 font-bold p-1 m-1 ">
        Where should the state go?
      </h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default MainLab;
