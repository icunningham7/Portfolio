import React, { useState } from 'react';
import Header from './Header/Header';
import Resume from './pages/Resume';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './Footer/Footer';

export default function PortfolioContainer({pageHash}) {
    const [currentPage, setCurrentPage] = useState(pageHash);
    const renderPage = () => {
        if (currentPage === '#work') {
            return <Work />;
        }
        if (currentPage === '#contact' || currentPage === '#contact') {
            return <Contact />;
        };
        if (currentPage === '#resume' || currentPage === '#resume') {
            return <Resume />;
        };
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);
    console.log('pageHash:', {pageHash});

    console.log('currentPage:', currentPage);
    return (
        <div className='min-h-screen flex flex-col relative'>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer handlePageChange={handlePageChange} />
        </div>
    );
}


PortfolioContainer.defaultProps = {
    pageHash: '#about'
};