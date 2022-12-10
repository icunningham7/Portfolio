import React from 'react';

const About = () => {
    return (
        <main>
            <section>
                <div id="about" className="section-header">
                    <h2>
                        About Me
                    </h2>
                </div>
                <div className="section-body">
                    <p>
                        <img className="portrait" src="https://via.placeholder.com/600x600.png?text=Portrait+Image" alt="Portrait of Ian Cunningham" />
                        Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Laoreet non curabitur gravida arcu
                        ac. Cras sed felis eget velit aliquet. Nam libero justo laoreet sit amet cursus. Turpis cursus in
                        hac habitasse platea dictumst quisque. Imperdiet nulla malesuada pellentesque elit. Volutpat sed
                        cras ornare arcu.
                        <br />
                        <br />
                        Feugiat in ante metus dictum. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Arcu
                        cursus vitae congue mauris rhoncus aenean vel. Metus aliquam eleifend mi in nulla posuere. Turpis in
                        eu mi bibendum neque egestas congue quisque. Ipsum faucibus vitae aliquet nec ullamcorper sit amet.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default About;