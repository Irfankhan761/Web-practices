const welcome = (name) => {
  return <span>Welcome {name}</span>;
};

function Ternary(props) {
  var name = props.name;
  return (
    <div>
      <h1> {name === "Irfan" ? welcome(name) : <span>Invalid Entry</span>}</h1>
      <h2>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h2>
    </div>
  );
}

export default Ternary;
