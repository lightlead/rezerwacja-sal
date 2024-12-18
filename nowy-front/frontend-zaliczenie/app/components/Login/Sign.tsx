/* eslint-disable react/no-unescaped-entities */
"use client"
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import React, { useState } from "react";

const Sign = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const toggleForm = () => { setIsRegistering(!isRegistering); };
    return (
        <div>
            {isRegistering ? (
                <div>
                    <div className="text-center">
                        <p>Already have a account?</p>
                        <button className="text-blue-800" onClick={toggleForm}>Sign In</button>
                    </div>
                    <RegisterForm/>
                </div>
            ) : (
                <div>
                    <div className="text-center">
                        <p>Don't have an account?</p>
                        <button className="text-blue-800" onClick={toggleForm}>Sign Up</button>
                    </div>
                    <LoginForm/>
                </div>
            )}
        </div>
    );
}

export default Sign