function Card(props) {
  return (
    <div className=" flex justify-center   border-2 bg-green-400  w-3/5 m-auto">
      <h2 className="text-4xl">
        {props.h2}
        <h3 className="text-2xl">{props.h3}</h3>
      </h2>
    </div>
  );
}
export default Card;
