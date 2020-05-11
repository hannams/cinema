import React from "react";
import "./registerPage.css";
import RegisterForm from "../../registerForm/RegisterForm";
import {Link} from 'react-router-dom'; 



const RegisterPage = () => {
    
    return(
        <div className="form">
            <p>Регистрация</p>
            <RegisterForm/>
        <div className="registration">
            {/* <p>Нет аккаунта? <Link to="/signup">Зарегистрируйтесь сейчас</Link></p> */}
        </div>
        </div>    
    )

};

export default RegisterPage;