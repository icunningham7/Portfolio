import React from 'react';
import Nav from './Nav';

const Header = ({ currentPage, handlePageChange }) => { 
    return (
        <header>
            <div>
                <a href="/" onClick={() => handlePageChange('Home')}>
                    <h1 className='font-josefin-slab'>Ian Cunningham</h1>
                </a>
            </div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
};

export default Header;