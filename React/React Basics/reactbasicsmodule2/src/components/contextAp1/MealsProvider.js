import React, { createContext, useState } from "react";

// Create a Context for the meals
export const MealsContext = createContext();

export default function MealsProvider({ children }) {
  const [count, setCount] = useState(3);

  const handleUpdateCount = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <MealsContext.Provider value={{ count, handleUpdateCount }}>
      {children}
    </MealsContext.Provider>
  );
}
