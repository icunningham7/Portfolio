import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm(props) {
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState({
        isInvalid: false,
        errorMessage: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        if (error.isInvalid) {
            switch (name && e.target.validity.patternMismatch && value !== '') {
                case 'name': setError(values => ({
                    ...values,
                    nameError: false,
                }));
                    break;
                case 'message': setError(values => ({
                    ...values,
                    messageError: false,
                }));
                    break;
                case 'email': setError(values => ({
                    ...values,
                    emailError: false,
                }));
                    break;
                default:
                    break;
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error.isInvalid) {
         return   
        }

        setInputs(values => ({ ...values, name: '', email: '', message: '' }));
    };

    const validateField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (e.target.validity.patternMismatch || e.target.value === '') {
            setError(values => ({ ...values, isInvalid: true }));
            switch (name) {
                case 'name':
                    if (value.length === 0) {
                        setError(values => ({ ...values, nameError: true, errorMessage: 'Please enter a name.' }));
                        console.log('name case', error.errorMessage);
                        return true;
                    }
                    break;
                case 'message':
                    if (value.length === 0) {
                        setError(values => ({ ...values, messageError: true, errorMessage: 'Please enter a message.' }));


                        console.log('message case', error.errorMessage);
                        return true;

                    }
                    break;
                case 'email':
                    if (!validateEmail(value)) {
                        setError(values => ({ ...values, emailError: true, errorMessage: 'Please enter a valid email.' }));
                        console.log('email case', error.errorMessage);
                        return true;

                    }
                    break;
                default:
                    break;
            }
        } else {
            switch (name) {
                case 'name': setError(values => ({
                    ...values,
                    nameError: false,
                    errorMessage: ''
                }));
                    break;
                case 'message': setError(values => ({
                    ...values,
                    messageError: false,
                    errorMessage: ''
                }));
                    break;
                case 'email': setError(values => ({
                    ...values,
                    emailError: false,
                    errorMessage: ''
                }));
                    break;
                default:
                    break;
            }

            if (!error.nameError && !error.messageError && !error.emailError) {
                setError(values => ({...values, isInvalid: false}))
            }
            return true;
        }
    };

    return (
        <form onSubmit={handleSubmit} className='max-w-2xl mx-auto sm:mx-0'>
            <div className='mb-4'>
                <label htmlFor='contactName' className='block text-slate-700 mb-2'>Name</label>
                <input
                    onChange={handleChange}
                    onBlur={validateField}
                    id="contactName"
                    type='text'
                    name='name'
                    value={inputs.name || ''}
                    pattern='.+'
                    placeholder='Your name'
                    className={`form-input shadow border-2 rounded w-full py-2 px-3 bg-slate-100 text-slate-700 outline-0  border-red-500 empty:border-teal-900 valid:border-teal-900 ${error.nameError ? 'bg-red-400 placeholder-slate-700' : ''}`}
                    required></input>
            </div>
            <div className='mb-4'>
                <label htmlFor='contactEmail' className='block text-slate-700 mb-2'>Email</label>
                <input
                    onChange={handleChange}
                    onBlur={validateField}
                    id="contactEmail"
                    inputMode='email'
                    type='email'
                    name='email'
                    value={inputs.email || ''}
                    pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                    placeholder='Your name'
                    className={`form-input shadow border-2 rounded w-full py-2 px-3 bg-slate-100 text-slate-700 outline-0  border-red-500 empty:border-teal-900 valid:border-teal-900 ${error.emailError ? 'bg-red-400 placeholder-slate-700' : ''}`}
                    required></input>
            </div>
            <div className='mb-4'>
                <label htmlFor='contactMessage' className='block text-slate-700 mb-2'>Message</label>
                <textarea
                    onChange={handleChange}
                    onBlur={validateField}
                    id="contactMessage"
                    type='text'
                    name='message'
                    value={inputs.message || ''}
                    pattern='.+'
                    placeholder='Your comment here'
                    className={`form-input shadow border-2 rounded w-full py-2 px-3 bg-slate-100 text-slate-700 outline-0  border-red-500 empty:border-teal-900 valid:border-teal-900 ${error.messageError ? 'bg-red-400 placeholder-slate-700' : ''}`}
                    required></textarea>
            </div>
            <div className='mb-4'>
                <button id="contactSubmit" type='submit' className='shadow border-2 rounded w-full py-2 px-3 bg-teal-900 hover:bg-teal-700 text-slate-50'>Submit</button>
            </div>
            {error.isInvalid && (<div>
                <p className='text-red-500'>{error.errorMessage}</p>
            </div>
            )}
        </form>
    );
}

export default ContactForm;