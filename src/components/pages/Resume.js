import React from 'react';

const Resume = () => {
    return (
        <main className='justify-self-start pt-10'>
            <section className='w-4/5 m-auto flex flex-col sm:flex-row'>
                <div className="section-header sm:pt-10 sm:w-[13%] sm:mr-[2%] text-right">
                    <h2 className='text-3xl sm:text-xl'>
                        Resume
                    </h2>
                </div>
                <div className='section-body project-list sm:pl-[3%] border-t-2 mt-4 pt-4 sm:pt-0 sm:mt-0 sm:border-t-0 sm:border-l-2 border-teal-900'>
                    <button className='rounded p-2 bg-teal-900 text-slate-50'><a href='/assets/IanCuninghamResume2022.pdf'>My Resume</a><i className='fa-regular fa-file pl-2'></i></button>

                    <div className='pt-10'>
                        <h3 className='text-xl'>Profiencies</h3>
                        <div>
                            <div>
                                <h4 className='text-lg'>Languages</h4>
                                <ul className='list-disc list-inside'>
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
                                <h4 className='text-lg'>Skills</h4>
                                <ul className='list-disc list-inside'>
                                    <li>
                                        Google Analytics
                                    </li>
                                    <li>
                                        Google Tag Manager
                                    </li>
                                    <li>
                                        BigQuery
                                    </li>
                                    <li>
                                        DataStudio
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Resume;