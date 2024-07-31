import { useState, useRef } from "react";
import React from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import {
  MdOutlineReplay10,
  MdOutlineForward10,
  MdFullscreenExit,
} from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaVolumeXmark } from "react-icons/fa6";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const hoverVideoContainer = () => {
    document.querySelector(".top-50").classList.remove("d-none");
    
  };

  const leaveVideoContainer = () => {
    setTimeout(() => {
      document.querySelector(".top-50").classList.add("d-none");
      
    }, 5000);
    
  };

  const handleclickOpen = () => {
    document.querySelector(".top-50").classList.remove("d-none");
    setTimeout(() => {
      document.querySelector(".top-50").classList.add("d-none");
      
    }, 5000);
  };




  const handleAdd10sec = () => {
    videoRef.current.currentTime += 10;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSubtract10sec = () => {
    videoRef.current.currentTime -= 10;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };



  const handleVideoTimeChange = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };



  const updateTime = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours > 0 ? `${hours}:` : ""}${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="video-container" onMouseEnter={hoverVideoContainer} onMouseLeave={leaveVideoContainer} onClick={handleclickOpen}>
      <video
        ref={videoRef}
        className="video-element"
        onTimeUpdate={updateTime}
        onLoadedMetadata={handleLoadedMetadata}
        muted={isMuted}
      >
        <source
          src="https://uzfayil.top/Kino/Hayot Ertagi.mp4"
          type="video/mp4"
        />
      </video>
      <div className="top-50">
      <div className="d-flex">
        <span className="time">{formatTime(currentTime)}</span>
        <span className="time">{formatTime(duration)}</span>
      </div>
      <input
        type="range"
        id="video-slider"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleVideoTimeChange}
      />
      <div className="controls">
        <div className="d-flex-play">
          <MdOutlineReplay10 onClick={handleSubtract10sec} className="icon" />
          {isPlaying ? (
            <FaPause onClick={handlePlayPause} className="icon" />
          ) : (
            <FaPlay onClick={handlePlayPause} className="icon" />
          )}
          <MdOutlineForward10 onClick={handleAdd10sec} className="icon" />
        </div>
        <div className="d-flex-full">
          {!document.fullscreenElement ? (
            <SlSizeFullscreen onClick={handleFullScreen} className="icon" />
          ) : (
            <MdFullscreenExit onClick={handleFullScreen} className="icon" />
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
