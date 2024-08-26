import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "ride") return { money: state.money + 10 };
  //   if (action.type === "fuel") return { money: state.money - 50 };
  if (action.type === "fuel") return { money: Math.max(state.money - 50, 0) };

  return new Error();
};
const UseReducerComp = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const handleClick = (e) => {
  //     if (e.target.name === "ride") {
  //       dispatch({ type: "ride" });
  //     }
  //     if (e.target.name === "fuel") {
  //       dispatch({ type: "fuel" });
  //     }
  //   };
  const handleClick = (e) => {
    dispatch({ type: e.target.name });
  };
  return (
    <div className="mt-1 m-auto border-2 border-cyan-700 w-2/4">
      <h1 className="border-2 border-purple-700 font-bold p-1 m-1 ">
        {/* Wallet: {state.money > 0 ? state.money : (state.money = 0)} */}
        Wallet: {state.money}
      </h1>
      <button
        name="ride"
        className="btn-primary mt-1 w-full"
        onClick={handleClick}
      >
        A new customer!
      </button>
      <button
        name="fuel"
        className="btn-primary mt-1 w-full"
        onClick={handleClick}
      >
        Refill the tanks!
      </button>
    </div>
  );
};
export default UseReducerComp;
