import { Element } from "react-scroll";
import "./Footer.css"; 

const Footer = () => {
    return (
        <Element name="footer">
            <footer className="footer">

                <div className="footerTitle"> 
                    <h2>Let's connect</h2>
                </div>

                <div className="footerIcons"> 
                    <span>
                        {/* Mailto-länk för e-post */}
                        <a href="mailto:awiwawidmark123@icloud.com">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </span>
                    <span>
                        {/* Länk till LinkedIn */}
                        <a href="https://www.linkedin.com/in/awiwa-widmark-6756231b5" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </span>
                    <span>
                        {/* Länk till GitHub */}
                        <a href="https://github.com/awiwa98" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </span>
                </div>
            </footer>
        </Element>
    );
}

export default Footer;



