import DF3 from "./DF3";

export default function DF2(props) {
  return (
    <span>
      My age is {props.age}.
      <DF3 education="BSE" Uni="Comsats" />
    </span>
  );
}
