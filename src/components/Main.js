import React, {Component} from 'react';
import {Register} from './Register.js';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Login} from "./Login";
import Home from "./Home";

class Main extends Component {
    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to = "/"/>
        : <Login handleLoginSucceed = {this.props.handleLoginSucceed} />
    }
    getHome = () => {
        return this.props.isLoggedIn ? <Home/> : <Redirect to="/login"/>;
    }

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path = "/register" component = {Register} />
                    <Route path = "/login" render = { this.getLogin } />
                    <Route path = "/" render={this.getHome} />
                </Switch>
            </div>
        );
    }
}

export default Main;
