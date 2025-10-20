import { Link } from 'react-router-dom'; // För projektsidor
import { Link as ScrollLink } from 'react-scroll'; // För att navigera inom sidan till "Contact"
import './Home.css';
import BlobAnimation from '../components/BlobAnimation';

// Importera Contact-komponenten
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <div className="home">

                <div className="home-intro">
                    <div className="text-content">
                        <h1>
                            Hi, I'm <span className="highlight">Awiwa Widmark</span>
                        </h1>
                        <h2>A UX/UI Designer and front-end developer.</h2>
                    </div>

                    <BlobAnimation />
                </div>

                <div className="homeContactContainer">
                    {/* Använder ScrollLink för att rulla till "Contact"-sektionen */}
                    <ScrollLink to="Contact" smooth={true} duration={500}>
                        <button className="contactButton">
                            Contact 
                        </button>
                    </ScrollLink>

                    <div className="contactIcons">
                        <span>
                            <a href="https://www.linkedin.com/in/awiwa-widmark-6756231b5" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </span>
                        <span>
                            <a href="https://github.com/awiwa98" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </span>
                    </div>
                </div>

                <div className="projectContainer">
                    <div className="projectHeading">
                        <h2>Projects</h2>
                    </div>

                    {/* Projekt 1 */}
                    <div className="project" id="neu">
                        <div className="projectTextContainer">
                            <div className="projectText">
                                <h3>Mental health app</h3>
            
                                <h4>Designing a Personalized AI‑Driven Mental Health App for Instant Relief and Emotional Awareness, Informed by User Insights</h4>
                                <div className='projectUse'><p> UX/UI Design</p>
                                <p>User research</p> 
                                <p>Graphic profile</p> </div>
                            </div>
                        </div>
                        <div className="projectImg">
                            <img src="images/mockupneu.png" alt="Project 2" />
                             <img src="images/mockupneu1.png" alt="Project 2" />
                             <img src="images/mockupneu3.png" alt="Project 2" />
                        </div>

                        <div className="projectBtnWrapper">
                            <Link to="/projects/neu">
                                <button className="projectButton">View Project</button>
                            </Link>
                        </div>
                    </div>

                    {/* Projekt 2 */}
                    <div className="project" id="solenia">
                        <div className="projectTextContainer">
                            <div className="projectText">
                                <h3>E-commerce platform</h3>
                    
                                <h4>Worked in a team to design and build a responsive, interactive e-commerce platform.</h4>
                                <div className='projectUse'>
                                <p> Web development</p>
                                <p>UX/UI design</p>
                               </div>
                            </div>
                        </div>

                        <div className="projectImg">
                            <img src="images/mockupsoleniaresp.png" alt="Solenia" />
                        </div>

                        <div className="projectBtnWrapper">
                            <Link to="/projects/solenia">
                                <button className="projectButton">View Project</button>
                            </Link>
                        </div>
                    </div>

                    {/* Projekt 3 */}
                    <div className="project" id="todomate">
                        <div className="projectTextContainer">
                            <div className="projectText">
                                <h3>Todo application</h3>
                                <h4>Designed and built a responsive Todo App in React.</h4>
                               <div className='projectUse'>
                               <p>Web development</p>
                               </div> 

                            </div>
                        </div>
                        <div className="projectImg">
                            <img src="images/todoportfolio1.png" alt="TodoMate" />
                        </div>

                        <div className="projectBtnWrapper">
                            <Link to="/projects/todomate">
                                <button className="projectButton">View Project</button>
                            </Link>
                        </div>
                    </div>

                  
                </div>

                {/* Här renderar du din Contact-komponent */}
                <Contact />
            </div>
        </>
    );
};

export default Home;







