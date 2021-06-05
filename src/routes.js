import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from '../src/user/Signin';
import Signup from "../src/user/Signup";
import Home from "./core/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;