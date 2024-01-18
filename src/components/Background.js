import React from 'react';
import './Background.css'

export default function Background() {
    function choco() {
        return window.location.replace('https://shorturl.at/brwL5');;
      }
      
    return(
        <div className='bgdiv'>
            <img className='bg' src='./image/bg1.png' alt='background'/>
            <h1 className='bg_tagline'>We're not fancy, <br/>just pure, <br/>nut-crushing delicious.</h1>
            <button className='btn_buy' onClick={choco}><a href='/'>BUY NOW</a></button>
        </div>
        
    )
};
