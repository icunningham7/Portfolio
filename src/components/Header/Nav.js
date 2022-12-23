import React from 'react';

function Nav({ currentPage, handlePageChange }) {
    return (
            <ul className='nav nav-tabs flex flex-row gap-2 text-sm sm:text-base'>
            <li className={`p-2 rounded ${currentPage === '#about' ? 'active' : ''}`}>
                    <a href="#about" onClick={() => handlePageChange('#about')}>About</a>
                </li>
                <li className={`p-2 rounded ${currentPage === '#work' ? 'active' : ''}`}>
                    <a href="#work" onClick={() => handlePageChange('#work')}>Work</a>
                </li>
                <li className={`p-2 rounded ${currentPage === '#contact' ? 'active' : ''}`}>
                    <a href="#contact" onClick={() => handlePageChange('#contact')}>Contact</a>
                </li>
                <li className={`p-2 rounded ${currentPage === '#resume' ? 'active' : ''}`}>
                    <a href="#resume" onClick={() => handlePageChange('#resume')}>Resume</a>
                </li>
            </ul>
    )
};

export default Nav;