import React, { useState, useRef } from "react";
import "./NeuWireframes.css";

const NeuWireframes = () => {
  const [showMore, setShowMore] = useState(false);
  const onboardingRef = useRef(null);
  const lastFlowRef = useRef(null);

  const handleToggle = () => {
    if (showMore && onboardingRef.current) {
      // Scroll to last flow section
      lastFlowRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowMore((prev) => !prev);
  };

  return (
    <div className="lofi-wireframe">
      {/* Onboarding always visible */}
      <div className="lofi-wireframe-flow" ref={onboardingRef}>
        <div className="flow-title">
          <h4>On boarding</h4>
        </div>
        <div className="flow-images">
        <img src="/images/Signup5.png" alt="signup" />
          <img src="/images/signuppp.png" alt="signup" />
          <img src="/images/Signup3.png" alt="signup" />
          <img src="/images/Signup4.png" alt="signup" />
          <img src="/images/aichatintroo.png" alt="signup" />
          <img src="/images/signup6.png" alt="signup" />
        </div>
      </div>

      {/* Toggle content */}
      {showMore && (
        <>
          <div className="lofi-wireframe-flow">
            <div className="flow-title">
              <h4>Profile/Checkin/Moodtrack/</h4>
            </div>
            <div className="flow-images">
              <img src="/images/Profile.png" alt="profile" />
              <img src="/images/checkin1.png" alt="checkin" />
              <img src="/images/Checkinexpand.png" alt="checkin expand" />
              <img src="/images/Moodcalender.png" alt="mood calendar" />
              <img src="/images/Moodcalenderdata.png" alt="mood calendar data" />
             
            </div>
          </div>

       

          <div className="lofi-wireframe-flow" ref={lastFlowRef}>
            <div className="flow-title">
              <h4>AI Chat</h4>
            </div>
            <div className="flow-images">
              <img src="/images/AIchat.png" alt="AI chat" />
            </div>
          </div>
        </>
      )}

      {/* Toggle button */}
      <div className="toggle-button-container">
        <button className="see-more-button" onClick={handleToggle}>
          {showMore ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default NeuWireframes;





