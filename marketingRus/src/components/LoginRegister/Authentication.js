import React from 'react';
import axios from 'axios';

const Authentication = App => Login => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                isLoggedIn: false,
                token: null
            }
        }

        componentDidMount() {
            if(localStorage.getItem('token')) {
                this.setState({ loggedIn: true });
                this.setState({ token: localStorage.getItem('token') });
            }
        }
        
        loginHandler = e => {
            e.preventDefault();
            let loginCredentials = {
                email: e.target[0].value,
                password: e.target[1].value
            }
            console.log("What are these login credentials?", loginCredentials);
            axios
                .post(
                    "https://soup-kitchen-backend.herokuapp.com/api/staff/login",
                    loginCredentials
                )
                .then(res => {
                    console.log(res.data);
                    this.setState({ token: res.data.token })
                    localStorage.getItem("token", res.data.token);
                    this.setState({ loggedIn: true });
                })
                .catch(err => console.error(err));
        }

        registrar = e => {
            e.preventDefault();
            const registerCredentials = {
                firstname: e.target[0].value,
                lastname: e.target[1].value,
                email: e.target[2].value,
                password: e.target[3].value,
                role: e.target[4].value
            };
            axios
                .post(
                    "https://soup-kitchen-backend.herokuapp.com/api/staff/register",
                    registerCredentials
                )
                .then(res => {
                    console.log(res.data.message);
                    this.setState({ token: res.data.token })
                    localStorage.getItem("token", res.data.token);
                    this.setState({ loggedIn: true });
                })
                .catch(err => console.error(err));
        }

        render() {
            if(this.state.isLoggedIn) {
                return <App />
            } else {
                return (
                    <Login
                        loginHandler={this.loginHandler}
                        registrar={this.registrar}
                    />
                )
            }
        }
    }
}

export default Authentication;