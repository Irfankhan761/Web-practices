import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Contact } from "./components/Contact";
import ProductivityApp from "./components/ProductivityApp";

import ConLogoutLogIn from "./components/subcomponents/ConLogoutLogIn";
import ImgCom from "./components/ImgCom";
import VideoComp from "./components/VideoComp";
import LabMain from "./components/LabMain";
function App() {
  return (
    <div>
      <div className="flex justify-center items-center bg-slate-700 text-pink-700 font-bold text-4xl  space-x-8 p-2 rounded-3xl shadow-lg w-5/5 mx-auto">
        <Link
          to="/"
          className="cursor-pointer border-2 border-pink-700 rounded-3xl px-6 py-2 hover:bg-pink-700 hover:text-slate-700 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/aboutme"
          className="cursor-pointer border-2 border-pink-700 rounded-3xl px-6 py-2 hover:bg-pink-700 hover:text-slate-700 transition duration-300"
        >
          About
        </Link>
        <Link
          to="/contactme"
          className="cursor-pointer border-2 border-pink-700 rounded-3xl px-6 py-2 hover:bg-pink-700 hover:text-slate-700 transition duration-300"
        >
          Contact
        </Link>
        <Link
          to="/ProductivityApp"
          className="cursor-pointer border-2 border-pink-700 rounded-3xl px-6 py-2 hover:bg-pink-700 hover:text-slate-700 transition duration-300"
        >
          Productivity
        </Link>
        <Link
          to="/img"
          className="cursor-pointer border-2 border-pink-700 rounded-3xl px-6 py-2 hover:bg-pink-700 hover:text-slate-700 transition duration-300"
        >
          Img
        </Link>
        <Link
          to="/video"
          className="cursor-pointer border-2 border-pink-700 rounded-3xl px-6 py-2 hover:bg-pink-700 hover:text-slate-700 transition duration-300"
        >
          Video
        </Link>
        <Link
          to="/lab"
          className="cursor-pointer border-2 border-pink-700 rounded-3xl px-6 py-2 hover:bg-pink-700 hover:text-slate-700 transition duration-300"
        >
          Lab
        </Link>
        <Link
          to="/logincont"
          className="cursor-pointer border-2 border-pink-700 rounded-3xl px-6 py-2 hover:bg-pink-700 hover:text-slate-700 transition duration-300"
        >
          Login
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route
          path="/contactme"
          element={
            <Contact className="font-bold text-purple-900" name="Irfan Khan" />
          }
        />
        <Route path="/ProductivityApp" element={<ProductivityApp />} />
        <Route path="/logincont" element={<ConLogoutLogIn isLogin={false} />} />
        <Route path="/img" element={<ImgCom />} />
        <Route path="/video" element={<VideoComp />} />
        <Route path="/lab" element={<LabMain />} />
      </Routes>
    </div>
  );
}

export default App;
