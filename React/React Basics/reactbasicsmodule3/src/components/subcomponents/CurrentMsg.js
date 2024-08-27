import Weekend from "./Weekend";
import Work from "./Work";

export default function CurrentMsg(props) {
  const bool = props.day > 6 || props.day < 0;
  return (
    <div className="m-1 font-bold">
      <span>{props.day}</span>
      {bool ? (
        <h1>Wrong Day, not available</h1>
      ) : props.day > 0 && props.day <= 5 ? (
        <Work msg="Get it done" />
      ) : (
        <Weekend msg="Get some rest" />
      )}
    </div>
  );
}
