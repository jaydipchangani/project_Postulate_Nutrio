import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar()
{
    return(
        <div className='nav_fix'>
            <div className='discount'>
                <marquee><a href='/'>Exes are temporary, good deals are forever ♾️. Take advantage of this one, it's !</a></marquee>
            </div>
            
            <div className='frs_nav'>   
                <a href='/'><img className="logo" src='./image/logo.png' alt='Logo'/></a>
            </div>

            <div className='sec_nav'>
                <ul>
                    <li><Link className='link_nav' to='/'><b>HOME</b></Link></li>
                    <li><Link className='link_nav' to='/product'><b>PRODUCTS</b></Link></li>
                    <li><Link className='link_nav' to='https://shorturl.at/apzGJ'><b>RECIPES</b></Link></li>
                </ul>
            </div>

        </div>
    )
    
}