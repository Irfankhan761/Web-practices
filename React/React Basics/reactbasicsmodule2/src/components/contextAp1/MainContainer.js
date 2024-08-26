import React from "react";
import Item from "./Item";
import RemainingMeals from "./RemainingMeals";

export default function MainContainer() {
  return (
    <div className="flex flex-col w-2/4 m-auto mt-2 p-2 border-emerald-500 border-4 bg-white">
      <Item meal="Baked Beans" calories={200} />
      <Item meal="Grilled Veggies" calories={80} />
      <Item meal="Soup" calories={100} />
      <RemainingMeals />
    </div>
  );
}
