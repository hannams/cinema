import React from "react";
import "./loginModal.css";
import {useFormik, Formik} from "formik";
import * as Yup from "yup";
import Button from '../share-component/button/Button';
import Input from '../share-component/input/Input';

const LoginModal = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
          }),
          onSubmit: values => {
            console.log('hh');      
        },
    });

    
    return(
        <div className="modal">
            
            <form className="form" onSubmit={formik.handleSubmit}>
            <p>Войти</p>
            {/* <label htmlFor="email"></label>
            <input type="text"
                name="email"
                id="email"
                placeholder="Эл. почта"
                onChange={formik.handleChange}
                value={formik.values.email}/>
                />
            
            <label htmlFor="password"></label>
            <input type="password"
                name="password"
                id="password"
                placeholder="Пароль"
                onChange={formik.handleChange}
                value={formik.values.password}/>
                /> */}
            <Input type="text"
                name="email"
                id="email"
                placeholder="Эл. почта"
                onChange={formik.handleChange}
                value={formik.values.email}></Input>
                />
            <Button className="btn login-btn" text='Отправить'></Button>
            {/* <button className="loginModal__btn" type="submit">Отправить</button> */}
        </form>
        <div className="registration">
            <p>Нет профиля?</p>
            <a href="">Зарегистрируйтесь сейчас.</a>
        </div>
        </div>    
    )


};

export default LoginModal;