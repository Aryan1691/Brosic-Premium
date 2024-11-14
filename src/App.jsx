import React, { useState } from "react";
import video1 from './assets/videos/video1.mp4'
import img1 from './assets/Images/image1.jpg'

const App = () => {
  const [audioProgress, setAudioProgress] = useState(60);
  const handleMusicProgressbar = (e) => {
    setAudioProgress(e.target.value);
  };
  return (
    <div className="container">
      <video src={video1} autoPlay muted loop></video>
      <div className="blackScreen"></div>
      <div className="music-container">
        <p className="musicPlayer">Music Player </p>
        <p className="Music-Head-Name">Chasing</p>
        <p className="music-Artist-Name">NEFFEX</p>
        <img
          src={img1}
          alt="Song Avatar"
          id="songAvatar"
        />
        <div className="musicTimerDiv">
          <p className="musicCurrentTime">00:00</p>
          <p className="musicTotalLength">03:49</p>
        </div>
        <input
          type="range"
          name="musicProgressBar"
          value={audioProgress}
          onChange={handleMusicProgressbar}
        />
        <div className="musicController">
          <i className="fa-solid fa-backward"></i>
          <i className="fa-solid fa-circle-play"></i>
          <i className="fa-solid fa-forward"></i>


        </div>
      </div>
    </div>
  );
};

export default App;
