import React from 'react';

export default class HeaderButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false
        };

        this.toggleLogin = this.toggleLogin.bind(this);
    }

    toggleLogin() {
        this.setState({
            showLogin: !this.state.showLogin
        });
    }

    render() {
        return (
            <div>
                <button className="buyNow" onClick={this.toggleLogin}>
                    Login
                </button>

                {this.state.showLogin ?
                    <div className="login-page">
                        <div className="form">
                            <form className="register-form">
                                <input type="text" placeholder="name"/>
                                <input type="password" placeholder="password"/>
                                <input type="text" placeholder="email address"/>
                                <button>create</button>
                                <p className="message">Already registered? <a href="#">Sign In</a></p>
                            </form>
                            <form className="login-form">
                                <input type="text" placeholder="username"/>
                                <input type="password" placeholder="password"/>
                                <button>login</button>
                                <p className="message">Not registered? <a href="#">Create an account</a></p>
                            </form>
                        </div>
                    </div> : null}
            </div>
        );
    }
}