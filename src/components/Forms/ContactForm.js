import React, { useState } from 'react';

function ContactForm(props) {
    const [inputs, setInputs] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit(inputs);

        setInputs(values => ({...values, name: '', email: '', message: ''}))
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }


    return (
        <form onSubmit={handleSubmit} className='max-w-2xl mx-auto sm:mx-0'>
        <div className='mb-4'>
            <label htmlFor='contactName' className='block text-slate-700 mb-2'>Name</label>
            <input onChange={handleChange} id="contactName" type='text' name='name' placeholder='Your name' className='form-input shadow border-2 rounded w-full py-2 px-3 bg-slate-100 text-slate-700 outline-0 valid:border-slate-500 required:border-red-500 invalid:border-red-500' required></input>
        </div>
        <div className='mb-4'>
            <label htmlFor='contactEmail' className='block text-slate-700 mb-2'>Email</label>
            <input onChange={handleChange} id="contactEmail" type='email' name='email' placeholder='Your name' className='shadow border-2 rounded w-full py-2 px-3 bg-slate-100 text-slate-700 outline-0 valid:border-slate-500 required:border-red-500 invalid:border-red-500' required></input>
        </div>
        <div className='mb-4'>
            <label htmlFor='contactMessage' className='block text-slate-700 mb-2'>Message</label>
            <textarea onChange={handleChange} id="contactMessage" type='text' name='message' className='form-textarea shadow border-2 rounded w-full py-2 px-3 bg-slate-100 text-slate-700 outline-0 valid:border-slate-500 required:border-red-500 invalid:border-red-500' placeholder='Your comment here' required></textarea>
        </div>
        <div className='mb-4'>
            <button id="contactSubmit" type='submit' className='shadow border-2 rounded w-full py-2 px-3 bg-teal-900 hover:bg-teal-700 text-slate-50'>Submit</button>
        </div>
    </form>
)

}

export default ContactForm;