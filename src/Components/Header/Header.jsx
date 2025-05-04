import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='max-w-sm mx-auto text-center mt-3'>
            <img src={logo} alt="" />
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>
            <p className='text-accent'><span className='font-semibold'>{format(new Date(), "EEEE, ")}</span>{format(new Date(), "LLLL dd, yyyy")}</p>
        </div>
    );
};

export default Header;