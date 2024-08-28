import React from "react";
import song1 from "../Assets/song1.mp3";
import song2 from "../Assets/song2.mp3";

function LabMain() {
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  const localSong1 = new Audio(song1);
  const localSong2 = new Audio(song2);
  function toggleAudio(audio) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  return (
    <div className="flex flex-col items-center p-4 space-y-2">
      <button
        onClick={() => toggleAudio(bird1)}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Caspian Tern 1
      </button>
      <button
        onClick={() => toggleAudio(bird2)}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Caspian Tern 2
      </button>
      <button
        onClick={() => toggleAudio(localSong1)}
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
      >
        Song 1
      </button>
      <button
        onClick={() => toggleAudio(localSong2)}
        className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
      >
        Song 2
      </button>
    </div>
  );
}

export default LabMain;
