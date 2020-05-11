import React from 'react';
import {Router} from 'react-router-dom';
import {ToastProvider} from 'react-toast-notifications'
import LoginPage from "./components/page/login/LoginPage";

const App = () => (
    <ToastProvider>
      <LoginPage/>
    </ToastProvider>
)

export default App;
