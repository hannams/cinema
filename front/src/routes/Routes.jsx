import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from '../components/page/login/LoginPage';
import RegisterPage from '../components/page/register/RegisterPage';
import HomePage from '../components/page/home/HomePage';
import { ProtectedRouteComponent} from './protected-route/ProtectedRouteContainer';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/login">
                <LoginPage/>
            </Route>
            <Route path="/registration">
                <RegisterPage/>
            </Route>

            <Redirect to='/'/>
        </Switch>
    )

}

export default Routes;