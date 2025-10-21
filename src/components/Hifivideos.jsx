import React from "react";
import "./Hifivideos.css";

const Hifivideos = () => {
  const videos = [
    { id: 1, src: "/images/videomockuponboarding.webm", title: "Onboarding" },
    { id: 2, src: "/images/mockupvideochekin.webm", title: "Check-in" },
    { id: 3, src: "/images/mockupvideomoodtrack.webm", title: "Mood Tracker" },
    { id: 4, src: "/images/mockupaichattvideo.webm", title: "AI Chat" },
  ];

  // Funktion som växlar play/pause
  const handleVideoClick = (e) => {
    const video = e.currentTarget;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="hifivideos-column">
      {videos.map((video) => (
        <div key={video.id} className="video-block">
          <h4 className="video-title">{video.title}</h4>
          <video
            className="video-phone"
            autoPlay
            muted
            loop
            playsInline
            onClick={handleVideoClick} // 👈 lägger till klick-funktion
          >
            <source src={video.src} type="video/webm" />
            Din webbläsare stödjer inte video.
          </video>
        </div>
      ))}
    </div>
  );
};

export default Hifivideos;







