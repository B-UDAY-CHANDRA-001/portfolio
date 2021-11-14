// import { width } from 'dom-helpers';
import React from 'react';
import BackgroundVideo from "../videos/background_video.mp4"
const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <video
        autoPlay loop muted
        style={{
          position: "absolute",
          width: "100%",
          left : "50%",
          top : "50%",
          height : "100%",
          objectFit : "cover",
          transform : "translate(-50%, -50%)",
          zIndex: "-1"


        }}
      >
        <source src = {BackgroundVideo} type = "video/mp4"/> 
      </video>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
