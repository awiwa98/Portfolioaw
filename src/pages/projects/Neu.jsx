import "./Neu.css";
import NeuWireframes from "../../components/NeuWireframes";
import Hifivideos from "../../components/Hifivideos";




const Neu = () => {
    return (
        <div className="neuContainer">
            <div className="headline">
                <h1>NEU SWEDEN</h1>
            </div>

            <div className="used">
                <div className="tool">
                <p><strong>Tools:</strong> Figma | Notion</p>
                </div>

                <div className="tool">
                <p><strong>Role:</strong> User Research | UX/UI Design</p>
                </div>

                <div className="tool">
                <p><strong>Timeline:</strong> 2 months </p>
                </div>

            </div>

            <div className="text">
              
                <div className="overview">
                <h3>Overview</h3>
                <p>This project explores how technology can support mental health in both urgent and long-term situations. The goal is to design a mobile app that offers instant support through AI and accessible exercises like breathing techniques, while helping users build emotional awareness over time through mood check-ins and personal insights.</p>

                <p>The app combines AI, intuitive design, and community features to create a safe, personalized space for emotional self-care.</p>

        
                <h3>Problem Statement</h3>
                <p>During times of stress and anxiety, people struggle to find immediate support. Mental health services are often hard to access or costly, and self-help tools tend to feel too generic or disconnected from users' needs.</p>

                <p>Additionally, users have difficulty tracking their emotional well-being over time, making it challenging to recognize patterns or understand what impacts their mental health.</p>

                <p>There's a need for accessible, personalized tools that provide both instant support and help users build long-term emotional awareness.</p>

                </div>

                <div className="user-research">

                <h3>User Research</h3>
                <p>To better understand the needs of our target audience (young adults aged 18-29), we conducted qualitative user interviews. These in-depth interviews allowed us to explore the challenges, preferences, and behaviors of our users. Based on the insights gathered, we identified three key behavioral types that influenced the app’s design:</p>
              <div></div>
                <h3>Pain Points</h3>
                <ul>
                <li>Difficult-to-navigate and cluttered apps, requiring multiple steps or extensive reading to access needed features.</li>
                <li>Lack of personal customization, leaving users feeling disconnected from the tools available.</li>
                <li>Difficulty accessing immediate support during moments of anxiety or emotional overwhelm.</li>
                </ul>

                <h3>User Insights</h3>
                <ul>
                <li>Need for personal customization: Users want an app tailored to their unique needs and preferences.</li>
                <li>High demand for anxiety-relief tools: Breathing exercises and calming techniques are critical for users during moments of stress.</li>
                <li>Desire for structured approaches to stress management: Users seek clear, actionable tools to incorporate mental wellness into their daily routines.</li>
                <li>Positive attitude toward AI: Users appreciate the idea of using AI to provide personalized mental health support.</li>
                <li>Importance of reminders: Users need notifications and prompts to help them engage with the app regularly and build healthier habits.</li>
                </ul>
                </div>



                <h3>How We Applied These Insights</h3>
                <p>With these insights, we developed an app with features tailored to each behavioral type, providing both immediate relief and long-term growth strategies.</p>
            </div>

            <div className="lofi-wireframe-title">
                <h3>Lo-fi/Mid-fi wireframe</h3>
                </div>
                <NeuWireframes />

                <div className="hifi-wireframe-title">
                    <h3>Hi-Fi prototypes</h3>
            
            </div>
            <Hifivideos />

            

           
        </div>

      
        
    );
}

export default Neu;

