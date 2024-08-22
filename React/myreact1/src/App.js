import "./App.css";
import Heading from "./components/Heading";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Foot from "./components/Footer";
import Bag from "./components/Bag";
import Apples from "./components/Apples";
import Pears from "./components/Pears";
function Heading2() {
  return <h2 className=" text-blue-600">This is Heading 2</h2>;
}
const Heading3 = () => <h3>hello</h3>;

function App() {
  return (
    <div>
      <div className=" flex  justify-center bg-gray-800">
        <h1 className="text-4xl font-bold text-blue-600 ">
          Hello, Tailwind CSS!
        </h1>
      </div>

      <h1 className=" flex  justify-center text-4xl font-bold text-orange-700">
        1. props or properties
      </h1>
      <Heading2 />
      <Heading3 />
      <Heading myprop="Hello" name="Bob" />
      <Heading myprop="Hello" name="Irfan" />
      <h1 className=" flex  justify-center text-4xl font-bold text-orange-700">
        2. Props and children
      </h1>
      <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears friend="Peter" />} />

      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
      </Bag>

      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Promo />
      <Foot name="Irfan Khan" />
    </div>
  );
}

export default App;
