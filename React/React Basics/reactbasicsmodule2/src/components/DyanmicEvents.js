function DyanmicEvents() {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  };
  return (
    <button className="btn-primary mt-2" onClick={handleClick}>
      Guess the number between 1 and 3.
    </button>
  );
}
export default DyanmicEvents;
