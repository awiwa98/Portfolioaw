import { useRef, useState } from "react";
import "./Neu.css";

const Neu = () => {
  // Refs och state för båda videorna
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  // Toggle-funktion för båda videorna
  const togglePlay = (videoRef, setIsPlaying) => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="neuContainer">
      {/* --- Headline --- */}
      <div className="headline">
        <h1>NEU SWEDEN</h1>
      </div>

      {/* --- Project info --- */}
      <div className="used">
        <div className="tool">
          <p><strong>Tools:</strong> Figma | Notion</p>
        </div>
        <div className="tool">
          <p><strong>Role:</strong> User Research | UX/UI Design</p>
        </div>
        <div className="tool">
          <p><strong>Timeline:</strong> 2 months</p>
        </div>
      </div>

      {/* --- Text sections --- */}
      <div className="text">
        <div className="overview">
          <h3>Overview</h3>
          <p>
            This project was carried out as part of a school collaboration with an external client, 
            a startup developing a new product from the ground up. I worked together with another UX designer 
            to design the app's first concept based on the client's goals and requirements. 
            The aim was to create a user-centered and accessible solution that supports mental health 
            in both the short and long term.
          </p>

          <p>
            This project explores how technology can support mental health in both urgent and long-term situations. 
            The goal is to design a mobile app that offers instant support through AI and accessible exercises 
            like breathing techniques, while helping users build emotional awareness over time 
            through mood check-ins and personal insights.
          </p>

          <h3>Problem Statement</h3>
          <p>
            During times of stress and anxiety, people struggle to find immediate support. 
            Mental health services are often hard to access or costly, and self-help tools 
            tend to feel too generic or disconnected from users' needs.
          </p>

          <p>
            Additionally, users have difficulty tracking their emotional well-being over time, 
            making it challenging to recognize patterns or understand what impacts their mental health.
          </p>

          <p>
            There's a need for accessible, personalized tools that provide both instant support 
            and help users build long-term emotional awareness.
          </p>
        </div>

        <div className="user-research">
          <h3>User Research</h3>
          <p>
            To better understand the needs of our target audience (young adults aged 18–29), 
            we conducted qualitative user interviews. These in-depth conversations helped us identify 
            key challenges, preferences, and behaviors, which in turn guided our design decisions. 
            Based on the insights gathered, we identified three main behavioral types that influenced 
            the app's concept and features.
          </p>

          <p>
            The behavioral personas identified during research are not shown here 
            to keep the case study focused on the main insights and design decisions.
          </p>

          <h3>Pain Points</h3>
          <ul>
            <li>Cluttered, difficult-to-navigate apps requiring multiple steps to access key features.</li>
            <li>Lack of personalization, making users feel disconnected from the experience.</li>
            <li>Limited immediate support during moments of anxiety or emotional overwhelm.</li>
          </ul>

          <h3>User Insights</h3>
          <ul>
            <li>Users want an app that feels personal and adapts to their needs.</li>
            <li>High interest in tools for anxiety relief such as breathing or calming techniques.</li>
            <li>Desire for structured, easy-to-follow wellness routines.</li>
            <li>Positive attitude toward AI as a supportive, non-judgmental guide.</li>
            <li>App reminders are essential to help users build healthy habits over time.</li>
          </ul>
        </div>

        <h3>How We Applied These Insights</h3>
        <p>
          With these findings, we developed an app concept designed to support both 
          instant relief and long-term emotional growth.
        </p>

      
        <h3>Visual Identity & Design System</h3>
        <p> A calm, playful visual identity was created to reflect the app’s emotional tone — 
           combining soft shapes, expressive icons, and a gentle color palette.
           A simple design system was then developed to ensure visual consistency 
           and scalability across the interface.
           </p>

  <div className="visual-identity-images">
    <img src="/images/visuellneu.png" alt="Visual identity" />
    <img src="/images/designsystemneuu.png" alt="Design system" />
  </div>



        <h3>Some of the Main Features</h3>
        <p>
          The app includes several features designed to support both short-term and 
          long-term emotional well-being. Below are some of the main ones highlighted 
          in this case study. Other parts, such as onboarding and learning sections, 
          are not included here to keep the presentation concise and focused on the core experience.
        </p>

        <ul className="features-list">
          <li>
            <strong>AI Chat:</strong> A chat-based AI that provides immediate emotional support, 
            adapting its tone and guidance to the user's needs in real time.
          </li>
          <li>
            <strong>Voice & Audio Interaction:</strong> Users can talk to the AI or send voice messages 
            instead of typing, offering a more natural and accessible experience.
          </li>
          <li>
            <strong>Check-In:</strong> A quick daily mood check-in using emojis and short questions 
            to help users reflect and build emotional awareness.
          </li>
          <li>
            <strong>Mood Track:</strong> A color-coded calendar and simple statistics 
            that visualize emotional patterns and help users identify triggers and progress.
          </li>
        </ul>

        <p>
          Below are a few selected lo-fi wireframes and hi-fi prototypes showcasing how these 
          core features were visualized and developed throughout the design process.
        </p>
      </div>

      {/* --- Lo-fi images --- */}
      <div className="lofi-wireframe-title">
        <h3>Lo-fi/Mid-fi Wireframes</h3>
      </div>

      <div className="lofi-mockup">
        <img src="/images/Profile.png" alt="profile" />
        <img src="/images/checkin1.png" alt="checkin" />
        <img src="/images/Checkinexpand.png" alt="checkin expand" />
        <img src="/images/Moodcalender.png" alt="mood calendar" />
        <img src="/images/AIchat.png" alt="AI chat" />
      </div>

      {/* --- Hi-Fi Prototypes --- */}
      <div className="hifi-wireframe-title">
        <h3>Hi-Fi Prototypes</h3>
      </div>

      <div className="hifi-wrapper">
        {/* Första videon – AI Chat */}
        <div className="hifi-mockup">
          <div className="mockup-title">
            <h4>AI Chat</h4>
          </div>
          <div
            className="video-container"
            onClick={() => togglePlay(videoRef1, setIsPlaying1)}
          >
            <video
              ref={videoRef1}
              loop
              muted
              playsInline
              className="prototype-video"
            >
              <source src="/images/aichattsigninv.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying1 && (
              <div className="custom-play-wrapper">
                <div className="play-circle" />
                <div className="play-triangle"></div>
              </div>
            )}
          </div>
        </div>

        {/* Andra videon – Check-in & Moodtrack */}
        <div className="hifi-mockup">
          <div className="mockup-title">
            <h4>Check-in & Moodtrack</h4>
          </div>
          <div
            className="video-container"
            onClick={() => togglePlay(videoRef2, setIsPlaying2)}
          >
            <video
              ref={videoRef2}
              loop
              muted
              playsInline
              className="prototype-video"
            >
              <source src="/images/chekinmoodtrackv.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying2 && (
              <div className="custom-play-wrapper">
                <div className="play-circle" />
                <div className="play-triangle"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <p>
        A visual identity and design system were also developed to ensure consistency 
        and accessibility across the interface, but are not included here as the focus 
        of this case study is on the user experience and core functionality.
      </p>

      <div className="conclusion">
        <h3>Reflection</h3>
        <p>
          Working on this project gave me valuable experience in translating 
          user insights into practical design solutions. It also highlighted 
          the importance of combining short-term relief tools with features 
          that help users build sustainable emotional habits.
        </p>
      </div>
    </div>
  );
};

export default Neu;




