import React from "react";
import Input from "../../../share-component/input/Input";
import Button from "../../../share-component/button/Button";
import './loginForm.css';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";
import PropTypes from 'prop-types';

const LoginForm = ({loginUser}) => {
    const {addToast } = useToasts();
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().email("Неверная эл. почта").required("Обязательно"),
        password: Yup.string()
          .max(15, "Должно быть 15 или меньше символов")
          .required("Обязательно"),
      })}
      onSubmit={(values, action) => {
        console.log(values);
        const user = {
          password: values.password,
          username: values.email,
        };
        loginUser(user) 
        .then(() => {
          action.resetForm();
          addToast("Вход выполнен", {
              appearance: "success",
              autoDismiss: true,
          });
        })
        // addToast("Вход выполнен", {
        //     appearance: "success",
        //     autoDismiss: true,
            
        // })
      }}
    >
      <Form className="form__group">
        <Input type="email" name="email" placeholder="Эл. почта" />
        <Input type="password" name="password" placeholder="Пароль" />
        <Button type="submit" title="Отправить" />

        <p className="form__message">Нет аккаунта? Зарегистрируйтесь сейчас.</p>
      </Form>
    </Formik>
  );
};

LoginForm.propType = {
  loginUser: PropTypes.func.isReqired,
}

export default LoginForm;
