import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Listing from './Listing';


export default function Product() {
    return(
        <div className='product'>
            <Navbar/>
            <Listing/>
            <Footer/>
        </div>
    )
};
