import React, { useState } from "react";
import Item from "./Item";
import RemainingMeals from "./RemainingMeals";

export default function MainContainer() {
  const [count, setCount] = useState(3);
  const updateCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex flex-col w-2/4 m-auto mt-2 p-2 border-emerald-500 border-4 bg-white">
      <Item meal="Backed Beans" calories={200} onEat={updateCount} />
      <Item meal="Grilled Veggies" calories={80} onEat={updateCount} />
      <Item meal="soup" calories={100} onEat={updateCount} />
      <RemainingMeals count={count} />
    </div>
  );
}
