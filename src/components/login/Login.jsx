import React from "react";
import './Login.css'

export default function Login() {
    return (
        <div className="main-page">
            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Enter your Email" />
                <input type="password" placeholder="Enter Password" />
                <div className="button">
                    Login
                </div>
                <div>or</div>
                <div className="button">
                   Regiter
                </div>
            </div>
        </div>
    );
}
