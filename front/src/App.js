import React from 'react';
import {Router} from 'react-router-dom';
import {ToastProvider} from 'react-toast-notifications'
import LoginPage from "./components/page/login/LoginPage";
import RegisterPage from "./components/page/register/RegisterPage";

const App = () => (
    <ToastProvider>
      <RegisterPage/>
    </ToastProvider>
)

export default App;
