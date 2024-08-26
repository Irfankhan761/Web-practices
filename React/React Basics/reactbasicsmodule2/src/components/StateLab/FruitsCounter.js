function FruitsCounter(props) {
  return (
    <h2 className="border-2 border-purple-700 font-bold p-1 m-1 ">
      Total fruits: {props.fruits.length}
    </h2>
  );
}

export default FruitsCounter;
