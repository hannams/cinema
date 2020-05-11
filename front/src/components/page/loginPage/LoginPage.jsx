import React from "react";
import "./loginPage.css";
import LoginForm from "../../loginForm/LoginForm";
import {Link} from 'react-router-dom'; 



const LoginPage = () => {
    
    return(
        <div className="form">
            <p>Войти</p>
            <LoginForm/>
        <div className="registration">
            {/* <p>Нет аккаунта? <Link to="/signup">Зарегистрируйтесь сейчас</Link></p> */}
        </div>
        </div>    
    )

};

export default LoginPage;