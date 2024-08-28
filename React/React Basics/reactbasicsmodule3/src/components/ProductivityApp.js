import { useState } from "react";
import CurrentMsg from "./subcomponents/CurrentMsg";

export default function ProductivityApp() {
  const [day, setDay] = useState(0);
  const handleChange = (e) => setDay(e.target.value);
  return (
    <div className="mt-2 border-2 w-2/4 m-auto  border-purple-700">
      <span className="m-1 font-bold text-green-600">0-sunday</span>
      <span className="m-1 font-bold text-red-600">1-Monday</span>
      <span className="m-1 font-bold text-red-600">2-Tuesday</span>
      <span className="m-1 font-bold text-red-600">3-Wednesday</span>
      <span className="m-1 font-bold text-red-600">4-Thursday</span>
      <span className="m-1 font-bold text-red-600">5-Friday</span>
      <span className="m-1 font-bold text-green-600">6-Saturday</span>
      <input
        min="0"
        max={6}
        className="border-2 border-black m-1 w-1/4"
        onChange={handleChange}
        value={day}
        type="number"
        placeholder="Enter Day 0-6"
      />
      <CurrentMsg day={day} />
    </div>
  );
}
