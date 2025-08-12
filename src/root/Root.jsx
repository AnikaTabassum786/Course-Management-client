import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';


const Root = () => (
 

        <div className='container mx-auto'>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-308px)]'><Outlet></Outlet></div>
        <Footer />
    </div>
    
);

export default Root;