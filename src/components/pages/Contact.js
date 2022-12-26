import React from 'react';
import ContactForm from '../Forms/ContactForm';

const Contact = () => {
    return (
        <main className='justify-self-start pt-10'>
            <section className='w-4/5 m-auto flex flex-col sm:flex-row'>
                <div className="section-header sm:pt-10 sm:w-[13%] sm:mr-[2%] text-right">
                    <h2 className='text-3xl sm:text-xl'>
                        Contact
                    </h2>
                </div>
                <div className='section-body project-list sm:pl-[3%] border-t-2 mt-4 pt-4 sm:pt-0 sm:mt-0 sm:border-t-0 sm:border-l-2 border-teal-900'>
                    <ContactForm />
                </div>
            </section>
        </main>
    );
};

export default Contact;