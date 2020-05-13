import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {ToastProvider} from 'react-toast-notifications'
import LoginPage from "./components/page/login/LoginPage";
import RegisterPage from "./components/page/register/RegisterPage";
import HomePage from './components/page/home/HomePage';
import Rotes from './routes/Routes';

const App = () => (
    <ToastProvider>
      <Router>
        <Rotes/>
      </Router>
    </ToastProvider>
)

export default App;
