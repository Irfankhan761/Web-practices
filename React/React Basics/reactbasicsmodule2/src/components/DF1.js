import DF2 from "./DF2";

export default function DF1(props) {
  return (
    <div>
      {props.name} is my full name. <DF2 age={22} education="BSE" />
    </div>
  );
}
