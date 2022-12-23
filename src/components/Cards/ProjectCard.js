import React from 'react';

const PortfolioCard = ({ title, description, cardSize = '', repoLink, demoLink = repoLink, imageSrc, imageAlt = description }) => {
    console.log(repoLink);

    return (
        <div className={`project inline overflow-clip relative  ${cardSize === 'lg' ? 'feature col-span-full' : 'col-span-full sm:col-span-1 h-64'}`}>
                        <a href={repoLink}>
            <i className='fa-brands fa-github fa-4x z-10 absolute top-6 right-4 text-teal-700 hover:text-teal-900'></i></a>
            <a  href={demoLink} className='group'>
                <figure className={`overlay overflow-clip inline-block w-full h-full bg-teal-900 border-2 border-teal-900  ${cardSize === 'lg' ? 'feature max-h-128 sm:min-h-96' : ''}`}>
                    <img className={`feature object-cover object-left-top overflow-clip hover:opacity-80 ${cardSize === 'lg' ? '' : 'h-64 w-full sm:min-w-64'}`} src={imageSrc} alt={imageAlt} />
            
                <div className="hidden group-hover:block project-details absolute bottom-4 bg-teal-900 text-slate-100 p-4">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    </div>
                </figure>
            
            </a>

        </div>
    );
};

export default PortfolioCard;