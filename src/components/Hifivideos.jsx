import React from "react";
import "./Hifivideos.css";

const Hifivideos = () => {
  return (
    <div className="hifivideos-container">
         <div className="video-wrapper">
        <h2>Onboarding</h2>
        <video
          controls
          muted
          loop
          className="video-player"
        >
          <source src="/images/videohifisignup.mp4" type="video/mp4" />
          Din webbläsare stödjer inte video.
        </video>
      </div>

      <div className="video-wrapper">
        <h2>Check-in</h2>
        <video
          controls
          muted
          loop
          className="video-player"
        >
          <source src="/images/videohifichekin.mp4" type="video/mp4" />
          Din webbläsare stödjer inte video.
        </video>
      </div>

       <div className="video-wrapper">
        <h2>Moodtrack</h2>
        <video
          controls
          muted
          loop
          className="video-player"
        >
          <source src="/images/videohifimood.mp4" type="video/mp4" />
          Din webbläsare stödjer inte video.
        </video>
      </div>

         <div className="video-wrapper">
        <h2>AI chat</h2>
        <video
          controls
          muted
          loop
          className="video-player"
        >
          <source src="/images/videohifiai.mp4" type="video/mp4" />
          Din webbläsare stödjer inte video.
        </video>
      </div>

        
    </div>
  );
};

export default Hifivideos;


