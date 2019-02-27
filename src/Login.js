import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedId: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedId: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedId: false });
    }
    render() {
        const isLoggedIn = this.state.isLoggedId;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={ this.handleLogoutClick }/>;
        } else {
            button = <LoginButton onClick={ this.handleLoginClick }/>;
        }
        
        return (
            <div>
                <Greeting isLoggedIn={ isLoggedIn }/>
                { button }
            </div>
        )
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export default Login;