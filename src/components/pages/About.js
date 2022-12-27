import React from 'react';

const About = () => {
    return (
        <main className='justify-self-start pt-10'>
            <section className='w-4/5 m-auto flex flex-col sm:flex-row'>
                <div className="section-header sm:pt-10 sm:w-[13%] sm:mr-[2%] text-right">
                    <h2 className='text-3xl sm:text-xl'>
                        About Me
                    </h2>
                </div>
                <div className="section-body project-list sm:pl-[3%] border-t-2 mt-4 pt-4 sm:pt-0 sm:mt-0 sm:border-t-0 sm:border-l-2 border-teal-900">

                    <div className='portrait inline'>
                        <img className='object-cover float-right min-h-40 max-h-96 min-w-40 max-w-96 pl-4' src="./assets/portfolio_portrait.jpg" alt="Portrait of Ian Cunningham" />
                    </div>
                    <p>
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