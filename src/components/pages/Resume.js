import React from 'react';

const Resume = () => {
    return (
        <main className='justify-self-start pt-10'>  
            <section className='w-4/5 m-auto flex flex-col sm:flex-row'>
                <div className="section-header sm:pt-[10%] sm:w-[13%] sm:mr-[2%]">
                    <h2 className='text-lg'>
                        Resume
                    </h2>
                </div>
                <div className='section-body project-list sm:pl-[3%] border-t-2 mt-4 pt-4 sm:pt-0 sm:mt-0 sm:border-t-0 sm:border-l-2 border-teal-900'>
                <a href='/assets/IanCuninghamResume2022.pdf'>My Resume</a>

                    <h3>Profiencies</h3>
                    <div>
                        <div>
                            <h4>Languages</h4>
                            <ul>
                                <li>
                                JavaScript
                                </li>
                                <li>
                                TypeScript
                                </li>
                                <li>
                                C#
                                </li>
                            </ul>
                        </div>
                        <div>
                        <h4>Skills</h4>
                        <ul>
                            <li>
                            Analytics
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Resume;