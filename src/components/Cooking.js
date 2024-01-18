import React, { useEffect } from 'react';
import './Cooking.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Cooking() {
    useEffect(()=>{
        AOS.init({duration:2000});
    })

    return(
        <div className='ck' >
            <img className='paper' src="./image/paper.png" alt='paper' />
            <div className='paperbg'>
                <p className='paper_p'>
                    
                        <h1 className='paper_h1' >Cooking with Nutrio</h1>
                    
                        <h3 className='paper_h3'>View other drafts
                            Craving healthy, yummy eats & drinks?  Dive into our recipe <br/>treasure trove made with Nutritious Peanut Butter and Quinoa!  We've got <br/>something for everyone, from our own creations to yours(all brimming with goodness!).<br/>  Vegan, Paleo, Whole30, Keto - you name it, we've got it!    Let's fuel our bodies with deliciousness!
                        </h3>
                        <div className='inner_cook'>

                        <div className='cook1'>

                        </div>

                        <div className='cook2'>
                            <div className='cook_inner'>
                                <img className='cook_img' src='./image/idli.png' alt='ildi' data-aos="fade-up"/>
                                <h3>Quinoa idli dosa</h3>
                            </div> 
                         </div>

                        <div className='cook2'>
                            <div className='cook_inner'>
                                <img className='cook_img' src='./image/upma.png' alt='upma' data-aos="fade-up"/>
                                <h3>Nutrio Quinoa Upma</h3>
                            </div>
                        </div>

                        <div className='cook2'>
                            <div className='cook_inner'>
                                <img className='cook_img' src='./image/wrap.png' alt='wrap' data-aos="fade-up"/>
                                <h3>Qunioa Black Bean wrap</h3>
                            </div>
                        </div>

                        <div className='cook2'>
                            <div className='cook_inner'>
                                <img className='cook_img' src='./image/lemon_quinoa.png' alt='paneer_qunioa' data-aos="fade-up"/>
                                <h3>Lemon Quinoa </h3>
                            </div>
                        </div>

                        <div className='cook1'>

                        </div>

                        <a href='https://shorturl.at/apzGJ'><button className='cook_btn'><b>VIEW ALL</b></button></a>
                    </div>
                    
                </p>
                
            </div>

            <img src='./image/down-paper.png' className='downpaper' alt='Down paper'/>
            <hr className='btw_cook'/>
                <hr className='btw_cook1'/>
                <hr className='btw_cook'/>
                <hr className='btw_cook2'/>


            <div className='goodness'>
                <p className='good_p'>
                    <h4>BEHIND OUR PRODUCTS</h4>
                    <h1><b>The Goodness Starts Here</b></h1>
                </p>

                
                    <div className='main_qunioa'>
                        <div className='img_qunioa'>
                            <img className='qimage' src='./image/qunioa_plant.jpg' alt='quinoa plant' data-aos="fade-up-right"/>
                        </div>

                        <div className='text_qunioa'>
                            <h1>What is Quinoa ?</h1>
                            <h3>Quinoa isn't actually a grain, but a seed from a flowering plant related to spinach and beets!  This ancient South American superfood packs a serious nutritional punch, making it a darling of the healthy eating world. Quinoa boasts complete protein, meaning it contains all nine essential amino acids our bodies can't make on their own.  It's also a great source of fiber, iron, magnesium, and several other key vitamins and minerals. 
                            </h3>

                            <a href='/'><button className='qunioa_btn'>LEARN MORE</button></a>
                        </div>

                        
                    </div>
                
            </div>
            <hr className='btw_cook1'/>
                <hr className='btw_cook'/>
                <hr className='btw_cook2'/>
                <hr className='btw_cook1'/>
            
        </div>
    )
};
