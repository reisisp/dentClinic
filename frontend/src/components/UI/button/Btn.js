import React from 'react';
import './Btn.scss'


export const Btn = ({ children, ...props }) => {
    return (
        <button {...props} className='btn'>
            <span className='btn__text'>
                {children}
            </span>
        </button>
    );
};
