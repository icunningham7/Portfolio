import React from 'react';
import ProjectCard  from '../Cards/ProjectCard';

const Work = () => {
    return (
        <main className='justify-self-start py-10'>
            <section className='w-4/5 m-auto flex flex-col sm:flex-row'>
                <div className="section-header sm:pt-10 sm:w-[13%] sm:mr-[2%] text-right">
                    <h2 className='text-3xl sm:text-xl'>
                        Work
                    </h2>
                </div>
                <div className="section-body project-list grid grid-cols-1 sm:grid-cols-2 gap-2 sm:pl-[3%] border-t-2 mt-4 pt-4 sm:pt-0 sm:mt-0 sm:border-t-0 sm:border-l-2 border-teal-900">
                    <ProjectCard title='MuSearch' description='Lyrics and Music together' cardSize='lg' repoLink='https://github.com/icunningham7/MuSearch' imageSrc='./assets/MuSearch.gif' imageAlt='MuSearch demo gif' />

                    <ProjectCard title='Sync Task Manager' description='Sync = Simplicity' repoLink='https://github.com/DavidPaniagua15/Group02' imageSrc='./assets/Sync.png' imageAlt='Sync Task Manager mockup' />

                    <ProjectCard title='JATE Text Editor' description='Express/PWA' repoLink='https://github.com/icunningham7/JATE' demoLink='https://murmuring-bastion-19282.herokuapp.com/' imageSrc='./assets/JATE-Demo.gif' imageAlt='JATE text editor progressive web app mockup' />

                    <ProjectCard title='Build-A-Bingo' description='MERN Stack' repoLink='https://github.com/aBraveNewURL/Build_A_Bingo' demoLink='https://build-a-bingo.herokuapp.com/' imageSrc='./assets/Build-A-Bingo.png' imageAlt='Build-A-Bingo Project' />

                    <ProjectCard title='Run Buddy' description='HTML/CSS' repoLink='https://github.com/icunningham7/#fifth-project' imageSrc='https://via.placeholder.com/400x350.png?text=Project+5' imageAlt='Run Buddy Project' />

                </div>
            </section>
        </main>
    );
};

export default Work;