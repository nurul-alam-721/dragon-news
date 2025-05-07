import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {
    const {user, logoutUser} = use(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () =>{
        logoutUser()
        .then(()=>{
            console.log('successfully signed out');
            navigate('/auth/login');
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='flex justify-between items-center'>
            {user && <div>{user.email}</div>}
           <div className='flex gap-6 text-accent font-semibold'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/career'}>Carreer</NavLink>
           </div>
           <div className='flex gap-2'>
                <img src={user} alt="" />
                    {
                        user ?
                       <button onClick={handleLogout} className='btn btn-primary'> <Link to={'/auth/login'}>Sign Out</Link></button>
                        : 
                       <button className='btn btn-primary'> <Link to={'/auth/login'}>Login</Link></button>
                    }
           </div>
        </div>

    );
};

export default Navbar;