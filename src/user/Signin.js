import React, { useState } from 'react';
import { signin, authenticate } from "../auth/index";
import Layout from '../core/Layout';
import { Redirect } from "react-router-dom";

const Signin = () => {
    const [values, setValues] = useState({
        email: 'smart@gmail.com',
        password: 'smart123',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };


    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, error: false, loading: true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                }
                else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirectToReferrer: true
                        });
                    });
                }
            });
    };



    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Email ID</label>
                <input type="email" onChange={handleChange('email')}
                    className="form-control" value={email} />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" onChange={handleChange('password')}
                    className="form-control" value={password} />
            </div>
            <button onClick={clickSubmit} className="btn btn-secondary">Submit</button>
        </form>
    )

    const showError = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                {error}
            </div>
        )
    }

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToReferrer) {
            return <Redirect to="/" />
        }
    }

    return (
        <Layout title="Sign In" description="SignIn to E-commerce website" className="container col-md-6">
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
            {/* {JSON.stringify(values)} */}
        </Layout>
    )
}

export default Signin;