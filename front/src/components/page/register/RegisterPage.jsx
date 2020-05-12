import React from "react";
import "./registerPage.css";
import RegisterForm from "./registerForm/RegisterForm";
import {Link} from 'react-router-dom'; 



const RegisterPage = () => {
    
    return(
        <>
            <div className="register">
                <h3>Регистрация</h3>
                <RegisterForm/>
            </div> 
        </>   
    )

};

export default RegisterPage;