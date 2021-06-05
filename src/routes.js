import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from '../src/user/Signin';
import Signup from "../src/user/Signup";
import AdminRoute from './auth/AdminRoutes';
import PrivateRoute from './auth/PrivateRoutes';
import Home from "./core/Home";
import AdminDashboard from './user/AdminDashboard';
import Dashboard from './user/UserDahboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;