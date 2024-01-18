import React from 'react';
import './Goodsection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Goodsection() {
    return(
        <div className='goods_main'>
            <h1 className='goods'>Our Goods</h1>
            <h1 className='goods_tag'>Crafted with care, sourced with conscience,<br/> Nutrio brings delicious, better-for-you snacks to your table.</h1>

            <div className='goods_main'>
                <div className='g1'>

                </div>
                <div className='g2'>
                    <p className='pcenter'>
                        <img className="goods1" src='./image/goods1.jpg' alt='pb' data-aos="zoom-in"/>
                        <h2 className='heading'>Nutrio Peanut Butter</h2>
                        <div className='inner'>
                            <h4>Our peanut butter is safely made to meet your goals. It is made with 100% Indian grown peanuts and a blend of naturally delicious ingredients.</h4>
                        </div>
                        <a href='https://shorturl.at/tPTW1'><button className='goods_btn'>SHOP NOW</button></a>
                        </p>
                </div>

                <div className='g2'>
                    <p className='pcenter'>
                        <img className="goods1" src='./image/goods2.jpeg' alt='pb' data-aos="zoom-in"/>
                        <h2 className='heading'>Nutrio Peanut Butter</h2>
                        <div className='inner'>
                            <h4>Tiny Nutrio quinoa packs a giant punch!  Full of complete protein, fiber & vital minerals, it boosts anyone's diet, every meal, wherever you roam. ✨</h4>
                        </div>
                        <a href='https://shorturl.at/tPTW1'><button className='goods_btn'>SHOP NOW</button></a>
                    </p>
                </div>
                
                <div className='g1'>

                </div>
            </div>
        </div>
    )
};
