import React from 'react';
import { NavLink } from 'react-router';
import user from './../../assets/user.png'


const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
           <div className='flex gap-6 text-accent font-semibold'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/career'}>Carreer</NavLink>
           </div>
           <div className='flex gap-2'>
                <img src={user} alt="" />
                <button className='btn btn-primary'>Login</button>
           </div>
        </div>

    );
};

export default Navbar;