import { useRef, useState } from "react";
import video1 from "./assets/videos/video3.mp4";
import video2 from "./assets/videos/video2.mp4";
import video3 from "./assets/videos/video1.mp4";
import video4 from "./assets/videos/video4.mp4";
import video5 from "./assets/videos/video5.mp4";

import img1 from "./assets/Images/image1.jpg";
import img2 from "./assets/Images/image2.jpg";
import img3 from "./assets/Images/image3.jpg";
import img4 from "./assets/Images/image7.jpg";
import img5 from "./assets/Images/image6.jfif";
import img6 from "./assets/Images/image8.jpg";
import img7 from "./assets/Images/image9.jpg";

import song from "./assets/songs/Chasing - NEFFEX.mp3";
import song1 from "./assets/songs/Catch Me If I Fall - NEFFEX.mp3";
import song2 from "./assets/songs/Inspired (Clean) - NEFFEX.mp3";
import song3 from "./assets/songs/apna bana le.webm";
import song4 from "./assets/songs/Satranga - Animal.mp3";
import song5 from "./assets/songs/Kashmir - Animal.mp3";
import song6 from "./assets/songs/ishq.mp3";

const App = () => {
  const [currentMusicDetails, setcurrentMusicDetails] = useState({
    songName: "Satranga (Animal)",
    songArtist: "Arijit Singh",
    songSrc: song4,
    songAvatar: img5,
  });

  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setisAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicLength, setMusicLength] = useState(`04 : 30`);
  const [musicCurrentTime, setMusicCurrentTime] = useState(`00 : 00`);
  const [videoIndex, setVideoIndex] = useState(0);

  const currentAudio = useRef();
  const handleMusicProgressbar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  //play audio function
  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setisAudioPlaying(true);
      console.log("Audio playing"); // Debugging message
    } else {
      currentAudio.current.pause();
      setisAudioPlaying(false);
      console.log("Audio paused"); // Debugging message
    }
  };

  const MusicApi = [
    {
      songName: "Chasing",
      songArtist: "NEFFEX",
      songSrc: song,
      songAvatar: img1,
    },
    {
      songName: "Catch me if i fall",
      songArtist: "NEFFEX",
      songSrc: song1,
      songAvatar: img2,
    },
    {
      songName: "Apna Bana Le from Bhediya",
      songArtist: "Arijit Singh",
      songSrc: song3,
      songAvatar: img4,
    },
    {
      songName: "Inspired (clean)",
      songArtist: "NEFFEX",
      songSrc: song2,
      songAvatar: img3,
    },
    {
      songName: "Satranga (Animal)",
      songArtist: "Arijit Singh",
      songSrc: song4,
      songAvatar: img5,
    },
    {
      songName: "Kashmir (Animal)",
      songArtist: "Arijit Singh",
      songSrc: song5,
      songAvatar: img6,
    },
    {
      songName: "Ishq",
      songArtist: "Faheem Abdullah",
      songSrc: song6,
      songAvatar: img7,
    },
  ];

  const vidArray = [video1, video2, video3, video4, video5];

  const handlePreviousSong = () => {
    if (musicIndex === 0) {
      let setNumber = MusicApi.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const handleNextSong = () => {
    if (musicIndex >= MusicApi.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const updateCurrentMusicDetails = (number) => {
    let musicObject = MusicApi[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();

    setcurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar,
    });

    setisAudioPlaying(true);
  };

  // const avatarClass = ["objectFitCover", "objectFitContain"];
  // const [avatarClassIndex, setAvatarClassIndex] = useState(0);
  // const handleAvatar = () => {
  //   if (avatarClassIndex >= avatarClass.length - 1) {
  //     setAvatarClassIndex(0);
  //   } else {
  //     setAvatarClassIndex(setAvatarClassIndex.length + 1);
  //   }
  //   console.log(avatarClassIndex)
  // };

  const handleAudioUpdate = () => {
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength = `${minutes < 10 ? `0${minutes}` : minutes} :${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicLength(musicTotalLength);

    //input music current time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} :${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const handleChangeButton = () => {
    if (videoIndex >= vidArray.length - 1) {
      setVideoIndex(0);
    } else {
      setVideoIndex(videoIndex + 1);
    }
  };
  return (
    <div className="container">
      <audio
        src={song4}
        ref={currentAudio}
        onEnded={handleNextSong}
        onTimeUpdate={handleAudioUpdate}
      ></audio>
      <video
        src={vidArray[videoIndex]}
        autoPlay
        muted
        loop
        className="backgroundVideo"
      ></video>
      <div className="blackScreen"></div>
      <div className="music-container">
        <p className="musicPlayer">Music Player </p>
        <p className="music-Head-Name">{currentMusicDetails.songName}</p>
        <p className="music-Artist-Name">{currentMusicDetails.songArtist}</p>
        <img
          src={currentMusicDetails.songAvatar}
          alt="Song Avatar"
          // onClick={handleAvatar}
          // className={avatarClass[avatarClassIndex]}
          id="songAvatar"
        />
        <div className="musicTimerDiv">
          <p className="musicCurrentTime">{musicCurrentTime}</p>
          <p className="musicTotalLength">{musicLength}</p>
        </div>
        <input
          type="range"
          name="musicProgressBar"
          className="musicProgressBar"
          value={audioProgress}
          onChange={handleMusicProgressbar}
        />
        <div className="musicController">
          <i className="fa-solid fa-backward " onClick={handlePreviousSong}></i>
          <i
            className={`fa-solid ${
              isAudioPlaying ? "fa-pause-circle" : "fa-circle-play"
            } playBtn`}
            onClick={handleAudioPlay}
          ></i>

          <i className="fa-solid fa-forward " onClick={handleNextSong}></i>
        </div>
      </div>
      <div className="changeBackBtn" onClick={handleChangeButton}>
        change backrgound
      </div>
    </div>
  );
};

export default App;
