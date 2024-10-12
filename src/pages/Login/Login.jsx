import React, { useState } from "react";
import './Login.css'
import assets from '../../assets/assets'
import { signup, login } from '../../config/firebase'



const Login = () => {


    const [currState, setCurrState] = useState("Sign Up")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (currState === "Sign Up") {
            signup(userName, email, password)
        } else {
            login(email, password)
        }

    }


    return <div className="login">
        <img src={assets.logo_big} alt="logo-icon" className="logo" />
        <form onSubmit={onSubmitHandler} className="loginForm">
            <h2>{currState}</h2>
            {currState === "Sign Up" ? <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder="User Name" className="formInput" required /> : null}
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email Address" className="formInput" required />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="formInput" required />
            <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
            <div className="loginTerm">
                <input type="checkbox" />
                <p>Agree to the terms of use & privacy policy</p>
            </div>
            <div className="loginForgot">

                {
                    currState === "Sign Up" ? <p className="loginToggle">
                        Already have an account?<span onClick={() => setCurrState("Login")}> Login here</span>
                    </p> : <p className="loginToggle">
                        Create an Account<span onClick={() => setCurrState("Sign Up")}> Click here</span>
                    </p>
                }


            </div>
        </form>
    </div>;
};

export default Login;
