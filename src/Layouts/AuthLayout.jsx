import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Login from '../Components/Login/Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='mt-4 bg-base-200 py-2 px-2 min-h-screen'>
           <header className='w-11/12 mx-auto'>
                 <Navbar></Navbar>
           </header>
           <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
           </main>
        </div>
    );
};

export default AuthLayout;