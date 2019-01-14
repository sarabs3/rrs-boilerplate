import React from 'react';
import { Switch, Route } from "react-router-dom";
import {LoginPage} from './pages/';
import declarations from './declarations';

const {ROUTE} = declarations;

const AuthModuleRouting  = props => {
    return (
        <Switch>
            <Route path={`${ROUTE}/login`} component={LoginPage} />
            <Route path={`${ROUTE}/`} component={LoginPage} />
        </Switch>
    )
};

export default AuthModuleRouting;