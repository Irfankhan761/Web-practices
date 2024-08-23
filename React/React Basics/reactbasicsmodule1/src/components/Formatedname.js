const name = (first, second) => {
  const fullName = first + second;

  return fullName;
};
const lucky = (name) => {
  const luckNumber = name.length;
  return luckNumber;
};
function Formatedname(props) {
  const styles = { color: "green" };
  const myName = name(props.first, props.second);
  const myLucky = lucky(myName);
  return (
    <h1 className="text-red-600 text-4xl">
      {myName} and my lucky number is <span style={styles}>{myLucky}</span>
    </h1>
  );
}

export default Formatedname;
