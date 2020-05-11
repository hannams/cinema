import React from "react";
import "./loginPage.css";
import LoginForm from "./loginForm/LoginForm";
import {Link} from 'react-router-dom'; 



const LoginPage = () => {
    
    return (
        <>
            <div className="login">
                <h3>Войти</h3>
                <LoginForm/>
            </div>
        </>
    )

};

export default LoginPage;