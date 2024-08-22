import "./App.css";
import Heading from "./components/Heading";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Foot from "./components/Footer";
function Heading2() {
  return <h2>This is Heading 2</h2>;
}
const Heading3 = () => <h3>hello</h3>;
const Heading4 = () => {
  return <h4>Hello</h4>;
};
function App() {
  return (
    <div>
      <Heading myprop="Hello" name="Bob" />
      <Heading myprop="Hello" name="Irfan" />
      <Heading2 />
      <Heading3 />
      <Heading4 />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Promo />
      <Foot name="Irfan Khan" />
    </div>
  );
}

export default App;
