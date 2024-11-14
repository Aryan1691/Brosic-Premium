import { useRef, useState } from "react";
import video1 from "./assets/videos/video1.mp4";
import img1 from "./assets/Images/image1.jpg";
import img2 from "./assets/Images/image2.jpg";
import img3 from "./assets/Images/image3.jpg";

import song from "./assets/songs/Chasing - NEFFEX.mp3";

const App = () => {
  const [currentMusicDetails, setcurrentMusicDetails] = useState({
    songName: "Chasing",
    songArtist: "NEFFEX",
    songSrc: "./assets/songs/Chasing - NEFFEX.mp3",
    songAvatar: {img1},
  });

  const [audioProgress, setAudioProgress] = useState(60);
  const [isAudioPlaying, setisAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);

  const currentAudio = useRef();
  const handleMusicProgressbar = (e) => {
    setAudioProgress(e.target.value);
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
      songSrc: "./assets/songs/Chasing - NEFFEX.mp3",
      songAvatar: { img1 },
    },
    {
      songName: "Catch me if i fall",
      songArtist: "NEFFEX",
      songSrc: "./assets/songs/Catch Me If I Fall - NEFFEX.mp3",
      songAvatar: { img2 },
    },
    // {
    //   songName: "Apna Bana Le from Bhediya",
    //   songArtist: "Arijit Singh",
    //   songSrc: "./assets/songs/apna bana le.webm",
    //   songAvatar: "./assets/Images/image7.jpg",
    // },
    {
      songName: "Inspired (clean)",
      songArtist: "NEFFEX",
      songSrc: "./assets/songs/Inspired (Clean) - NEFFEX.mp3",
      songAvatar: { img3 },
    },
  ];

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
  return (
    <div className="container">
      <audio src={song} ref={currentAudio}></audio>
      <video
        src={video1}
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
          src={img1}
          alt="Song Avatar"
          // onClick={handleAvatar}
          // className={avatarClass[avatarClassIndex]}
          id="songAvatar"
        />
        <div className="musicTimerDiv">
          <p className="musicCurrentTime">00:00</p>
          <p className="musicTotalLength">03:49</p>
        </div>
        <input
          type="range"
          name="musicProgressBar"
          className="musicProgressBar"
          value={audioProgress}
          onChange={handleMusicProgressbar}
        />
        <div className="musicController">
          <i className="fa-solid fa-backward "></i>
          <i
            className={`fa-solid ${
              isAudioPlaying ? "fa-pause-circle" : "fa-circle-play"
            } playBtn`}
            onClick={handleAudioPlay}
          ></i>

          <i className="fa-solid fa-forward " onClick={handleNextSong}></i>
        </div>
      </div>
      <div className="changeBackBtn">change backrgound</div>
    </div>
  );
};

export default App;
