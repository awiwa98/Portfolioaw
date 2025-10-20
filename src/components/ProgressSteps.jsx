import React from "react";
import "./ProgressSteps.css";

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
  

const ProgressSteps = () => {
  const rows = Math.ceil(steps.length / 3);
  const stepRows = Array.from({ length: rows }, (_, rowIndex) => {
    const start = rowIndex * 3;
    return steps.slice(start, start + 3);
  });

  return (
    <div className="process-container">
      <div className="steps-line-wrapper">
        {stepRows.map((row, rowIndex) => (
          <div key={rowIndex} className="step-row">
            {row.map((step, index) => (
              <div key={index} className="step">
                <div className="step-top">
                  <div className="step-circle">
                    {rowIndex * 3 + index + 1}
                  </div>
                </div>
                <div className="step-bottom">
                  <div className="step-title">{step.title}</div>
                  <div className="step-subtitle">{step.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;