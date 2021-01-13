import React, { Component } from 'react';
import './Style/LoginFormStyle.css';


const LoginForm = () => {

    return (
        <div className="banner_Section row col-lg-12">
            <div className="left col-lg-6 col-md-6 col-sm-12">
                <p>ereogiegr ergig reguirg regreig eig egiug egiug geurgregri ergueig ggirgug<br />wioeufhwiuf</p>
            </div>
            <div className="jumbotron right col-lg-6 col-md-6 col-sm-12 mx-auto">


                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </div>
    )

};

export default LoginForm;