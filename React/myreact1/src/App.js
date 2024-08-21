import "./App.css";
var Heading = function () {
  return <h1>Hello World</h1>;
};
function Heading2() {
  return <h2>Hello World</h2>;
}
const Heading3 = () => <h3>hello</h3>;
const Heading4 = () => {
  return <h4>Hello</h4>;
};
function App() {
  return (
    <div>
      <Heading />
      <Heading2 />
      <Heading3 />
      <Heading4 />
    </div>
  );
}

export default App;
