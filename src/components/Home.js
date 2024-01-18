import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Background from './Background';
import Cooking from './Cooking';
import Footer from './Footer';
import Goodsection from './Goodsection'
import Root from './Root';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Home() {
    useEffect(()=>{
      AOS.init({duration:2000});
    })

    return(
        <>
      <Navbar/>
      <Background/>
      <Goodsection/>
      <Cooking/>
      <Root/>
      <Footer/>
    </>
    )
};
