import "./Solenia.css";

const Solenia = () => {
    return (
        <div className="soleniaContainer">

            <div className="headline">
                <h1>Solenia, E-commerce Application</h1>
            </div>

            <div className="used">
                <div className="tool">
                    <p><strong>Tools: </strong>Vite | React | Figma | Github</p>
                </div>
                <div className="tool">
                    <p><strong>Role: </strong> UI/UX Design | Frontend Development</p>
                </div>

                <div className="tool">
                <p><strong>Timeline:</strong> 10 days </p>
                </div>
            </div>
             
            <div className="text">
            <h3>Overview</h3>
<p>
    In this school project, I collaborated with a team of 6 people to design and develop a responsive e-commerce application. The goal was to work together as a team to create a fully functional, user-friendly e-commerce app that was responsive across devices.
</p>


    <h3>Research, Design Process & Functionality</h3>
<p>
    We started by analyzing e-commerce websites to understand their design structure and functionality. This research inspired our own visual identity, including colors and typography. Due to time constraints, our focus was primarily on identifying design elements we liked and disliked in existing platforms.
</p>
<p>
    Initially, we sketched a quick low-fi wireframe on a whiteboard to get a rough overview of the app’s layout. After that, we moved to Figma, where we developed mid-fi and high-fi wireframes, refining the design and iterating as we progressed.
</p>
<p>
    The app includes key features like product browsing, viewing detailed information, a search function, and the ability to save items and carts in <strong>local storage</strong>. We used a <strong>given API</strong> provided by our teatcher to fetch product data, allowing us to integrate dynamic content while practicing API usage.
</p>
<p>
    Our team used <strong>GitHub</strong> for version control and to manage tasks with <strong>issues</strong>, ensuring efficient collaboration. We also utilized <strong>Trello</strong> to track tasks and ensure deadlines were met, dividing work and maintaining consistency throughout the project.
</p>

<h3>Challenges & Conclusion</h3>
<p>
    One of the main challenges we faced was implementing the app's functionality, especially features like the search function, local storage, and working with the given API. These features required careful planning and troubleshooting to ensure everything worked seamlessly across the app.
</p>
<p>
    Despite these challenges, we successfully integrated the functionality and completed the project within the time frame. The collaboration within the team was key to overcoming obstacles, and the project as a whole was a great experience in both teamwork and problem-solving.
</p>



</div>


            <div className="wireframeWrapper">

            <div className="wireframe-content">
            <div className="wireframe-text">
                <h3>Lo-fi/Mid-fi Wireframes</h3>
            </div>
            <div className="wireframessolenia">
                <div className="imagesBox">
                    <img src="/images/landingpage.png" alt="landingpage mid fi" />
                </div>

                <div className="imagesBox">
                    <img src="/images/Produktlista.png" alt="" />
                    <img src="/images/Produktbeskrivning.png" alt="productlist mid fi" />
                </div>

                <div className="imagesBox">
                    <img src="/images/Navbarfooter.png" alt="navbar/footer mid fi" />
                    <img src="/images/Shoppingcart.png" alt="shoppingcart mid fi" />
                   
                </div>
            </div>
            </div>

            <div className="wireframe-content">
            <div className="wireframe-text">
                <h3>HI-fi Wireframes</h3>
            </div>
            <div className="wireframessolenia">
                <div className="imagesBox">
                    <img src="/images/landingpagehifi.png" alt="landingpage hifi" />
                </div>

                <div className="imagesBox">
                    <img src="/images/produktsoleniahi.png" alt="" />
                    <img src="/images/produktbeskrivninghifi.png" alt="productlist hifi" />
                </div>

                <div className="imagesBox">
                    <img src="/images/favoriteshi.png" alt="favourites hifi" />
                    <img src="/images/shoppincarthi.png" alt="shoppingcart hifi" />
                   
                </div>
            </div>
            </div>

            </div>

        

            <div className="projectLinks">
                <button
                    className="projectLinksButton"
                    onClick={() => window.open('https://solenia.netlify.app/', '_blank')}
                >
                    the App
                </button>
             
            </div>

        </div>
    );
};

export default Solenia;
