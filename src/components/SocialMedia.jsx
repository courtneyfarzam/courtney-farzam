import React from 'react';
import { CgFileDocument } from 'react-icons/cg';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import resume from './resume.pdf'


const SocialMedia = () => {
    return (
        <div className='app__social'>
            
            <div>
                <a href="https://github.com/courtneyfarzam" target='_blank'><AiFillGithub/></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/courtneyfarzam/" target='_blank'><FaLinkedinIn /></a>
            </div>
            <div>
                <a href="mailto:courtneyfarzam@gmail.com" target='_blank'><AiOutlineMail /></a>
            </div>
            <div>
                <a href={resume} download={'Courtney Farzam Resume'}><CgFileDocument /></a>
            </div>
        </div>
    );
};

export default SocialMedia;