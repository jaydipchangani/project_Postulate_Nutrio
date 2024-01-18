import React from 'react';
import './Root.css';

export default function Root() {
    return(

        <div className='main_root'>
            <p className='root_p'>
                    
                    <h1>Rooted in Impact</h1>
                
                    <h3>
                        Nutrio : Where taste meets grit , fueling everyday warriors <br/>with vibrant quinoa bowls  and protein-packed peanut butter .<br/> Bite-sized victories, crafted from nature's strength , to conquer any mountain.<br/> Fuel your fight , embrace the Nutrio Life !     

                        <h3><a href='.'>LEARN MORE</a> </h3>   
                    </h3>
            </p>

            <div className='root_part'>
                <p>
                <div className='root1'>
                    <div className='r1'>
                        <img className='r1_img' src='./image/happy.jpg' alt='Delivery Product'/>
                        <h1>10,000+</h1>
                        <h2>Happy Customer</h2>
                    </div>
                </div>

                <div className='root1'>
                    <div className='r1'>
                        <img className='r1_img' src='./image/delivery1.jpg' alt='Delivery Product'/>
                        <h1>25,000+</h1>
                        <h2>Order Delivered</h2>
                    </div>
                </div>

                <div className='root1'>
                    <div className='r1'>
                        <img className='r1_img' src='./image/happy1.jpg' alt='Delivery Product'/>
                        <h1>4.5 </h1>
                        <h2>High Quality Rating</h2>
                    </div>
                </div>
                </p>
            </div>

            <div>
                <p className='follow'>
                    <h1>Follow us!</h1>
                    <h3>For more recipes follow us on instagram</h3>
                    <h2>@nutriohealthfoods</h2>
                </p>
            </div>

            <div className='follow_img'>
                <div className='fwl_img1'>
                    <img className='img_f' src='./image/wrap.png' alt='erap'/>
                </div>

                <div className='fwl_img1'>
                    <img className='img_f' src='./image/paneer_qunioa.png' alt='erap'/>
                </div>

                <div className='fwl_img1'>
                    <img className='img_f' src='./image/upma.png' alt='erap'/>
                </div>

                <div className='fwl_img1'>
                    <img className='img_f' src='./image/idli.png' alt='erap'/>
                </div>

                <div className='fwl_img1'>
                    <img className='img_f' src='./image/lemon_quinoa.png' alt='erap'/>
                </div>
            </div>
        </div>
    )
};
