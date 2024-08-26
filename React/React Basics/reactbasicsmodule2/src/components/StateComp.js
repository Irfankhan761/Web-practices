import React from "react";

export default function StateComp() {
  const [name, setName] = React.useState({
    firstName: "Irfan",
    lastName: "Khan",
  });
  const [part, setPart] = React.useState({
    first: "First",
    last: "Last",
  });
  //   setName((item) => ({}));
  //   const [word, setWord] = React.useState("Khan");
  const handleClick = () => {
    setName((pName) => ({
      firstName: pName.lastName,
      lastName: pName.firstName,
    }));
    setPart((pPart) => ({
      first: pPart.last,
      last: pPart.first,
    }));
  };

  return (
    <div className="flex flex-col w-2/4 m-auto mt-2 p-2 border-emerald-500 border-4 bg-white">
      <p className="border-black border-2 p-1 m-1 w-full">
        My {part.first} name is {name.firstName}.
      </p>
      <button className="btn-primary mt-1 w-full" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}
