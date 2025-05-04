import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from './LeftAside';
import RightAside from './RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
               <section className='w-11/12 mx-auto my-4'>
               <LatestNews></LatestNews>
               </section>
               <nav className='w-11/12 mx-auto my-4'>
                    <Navbar></Navbar>
               </nav>   
            </header>
          
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 mt-10'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                   <div className='col-span-6'>
                         <Outlet></Outlet>
                   </div>
                    <aside className='col-span-3'>
                    <RightAside>

                    </RightAside>
                </aside>
            </main>
           
        </div>
    );
};

export default HomeLayout;