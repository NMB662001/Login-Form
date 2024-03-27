import React from 'react';
import './login.css'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
const Login = () => {


    return (
        <div className='body'>
            <div className='main'>
                <form >
                    <h2 className='title'>LOGIN </h2>
                    <p className='line1'>Please Enter Your Login And Password !</p>

                    <div className='up'>
                        <label className='name'>UserName: </label>
                        <input className='input' placeholder='Enter Your UserName' required />

                    </div>
                    <br></br>
                    <div className='up'>
                        <label className='name'>PassWord : </label>
                        <input className='input' placeholder='Enter Your PassWord' required />

                    </div>
                    <div className='line2'>
                        <a href="#!">Forgot password?</a>
                    </div>
                    <div >
                        {/* <button className='btn' onClick={() => {
                            alert("Login Successfully!")
                        }}>LOGIN</button> */}
                        <button className="btn" type='submit'>LOGIN</button>
                    </div>
                    <div className='icons'>
                        {/* <a href='/'><FaFacebook /></a> */}
                        <FaFacebook />
                        <FaTwitter />
                        <FaGoogle />
                    </div>
                    <p className='line3'>Don't have an account? <a href='/signup'>Sign Up</a> </p>

                </form>
            </div>
        </div>
    );
};

export default Login;
