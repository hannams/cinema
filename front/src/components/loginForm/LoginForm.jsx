import React from "react";
import Input from "../share-component/input/Input";
import Button from "../share-component/button/Button";
import './loginForm.css';
import { Formik, Form } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="loginForm">
        <Input type="email" name="email" placeholder="Эл. почта" />
        <Input type="password" name="password" placeholder="Пароль" />
        <Button type="submit" title="Отправить" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
