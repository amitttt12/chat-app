import React, { useState } from "react";
import './Login.css'
import assets from '../../assets/assets'



const Login = () => {


    const [currState, setCurrState] = useState("Sign Up")


    return <div className="login">
        <img src={assets.logo_big} alt="logo-icon" className="logo" />
        <from className="loginForm">
            <h2>{currState}</h2>
            <input type="text" placeholder="User Name" className="formInput" required />
            <input type="email" placeholder="Email Address" className="formInput" required />
            <input type="password" placeholder="Password" className="formInput" required />
            <button type="submit">Sign Up</button>
            <div className="loginTerm">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy</p>
            </div>
            <div className="loginForgot">
                <p className="loginToggle">
                    Already have an account?<span>click here</span>
                </p>
            </div>
        </from>
    </div>;
};

export default Login;
