import React from 'react'
import './Footer.css'

export default function Footer() {
    return(
        <div className='footer'>
            <div className='foot1'>
                    <img className='foot_logo' src='./image/logo.png' alt='logo'/>
                    <h3>"Forget bland, boring health food. We're serving up flavor explosions that nourish you from the inside out. <br/>No chemicals, just pure deliciousness. What are you waiting for?"</h3>
            </div>

            <div className='foot2'>
                    <ul>
                        <li>HOME</li>
                        <li>PRODUCTS</li>
                        <li>RECIPES</li>
                        <li>ABOUT US</li>
                    </ul>
            </div>


            <div className='foot3'>
                <h2>CONTACT US</h2>
                    <ul>
                        <li>PH: +917698630446</li>
                        <li>WE ARE AVAILABLE MONDAY TO SATURDAY; 10 AM - 6:00 PM.</li>
                        <li>EMAIL: HELLO@NUTRIO.IN</li>
                        <li>WE TRY TO RESPOND WITHIN 48 HOURS.</li>
                    </ul>
            </div>
            
                <p>Copyright © Nutrio 2024</p>
            
            
            
        </div>
    )
};
