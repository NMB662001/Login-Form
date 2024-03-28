import React, { useState } from 'react';
import './signup.css';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigation = useNavigate()
    const [name, setname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onSignUpClick = async () => {
        try {
            const response = await axios.post('http://localhost:6767/create-user', { name, phone, email, password })
            if (response) {
                setEmail('')
                setPassword('')
                setPhone('')
                setname('')
                alert("User has been created")
                navigation('/')

            }
        }
        catch (err) {
            console.error(err);
        }

    }

    return (
        <div className='body'>
            <div className='main'>

                <h2 className='title'>SIGN UP</h2>
                <p className='line1'>Please Enter Your Details</p>

                <div className='up'>
                    <label className='name'>Name:</label>
                    <input className='input' onChange={(e) => { setname(e.target.value) }} type='text' placeholder='Enter Your Name' required />
                </div>
                <br />
                <div className='up'>
                    <label className='name'>Email:</label>
                    <input className='input' onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder='Enter Your Email' required />
                </div>
                <br />
                <div className='up'>
                    <label className='name'>Phone Number:</label>
                    <input className='input' onChange={(e) => { setPhone(e.target.value) }} type='tel' placeholder='Enter Your Phone Number' required />
                </div>
                <br />
                <div className='up'>
                    <label className='name'>Password:</label>
                    <input className='input' onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Enter Your Password' required />
                </div>
                <div className='line2'>
                    <a href="#!">Forgot password?</a>
                </div>
                <div>
                    <button className='btn' onClick={onSignUpClick} type='submit'>SIGN UP</button>
                </div>
                <div className='icons'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaGoogle />
                </div>
                <p className='line3'>Already have an account? <a href='/'>Log In</a></p>

            </div>
        </div>
    );
};

export default SignUp;
