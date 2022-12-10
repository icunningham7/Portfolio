import React from 'react';

function Nav({ currentPage, handlePageChange }) {
    return (
        <menu>
            <ul className='nav nav-tabs'>
                <li>
                    <a href="#about" onClick={() => handlePageChange('About')}>About Me</a>
                </li>
                <li>
                    <a href="#projects" onClick={() => handlePageChange('Projects')}>Projects</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => handlePageChange('Resume')}>Resume</a>
                </li>
            </ul>
        </menu>
    )
};

export default Nav;