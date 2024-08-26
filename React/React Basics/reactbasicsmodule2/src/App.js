import "./App.css";
import EventsAndTypes from "./components/EventsAndTypes";
import EventHandlingAndEmbeddedExpressions from "./components/EventHandlingAndEmbeddedExpressions";
import UserEvent from "./components/UserEvent";
import DyanmicEvents from "./components/DyanmicEvents";
import ParentsChildDataFlow from "./components/ParentsChildDataFlow";
import DfInReact from "./components/DfInReact";
import DateComp from "./components/DateComp";
import HookComp from "./components/HookComp";
import Counter from "./components/CounterApp";
import RegisterForm from "./components/Form";
import TextInputWithFocusButton from "./components/HookUseRef";
import StateComp from "./components/StateComp";
import ManagingState from "./components/SmallAppManaginState/Page";
import ManagingState2 from "./components/contextAp1/ManagingState";
import UseReducerComp from "./components/UseReducerHook/UseReducerComp";
import MainLab from "./components/StateLab/MainLab";

function App() {
  const date = new Date();
  return (
    <div className="App ">
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        Types of Events
      </h1>
      <EventsAndTypes />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        Event handling and embedded expressions
      </h1>
      <EventHandlingAndEmbeddedExpressions />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        User Event
      </h1>
      <UserEvent />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        Dynamic Events
      </h1>
      <DyanmicEvents />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        Parent-Child Data Flow
      </h1>
      <ParentsChildDataFlow />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        Data Flow In React
      </h1>
      <DfInReact />

      <span className="text-red-500">
        Date: <DateComp date={date.toLocaleDateString()} />
        Time: <DateComp date={date.toLocaleTimeString()} />
      </span>
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        Using Hooks
      </h1>
      <HookComp />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        Counter APP
      </h1>
      <Counter />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        Registration Form
      </h1>
      <RegisterForm />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        useRef
      </h1>
      <TextInputWithFocusButton />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        State- React.useState
      </h1>
      <StateComp />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        Managing State Small App
      </h1>
      <ManagingState />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        Managing State using Context Api
      </h1>
      <ManagingState2 />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        useReducer hook
      </h1>
      <UseReducerComp />
      <h1 className="bg-purple-700 text-4xl text-orange-600 font-bold mt-2 border-rose-700 rounded-t-full border-x-8 border-solid text-center h-12 shadow-lg shadow-neutral-400 ">
        Managing State Lab Task
      </h1>
      <MainLab />
    </div>
  );
}

export default App;
