import "./Neu.css";

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
                    <p><strong>Timeline:</strong> 2 months</p>
                </div>
            </div>

            <div className="text">
                <div className="overview">
                    <h3>Overview</h3>
                    <p>
                        This project was carried out as part of a school collaboration with an external client, a startup developing a new product from the ground up. I worked together with another UX designer to design the app’s first concept based on the client’s goals and requirements. The aim was to create a user-centered and accessible solution that supports mental health in both the short and long term.
                    </p>

                    <p>
                        This project explores how technology can support mental health in both urgent and long-term situations. 
                        The goal is to design a mobile app that offers instant support through AI and accessible exercises like breathing techniques, 
                        while helping users build emotional awareness over time through mood check-ins and personal insights.
                    </p>

                    <h3>Problem Statement</h3>
                    <p>
                        During times of stress and anxiety, people struggle to find immediate support. Mental health services are often hard to access or costly, 
                        and self-help tools tend to feel too generic or disconnected from users' needs.
                    </p>

                    <p>
                        Additionally, users have difficulty tracking their emotional well-being over time, making it challenging to recognize patterns 
                        or understand what impacts their mental health.
                    </p>

                    <p>
                        There's a need for accessible, personalized tools that provide both instant support and help users build long-term emotional awareness.
                    </p>
                </div>

                <div className="user-research">
                    <h3>User Research</h3>
                    <p>
                        To better understand the needs of our target audience (young adults aged 18–29), we conducted qualitative user interviews. 
                        These in-depth conversations helped us identify key challenges, preferences, and behaviors, which in turn guided our design decisions. 
                        Based on the insights gathered, we identified three main behavioral types that influenced the app’s concept and features.
                    </p>

                    <p>
                        The behavioral personas identified during research are not shown here to keep the case study focused on the main insights and design decisions.
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
                    With these findings, we developed an app concept designed to support both instant relief and long-term emotional growth.
                </p>

                <h3>Some of the Main Features</h3>
                <p>
                    The app includes several features designed to support both short-term and long-term emotional well-being. 
                    Below are some of the main ones highlighted in this case study. 
                    Other parts, such as onboarding and learning sections, are not included here to keep the presentation concise and focused on the core experience.
                </p>

                <ul className="features-list">
                    <li>
                        <strong>AI Chat:</strong> A personalized chat where users can receive immediate emotional support from an AI that adapts to their 
                        personality, tone, and current emotional state. The AI offers motivational guidance, grounding techniques, or practical help with 
                        structure—depending on what the user needs in that moment.
                    </li>
                    <li>
                        <strong>Voice & Audio Interaction:</strong> Since several interviewees mentioned feeling uncomfortable typing during stressful moments, 
                        the AI also supports voice interaction. Users can speak directly to the AI or send voice messages instead of typing, allowing for more 
                        natural communication and accessibility.
                    </li>
                    <li>
                        <strong>Check-In:</strong> A daily mood check-in that encourages users to reflect on their emotions. Each check-in includes selecting 
                        an emoji that represents their mood and answering three short questions about what they’re feeling, what may have caused it, and what 
                        they’ve done so far during the day. The goal is to build awareness and self-reflection over time.
                    </li>
                    <li>
                        <strong>Mood Track:</strong> A visual overview where users can track their emotional trends through a color-coded calendar and daily 
                        summaries. The dashboard includes patterns, statistics, and reflections to help users recognize triggers and discover what supports 
                        their mental well-being.
                    </li>
                </ul>

                <p>
                    Below are a few selected lo-fi wireframes and hi-fi prototypes showcasing how these core features were visualized and developed throughout the design process.
                </p>
            </div>

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

            <div className="hifi-wireframe-title">
                <h3>Hi-Fi Prototypes</h3>
            </div>

            <div className="hifi-mockup">
                <div className="mockup-title">
                    <h4>AI Chat</h4>
                </div>
                <div className="imagesNeu">
                    <img src="/images/chatstart.png" alt="AI chat start" />
                    <img src="/images/chatskicka.png" alt="AI chat send" />
                    <img src="/images/chatprata.png" alt="AI chat voice" />
                </div>
            </div>

            <div className="hifi-mockup">
                <div className="mockup-title">
                    <h4>Check-In</h4>
                </div>
                <div className="imagesNeu">
                    <img src="/images/chekinstart.png" alt="check-in start" />
                    <img src="/images/chekinm.png" alt="check-in mid" />
                    <img src="/images/chekinm1.png" alt="check-in question" />
                    <img src="/images/chekinm2.png" alt="check-in summary" />
                </div>
            </div>

            <div className="hifi-mockup">
                <div className="mockup-title">
                    <h4>Mood Track & Profile</h4>
                </div>
                <div className="imagesNeu">
                    <img src="/images/moodtrackm.png" alt="mood track main" />
                    <img src="/images/moodtrackm2.png" alt="mood track details" />
                    <img src="/images/profil1.png" alt="user profile" />
                </div>
            </div>

            <p>
                A visual identity and design system were also developed to ensure consistency and accessibility across the interface, 
                but are not included here as the focus of this case study is on the user experience and core functionality.
            </p>

            <div className="conclusion">
                <h3>Reflection</h3>
                <p>
                    Working on this project gave me valuable experience in translating user insights into practical design solutions. 
                    It also highlighted the importance of combining short-term relief tools with features that help users build sustainable emotional habits.
                </p>
            </div>
        </div>
    );
};

export default Neu;
