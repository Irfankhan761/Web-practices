import ReactPlayer from "react-player";
import myVideo from "../Assets/my.mp4";

export default function VideoComp() {
  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <div className="w-full max-w-4xl">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=R0atymVckGo"
          playing={false}
          volume={0.5}
          controls={true}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full max-w-4xl">
        <ReactPlayer
          url={myVideo}
          playing={true}
          volume={0.5}
          controls={true}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
