import React, { Component, createRef } from "react";
import video from "../Videos/Refs in React.mp4";
export default function VideoPlayer() {
  const videoRef = createRef();

  const playVideo = () => {
    videoRef.current.play();
    console.log("playing video");
  };
  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} width={300} height={200} controls>
        <source src={video} type="video/mp4"></source>
      </video>
      <div>
        <button onClick={playVideo}>Play</button>

        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
}
