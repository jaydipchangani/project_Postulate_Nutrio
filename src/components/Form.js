import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function From() {

    const [name,setName]= useState('');
    const [mobile,setMobile]= useState('');
    const [address,setAddress]= useState('');
    const [city,setCity]= useState('');
    const [state,setState]= useState('');

    const handleSubmit = () =>{
        if(name.length === 0){
            alert('Name is Empty');
        }
        else if(mobile.length === 0){
            alert(' Mobile is Empty');
        }
        else if(address.length === 0){
            alert(' address is Empty');
        }
        else if(city.length === 0){
            alert(' city is Empty');
        }
        else if(state.length === 0){
            alert(' state is Empty');
        }
        else{
            const url = 'http://localhost/test/formsubmit.php';
            let fData = new FormData();
            fData.append('name', name);
            fData.append('mobile', mobile);
            fData.append('address', address);
            fData.append('city', city);
            fData.append('state', state);
            axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
        }
    }


    return(
        <div className='form'>
            <Navbar/>

            <div className='form1'>
                <h1>Shipping </h1>

                <div className='main_form'>

                <form>
                    <label><h2>Name</h2></label>
                    <input  className='name' type='text' id='name' placeholder='Enter Name' name='name' value={name} onChange={(e) => setName(e.target.value)}/>

                    <label><h2>Mobile Number</h2></label>
                    <input  className='name' type='number' id='mobile' placeholder='Enter Mobile number' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />

                    <label><h2>Address</h2></label>
                    <input  className='name' type='text' id='address' placeholder='Enter Address' name='address' value={address} onChange={(e) => setAddress(e.target.value)} />

                    <label><h2>City</h2></label>
                    <input  className='name' type='text' id='city' placeholder='Enter City' name='city' value={city} onChange={(e) => setCity(e.target.value)}/>

                    <label><h2>State</h2></label>
                    <input  className='name' type='text' id='state' placeholder='Enter State' name='state' value={state} onChange={(e) => setState(e.target.value)}/>

                    <lable><h2>Total Payment</h2></lable>
                    <h3> ₹ 349.99</h3>

                    <lable><h2>Payment Method</h2></lable>
                    <h3> Cash on Delivery</h3>


                    <input className='submit_btn' type='submit' name='submit' id='submit' onClick={handleSubmit}/>
                </form>
                </div>
                
            </div>

            <div className='form2'>
                <p>

                <h1>Crunchy Peanut Butter</h1>
                <img src='./image/cru1.jpg' className='form_img' alt='img'/>
                <p>Nutrio All Natural Raw Peanut Butter 1Kg(Crunchy) Unsweetened</p>
                <strike>₹ 499.99</strike>
                <h2>₹ 349.99</h2>

                </p>
            </div>

            <Footer/>

        </div>
    )
};
