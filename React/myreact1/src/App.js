import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Heading from "./components/Heading";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Foot from "./components/Footer";
import Bag from "./components/Bag";
import Apples from "./components/Apples";
import Pears from "./components/Pears";
import Formatedname from "./components/Formatedname";
import Ternary from "./components/Ternary";
import ExpressionsAndProps from "./components/ExpressionsAndProps";
import car from "./assets/car.png";
import { Logo, CurrentLogo } from "./components/Logo";
import NewPage from "./pages/newPage";

function Heading2() {
  return <h2 className="text-blue-600">This is Heading 2</h2>;
}

const Heading3 = () => <h3>hello</h3>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to render the full App UI */}
        <Route
          path="/"
          element={
            <div>
              <div className="flex justify-center bg-gray-800">
                <h1 className="text-4xl font-bold text-blue-600 ">Welcome</h1>
              </div>
              <h1 className="flex justify-center text-4xl font-bold text-orange-700">
                1. props or properties
              </h1>
              <Heading2 />
              <Heading3 />
              <Heading myprop="Hello" name="Bob" />
              <Heading myprop="Hello" name="Irfan" />
              <h1 className="flex justify-center text-4xl font-bold text-orange-700">
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
              <h1 className="flex justify-center text-4xl font-bold text-orange-700">
                3. Styling Methods
              </h1>
              <Promo />
              <h1 className="flex justify-center text-4xl font-bold text-orange-700">
                4. Embedded JSX expressions
              </h1>
              <Formatedname first="Irfan" second="Khan" />
              <Formatedname first="khan" second="Irfan" />
              <h1 className="flex justify-center text-4xl font-bold text-orange-700">
                5. Ternary operators and functions in JSX
              </h1>
              <Ternary name="Irfan" />
              <Ternary name="khanrfan" />
              <h1 className="flex justify-center text-4xl font-bold text-orange-700">
                6. Expression and Props
              </h1>
              <ExpressionsAndProps toggleBoolean={false} />
              <h1 className="flex justify-center text-4xl font-bold text-orange-700">
                7. Embedding in attributes (Logo)
              </h1>
              <p>Image passed from App.js through props</p>
              <Logo car={car} />
              <p>
                Image passed directly render in Logo components without props
              </p>
              <CurrentLogo />

              <h1 className="flex justify-center text-4xl font-bold text-orange-700">
                8. Last Exercise Module1: MultipleComponents
              </h1>
              <Link
                className="text-1xl font-bold text-pink-700 hover:bg-pink-800 hover:text-white rounded-full border-2 border-rose-600"
                to="/NewPage"
                target="_blank"
              >
                Open MultipleComponents Click ME
              </Link>
              <Foot name="Irfan Khan" />
            </div>
          }
        />

        {/* Route to render only the MultipleComponents component */}
        <Route path="/NewPage" element={<NewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
