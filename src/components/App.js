import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import TopBar from "./TopBar";
import Main from "./Main";

import { TOKEN_KEY } from '../constants';

class App extends Component{
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
    }

    handleLoginSucceed = (token) => {
        console.log('token --- ', token)
        localStorage.setItem(TOKEN_KEY, token)
        this.setState({ isLoggedIn: true });
    }
    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({ isLoggedIn: false });
    }


    render(){
        return (
            <div className="App">
                <TopBar
                    isLoggedIn={this.state.isLoggedIn}
                    handleLogout = {this.handleLogout}
                />
                <Main
                    handleLoginSucceed={this.handleLoginSucceed}
                    isLoggedIn={this.state.isLoggedIn}
                />
            </div>
        );
    }
}

export default App;
