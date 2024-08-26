import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";

export default function RemainingMeals() {
  const { count } = useContext(MealsContext);

  return (
    <div>
      <h1 className="border-black border-2 p-1 m-1 w-full">
        Meals remaining: {count}
      </h1>
    </div>
  );
}
