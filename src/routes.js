import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from '../src/user/Signin';
import Signup from "../src/user/Signup";
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import AdminRoute from './auth/AdminRoutes';
import PrivateRoute from './auth/PrivateRoutes';
import Home from "./core/Home";
import AdminDashboard from './user/AdminDashboard';
import Dashboard from './user/UserDahboard';
import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;