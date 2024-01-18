import React, { useEffect } from 'react';
import './Listing.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Listing() {
    useEffect(()=>{
        AOS.init({duration:2000})
    })

    function crunchy() {
        return window.location.replace('https://shorturl.at/eglqK');;
      }

    function choco() {
        return window.location.replace('https://shorturl.at/brwL5');;
      }
      
    function qunioa() {
        return window.location.replace('https://shorturl.at/hjPTX');;
      }

      
    return(
        
        <div className='list'>

        <div className='pro_main' >
                <img src='./image/listbg1.png' alt='List BG'/>
        </div>

            <div className='product_list' data-aos="fade-up">
                <div className='pro1'>
                    
                </div>

                <div className='pro2'>
                    <h2>Unsweetened Peanut Butter</h2>
                    <p>Just high-quality, slow-roasted peanuts. That's all!
                    <br/><br/>Premium ‘Java’ peanuts, we only pick the freshest lot! (pink skin = fresh)</p>
                </div>

                <div className='pro3'>
                    <img className='cru1' src='./image/cru1.jpg' alt='cruch 1kg'/>
                    <p>
                        <h3>Nutrio All Natural Raw Peanut Butter 1Kg(Crunchy) Unsweetened</h3>
                        <Link className='link_nav' to='/form'><button className='buy_btn_cru'>Buy Now</button></Link>
                    </p>
                </div>
                    
                <div className='pro3'>
                    <img className='cru1' src='./image/cru500.jpg' alt='cruch 1kg'/>
                    <p>
                        <h3>Nutrio 100% Natural Peanut Butter Unsweetened 500gm (Crunchy)</h3>
                        <button className='buy_btn_cru' onClick={crunchy}>Buy Now</button>
                    </p> 
                </div>

                <div className='pro1'>
                    
                </div>
            </div>


            {/* this is Second div of Chocolate pb */}
            <div className='product_list' data-aos="fade-up">
                <div className='pro1'>
                    
                </div>

                <div className='pro2_choco'>
                    <h2>Dark Chocolate Peanut Butter</h2>
                    <p>Made with 100% real chocolate. <br/><br/>We make our own chocolate, in-house! And pour it in abundance over slow-roasted peanuts, and whole dates. </p>
                </div>

                <div className='pro3'>
                    <img className='cru1' src='./image/choco1.jpg' alt='cruch 1kg'/>
                    <p>
                        <h3>Nutrio Chocolate Peanut Butter 1kg Creamy (Chocolaty Flavour)</h3>
                        <button className='buy_btn_choco' onClick={choco}>Buy Now</button>
                    </p>
                </div>
                    
                <div className='pro3'>
                    <img className='cru1' src='./image/choco500.jpg' alt='cruch 1kg'/>
                    <p>
                        <h3>Nutrio Chocolate Peanut Butter 500gm (Chocolaty Flavor)</h3>
                        <button className='buy_btn_choco' onClick={choco}>Buy Now</button>
                    </p> 
                </div>

                <div className='pro1'>
                    
                </div>
            </div>


            {/* this is third div of qunioa */}
            <div className='product_list' data-aos="fade-up">
                <div className='pro1'>
                    
                </div>

                <div className='pro2_qunioa'>
                    <h2>Super Food <br/> Quinoa</h2>
                    <p>Quinoa may be a small seed, but <br/>it is full of nutrients that can <br/>help men and women of all ages live a better life. </p>
                </div>

                <div className='pro3'>
                    <img className='cru1' src='./image/qunioa1.jpg' alt='cruch 1kg'/>
                    <p>
                        <h3>Nutrio 100% Organic <br/>Quinoa Grain 1 KG (White) <br/> 15% Protein</h3>
                        <button className='buy_btn_qunioa' onClick={qunioa}>Buy Now</button>
                    </p>
                </div>
                    
                <div className='pro3'>
                    <img className='cru1' src='./image/qunioa500.jpg' alt='cruch 1kg'/>
                    <p>
                        <h3>Nutrio 100% Organic<br/> Quinoa Grain 500gm (White) <br/> 15% Protein</h3>
                        <button className='buy_btn_qunioa' onClick={qunioa}>Buy Now</button>
                    </p> 
                </div>

                <div className='pro1'>
                    
                </div>
            </div>
            
            
            
        </div>
    )
};
