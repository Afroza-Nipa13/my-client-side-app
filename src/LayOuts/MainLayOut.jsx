import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayOut = () => {
    return (
        <div className='mx-auto w-11/12'>
            <header className=''>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <footer></footer>
            </footer>
        </div>
    );
};

export default MainLayOut;