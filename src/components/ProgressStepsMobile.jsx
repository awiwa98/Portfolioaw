import React from "react";
import "./ProgressStepsMobile.css";

const steps = [
    {
      title: "Research & User Journey",
      subtitle:
        "Understand the problem, users, and market through research, interviews, surveys, and map the user's experience to identify pain points and needs.",
    },
    {
      title: "Design Strategy & Exploration",
      subtitle:
        "Plan the design process, generate concepts and insights, sketch, create wireframes, and test multiple solutions.",
    },
    {
      title: "Moodboard & Visual Direction",
      subtitle:
        "Develop visual identity: moodboard, typography, color palette, and design inspiration.",
    },
    {
      title: "Mid-fi & Design System",
      subtitle:
        "Create grayscale mid-fidelity wireframes, focus on usability, layout, and structure, and build a UI foundation with components, tone scales, and text styles.",
    },
    {
      title: "Hi-Fi Prototypes",
      subtitle:
        "Apply the design system to high-fidelity prototypes. Polished visuals ready for testing.",
    },
    {
      title: "User Testing & Handoff",
      subtitle:
        "Conduct user testing on hi-fi prototypes, iterate, and then hand off to development.",
    },
  ];
  

const ProgressStepsMobile = () => {
  return (
    <div className="mobile-timeline">
      <div className="line" />
      {steps.map((step, index) => (
        <div
          key={index}
          className="step-mobile"
        >
          <div className="circle">{index + 1}</div>
          <div className="text-box">
            <h4>{step.title}</h4>
            <p>{step.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressStepsMobile;

