import React from "react";
import Input from "../../../share-component/input/Input";
import Button from "../../../share-component/button/Button";
import './loginForm.css';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useToasts } from "react-toast-notifications";

const LoginForm = () => {
    const {addToast } = useToasts();
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
        addToast("Вход выполнен", {
            appearance: "success",
            autoDismiss: true
        })
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

export default LoginForm;
