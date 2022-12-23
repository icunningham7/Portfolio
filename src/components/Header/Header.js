import React from 'react';
import Nav from './Nav';

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header className='flex flex-wrap text-slate-100 bg-teal-900'>
            <div className='w-full py-6 px-4'>

                <nav className='relative flex flex-wrap items-center justify-between'>
                    <h1 className='mr-6 font-primary text-2xl sm:text-4xl'>
                        <a href="/" onClick={() => handlePageChange('About')}>
                            Ian Cunningham
                        </a>
                    </h1>
                    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                </nav>
                <hr className='mt-2' />
            </div>
        </header>
    );
};

export default Header;