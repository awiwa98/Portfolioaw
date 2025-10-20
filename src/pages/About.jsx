import "./About.css";
import { motion } from "framer-motion";
import ProgressSteps from "../components/ProgressSteps"; // Desktop-version
import ProgressStepsMobile from "../components/ProgressStepsMobile"; // Mobil-version

const About = () => {
  return (
    <div className="about">
      {/* ABOUT INTRO */}
      <motion.div
        className="aboutText"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="about-intro">
          <div className="about-intro-text">
            <h2>About me</h2>
            <p>
              I'm a curious and creative UX/UI designer currently studying at
              Chas Academy in Stockholm. What drew me to design is the
              combination of psychology, creativity and problem-solving. I enjoy
              creating experiences that make people feel understood and
              supported, whether through intuitive interfaces or thoughtful
              interactions.
            </p>
            <p>
              I'm still learning and growing, but I’m genuinely passionate about
              UX/UI design. I believe that my curiosity and motivation to keep
              developing are key to how I grow as a designer.
            </p>
            <p>
              When I'm not designing, you’ll probably find me outside in nature, at the gym, on a
              yoga mat, or trying to get my cats to pay attention to me 😄.
            </p>
          </div>
          <div className="profile-img">
            <img src="images/profileimage.png" alt="profile image" />
          </div>
        </div>

          <div className="about-cats">
             <img src="images/gjördisp1.jpg" alt="profile image" />
             <img src="images/bamsep1.jpg" alt="profile image" />

          </div>


      </motion.div>

      {/* WHAT I DO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="about-card-title">
          <h3>What I Do</h3>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <h4>
              <i className="fa fa-search"></i> User Research
            </h4>
            <p>
              I believe good design begins with understanding users. I’m
              interested in learning how people think, what they need, and where
              challenges arise. By conducting interviews, observations, and
              usability testing, I gather insights that help improve design
              solutions.
            </p>
          </div>

          <div className="about-card">
            <h4>
              <i className="fa fa-paint-brush"></i> UX/UI Design
            </h4>
            <p>
              I focus on designing interfaces that are simple, intuitive, and
              visually effective. My approach combines creativity with usability,
              always keeping the user’s experience at the forefront. I prioritize
              simplicity and consistency in my designs.
            </p>
          </div>

          <div className="about-card">
            <h4>
              <i className="fa fa-code"></i> Frontend Development
            </h4>
            <p>
              I have experience with HTML, CSS, JavaScript, and React. While
              design is my main focus, I enjoy coding to build practical,
              developer-friendly solutions and continuously improving my skills in
              both areas.
            </p>
          </div>
        </div>
      </motion.div>

      {/* HOW I WORK */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="progress-steps-title">
          <h3>How I Work</h3>
        </div>
        <div className="progress-desktop">
          <ProgressSteps />
        </div>
        <div className="progress-mobile">
          <ProgressStepsMobile />
        </div>
      </motion.div>

      {/* PHILOSOPHY */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="work-philosophy-title">
          <h3>My Philosophy</h3>
        </div>

        <div className="work-philosophy-cards">
          <div className="work-philosophy-card">
            <h4>Empathy and Openness</h4>
            <p>
              I believe in designing with empathy, prioritizing the user's needs,
              and staying open to others' ideas. Sometimes, it’s important to set
              aside personal opinions and "kill your darlings" to discover the
              best solutions.
            </p>
          </div>

          <div className="work-philosophy-card">
            <h4>Structure for Efficiency</h4>
            <p>
              I believe a clear structure from the start, both in workflow and
              file organization is key for efficiency. While a bit of chaos can
              spark creativity, maintaining balance and clarity ensures smoother
              progress.
            </p>
          </div>

          <div className="work-philosophy-card">
            <h4>Continuous Learning and Growth</h4>
            <p>
              Design is constantly evolving, and I believe in the importance of
              continuous learning and embracing feedback. Staying updated and
              being open to new ideas is essential for growth as a designer.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;





