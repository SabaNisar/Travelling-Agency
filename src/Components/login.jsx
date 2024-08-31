import React from "react";
import './login.css';

import {FaEnvelope, FaKey} from 'react-icons/fa'




const Login = () => {
    return(
        <div className="container">
            <div className="loginheader">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                
                <div className="input">
                    <FaEnvelope/>
                    {/* <img src={email_icon} alt="" /> */}
                    <input type="email" placeholder="Email Id" name="" id="" />
                </div>
                <div className="input">
                    <FaKey/>
                    {/*<img src={password_icon} alt="" />*/}
                    <input type="password"  placeholder="Password" name="" id="" />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">
                    Login
                </div>
            </div>
        </div>
    )
}
export default Login