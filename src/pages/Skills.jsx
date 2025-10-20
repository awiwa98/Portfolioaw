import './Skills.css';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div className="skills">
            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
            >
                Skills
            </motion.h2>

            <motion.div
                className="education"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <h3>Education</h3>
                <div className="chas">
                    <p>September 2024 – June 2026</p>
                    <p>
                        <span className="highlight">UX/UI-design with frontend competence</span>
                    </p>
                    <p>
                        I am currently pursuing a 2-year program in UX/UI-Design and front-end development.
                    </p>
                    <p>
                        The program includes courses in UX/UI-Design, Graphic Design, Front-End Programming, React, and Agile Methodology.
                    </p>
                    <p><i className="fa-solid fa-location-dot"></i> Chas Academy, Stockholm</p>
                </div>
            </motion.div>

            <motion.div
                className="technologies"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <h3>Technologies</h3>
                <div className="tech">
                    <span><img src="/images/figmaicon1.png" alt="Figma" className="figma-icon" /></span>
                    <span><img src="/images/htmlicon.png" alt="HTML5" className="html5-icon" /></span>
                    <span><img src="/images/cssicon.png" alt="CSS3" className="css3-icon" /></span>
                    <span><img src="/images/jsicon.png" alt="JavaScript" className="js-icon" /></span>
                    <span><img src="/images/reacticon1.png" alt="React" className="react-icon" /></span>
                    <span><img src="/images/githubicon.png" alt="GitHub" className="github-icon" /></span>
                    <span><img src="/images/notionicon.png" alt="Notion" className="notion-icon" /></span>
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;


