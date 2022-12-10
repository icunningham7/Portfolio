import React from 'react';

const Home = () => {
    return (
        <main>
            <section>
                <div id="projects" className="section-header">
                    <h2>
                        Projects
                    </h2>
                </div>
                <div className="section-body project-list">
                    <a className="feature project" href="https://github.com/icunningham7/MuSearch">
                        <figure className="overlay">
                            <img className="feature" src="./assets/images/MuSearch.gif" alt="Surf Report Project" />
                        </figure>
                        <div className="project-details">
                            <h3>MuSearch</h3>
                            <p>Lyrics and Music together</p>
                        </div>
                    </a>
                    <a className="project" href="https://github.com/DavidPaniagua15/Group02">
                        <figure className="overlay">
                            <img src="./assets/images/Sync.png" alt="Sync Task Manager" />
                        </figure>
                        <div className="project-details">
                            <h3>Sync Task Manager</h3>
                            <p>Sync = Simplicity</p>
                        </div>
                    </a>
                    <a className="project" href="https://github.com/icunningham7/#third-project">
                        <figure className="overlay">
                            <img src="https://via.placeholder.com/400x150.png?text=Project+3" alt="Calculator App Project" />
                        </figure>
                        <div className="project-details">
                            <h3>Calculator</h3>
                            <p>React/JavaScript/CSS</p>
                        </div>
                    </a>
                    <a className="project" href="https://github.com/icunningham7/#fourth-project">
                        <figure className="overlay">
                            <img src="https://via.placeholder.com/400x150.png?text=Project+4" alt="Pastel Puzzels Project" />
                        </figure>
                        <div className="project-details">
                            <h3>Pastel Puzzels</h3>
                            <p>MERN Stack</p>
                        </div>
                    </a>
                    <a className="project" href="https://github.com/icunningham7/#fifth-project">
                        <figure className="overlay">
                            <img src="https://via.placeholder.com/400x150.png?text=Project+5" alt="Run Buddy Project" />
                        </figure>
                        <div className="project-details">
                            <h3>Run Buddy</h3>
                            <p>HTML/CSS</p>
                        </div>
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Home;