import React from 'react';

const Footer = ({handlePageChange}) => {
    return (
        <footer className='sticky top-[100vh] inset-x-0 bottom-0 pb-4 text-slate-100 bg-teal-900'>
            <hr className='m-4' />
            <div className='container sm m-auto'>
                <ul className="relative flex flex-wrap items-center justify-center gap-4">
                    <li><a href="https://www.linkedin.com/in/ian-cunningham-029295147/"><i className='fa-brands fa-linkedin fa-2xl hover:text-teal-400'></i></a></li>
                    <li><a href="#contact" onClick={() => handlePageChange('Contact')}><i className='fa-solid fa-at fa-2xl hover:text-teal-400'></i></a></li>
                    <li><a href="https://github.com/icunningham7/">
                    <i className='fa-brands fa-github fa-2xl hover:text-teal-400'></i></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;