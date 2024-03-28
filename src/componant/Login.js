import React, { useState } from 'react';
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigation = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6767/login-user', { email, password });
            if (response?.data?.msg === 'user exists') {
            navigation('users')
            }
            else {
                alert("Wrong credential, Check your email and password")
                setEmail('')
                setPassword('')
            }
        }
        catch (err) {
            console.error("Some error happened");
        }
    }

    return (
        <div className='body'>
            <div className='main'>
                <form >
                    <h2 className='title'>LOGIN </h2>
                    <p className='line1'>Please Enter Your Login And Password !</p>

                    <div className='up'>
                        <label className='name'>UserName: </label>
                        <input className='input' placeholder='Enter Your UserName' onChange={(e) => { setEmail(e.target.value) }} required />

                    </div>
                    <br></br>
                    <div className='up'>
                        <label className='name'>PassWord : </label>
                        <input className='input' placeholder='Enter Your PassWord' onChange={(e) => { setPassword(e.target.value) }} required />

                    </div>
                    <div className='line2'>
                        <a href="#!">Forgot password?</a>
                    </div>
                    <button className="btn" onClick={loginUser}>LOGIN</button>
                    <p className='line3'>Don't have an account? <a href='/signup'>Sign Up</a> </p>

                </form>
            </div>
        </div>
    );
};

export default Login;
