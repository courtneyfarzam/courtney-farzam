import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        };

        client.create(contact).then(() => {
            setLoading(false);
            setIsFormSubmitted(true)
        });
    }

    return (
        <>
            <h2 className='head-text'>Let's Make Something <span>Together</span></h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt='email' />
                    <a href='mailto:courtneyfarzam@gmail.com' className='p-text'>
                        courtneyfarzam@gmail.com
                    </a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt='mobile' />
                    <a href='tel: +1 (901) 828-6435' className='p-text'>
                        +1 (901) 828-6435
                    </a>
                </div>
            </div>

            {!isFormSubmitted ? (
            <div className='app__footer-form app__flex'>

                <div className='app__flex'>
                    <input 
                        type='text' 
                        placeholder='Your Name' 
                        name='name' value={name} 
                        onChange={handleChangeInput} 
                        className='p-text' 
                    />
                </div>

                <div className='app__flex'>
                    <input 
                        type='email' 
                        placeholder='Your Email' 
                        name='email' 
                        value={email} 
                        onChange={handleChangeInput} 
                        className='p-text' 
                    />
                </div>

                <div>
                    <textarea 
                        className='p-text'
                        placeholder='Your Message'
                        value={message}
                        name='message'
                        onChange={handleChangeInput}
                    />
                </div>

                <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
            </div>
            ) : (
                <div>
                    <h3 className='head-text'>Thank you for getting in touch!</h3>
                </div>
            )}

            <div className='copyright'>
                <p className='p-text'>Made with 💖 and Javascript</p>
                <p className='p-text'>@2023 COURTNEY</p>
                <p className='p-text'>All rights reserved.</p>
            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__primarybg'
);