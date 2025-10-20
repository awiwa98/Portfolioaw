import "./Todomate.css";

const Todomate = () => {
    return (
        <div className="todoMateContainer">

            <div className="headline">
                <h1>TodoMate, Todo Application</h1>
            </div>

            <div className="used">
                <div className="tool">
                    <p><strong>Tools:</strong> Vite | React | React Router | GitHub</p>
                </div>
                <div className="tool">
                    <p><strong>Role:</strong> Frontend Development</p>
                </div>
                <div className="tool">
                    <p><strong>Timeline:</strong> 10 days</p>
                </div>
            </div>

            <div className="text">
                <h3>Overview</h3>
                <p>
                    TodoMate is a simple and functional todo application built with 
                    <strong> React</strong> and <strong>Vite</strong>. 
                    It allows users to add, view, and mark their tasks as completed.
                </p>

                <h3>Features</h3>
                <ul>
                    <li>Add new todos</li>
                    <li>Mark tasks as completed</li>
                    <li>Save todos in <strong>localStorage</strong></li>
                    <li>Two pages: Todo and About</li>
                </ul>

                <h3>Tech & Structure</h3>
                <p>
                    The app uses <strong>react-router-dom</strong> for navigation and is 
                    divided into multiple components: <strong>TodoForm</strong>, 
                    <strong> TodoList</strong>, and <strong>TodoItem</strong>. 
                    State is managed with <strong>useState</strong> and synced to localStorage 
                    using <strong>useEffect</strong>.
                </p>

                <h3>Result</h3>
                <p>
                    A responsive and easy-to-use tool for managing daily tasks. 
                    The project strengthened my understanding of React, component structure, 
                    and browser data handling.
                </p>
            </div>

            <div className="projectLinks">
                <button
                    className="projectLinksButton"
                    onClick={() => window.open("https://todomatee.netlify.app/", "_blank")}
                >
                    the App
                </button>
            </div>

        </div>
    );
};

export default Todomate;


