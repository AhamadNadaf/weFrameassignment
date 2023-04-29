import React from 'react';
import './home.css'
import Sidebar from './sidebar/sidebar';
import HomePage from './pages/homePage';
const Home = () => {

    return (
        <div className='recurring_invoices'>
            <div className='grids'>
                <Sidebar />
                <HomePage />
            </div>       
            
        </div>
    )
}

export default Home;