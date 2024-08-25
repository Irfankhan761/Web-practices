function EventHandlingAndEmbeddedExpressions() {
  const thirdexample = function () {
    window.alert("3rd example");
    console.log("3rd example");
  };
  const fourthexample = () => {
    window.alert("4rth example");
    console.log("4rth example");
  };
  return (
    <div className="mt-5  flex justify-center ">
      <button
        className="btn-primary mr-1"
        onClick={function () {
          window.alert("1st example");
          console.log("1st example");
        }}
      >
        With an inline anonymous ES5 function
      </button>
      <button
        className="btn-primary mr-1"
        onClick={() => window.alert("2nd example")}
      >
        With an inline, anonymous ES6 function (an arrow function)
      </button>
      <button className="btn-primary mr-1" onClick={thirdexample}>
        Using a separate function declaration
      </button>
      <button className="btn-primary mr-1" onClick={fourthexample}>
        Using a separate function expression
      </button>
    </div>
  );
}

export default EventHandlingAndEmbeddedExpressions;
