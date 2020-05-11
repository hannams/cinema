import React from "react";
import Input from "../share-component/input/Input";
import Button from "../share-component/button/Button";
import './registerForm.css';
import { Formik, Form } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
  const initialValues = {
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
            .min(5, "Должно быть больше 5 символв")
          .max(15, "Должно быть 15 или меньше символов")
          .required("Обязательно"),
        confirmPassword: Yup.string()
            .min(5, "Должно быть больше 5 символов")
            .max(15, "Должно быть 15 или меньше символов")
            .required("Обязательно")
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="registerForm">
        <Input type="text" name="login" placeholder="Логин" />    
        <Input type="email" name="email" placeholder="Эл. почта" />
        <Input type="password" name="password" placeholder="Пароль" />
        <Input type="password" name="confirmPassword" placeholder="Подтвердите пароль" />
        <Button type="submit" title="Отправить" />
      </Form>
    </Formik>
  );
};

export default RegisterForm;
