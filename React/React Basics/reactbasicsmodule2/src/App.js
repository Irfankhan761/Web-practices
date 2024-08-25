import "./App.css";
import EventsAndTypes from "./components/EventsAndTypes";
import EventHandlingAndEmbeddedExpressions from "./components/EventHandlingAndEmbeddedExpressions";
function App() {
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
        Types of Events
      </h1>
    </div>
  );
}

export default App;
