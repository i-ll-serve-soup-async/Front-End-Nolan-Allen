import React from 'react';
import {
    Redirect,
    withRouter
} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const LoginPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    // border: 1px solid maroon;
`

const LoginForm = styled.form`
    width: 30%;
    height: 20%;
    margin-top: 17%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;
`

const LoginField = styled.input`
    width: 98.4%;
    height: 30px;
    margin: 1px 0;
    outline: none;
    border: 1px solid gray;
`

const ButtonBox = styled.div`
    width: 99.7%;
    height: auto;
    margin: 1px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
    // border: 1px solid teal;
`

const Button = styled.button`
    width: 48%;
    height: 30px;
    outline: none;
    border: .5px solid gray;
`

class Login extends React.Component {
    state = {
        loggedIn: false
    }
    
    componentDidMount() {
        this.state.loggedIn ? this.getItem() : this.login();
    }
    
    login = () => {
        const credentials = {
            email: '',
            password: ''
        }
    
        axios
            .post(
                "https://soup-kitchen-backend.herokuapp.com/api/staff/login",
                credentials
            )
            .then(res => {
                console.log(res.data);
                localStorage.getItem("token", res.data.token);
                this.setState({ loggedIn: true });
            })
            .catch(err => console.error(err));
    }
    
    register = () => {
        const newuser = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            role: ''
        }
    
        axios
            .post(
                "https://soup-kitchen-backend.herokuapp.com/api/staff/login",
                newuser
            )
            .then(res => {
                console.log(res.data);
                localStorage.getItem("token", res.data.token);
                this.setState({ loggedIn: true });
            })
            .catch(err => console.error(err));
    }
    
    getItems = () => {
        let auth = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
    
        axios
            .get(
                "https://soup-kitchen-backend.herokuapp.com/api/items",
                auth
            )
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.error(err));
    }
    
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    loginHandler = e => {
        e.preventDefault();
        console.log("You clicked that button. Good job.");
        if(this.getItems.auth) {
            this.props.gateHandler({ loggedIn: this.state.loggedIn });
            this.setState({ loggedIn: true });
        }
        else {
            console.log("You do not have the necessary authorization to access this website.")
        }
    }
    
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { loggedIn } = this.state;

        if(loggedIn) {
            return <Redirect to={from} />
        }
        
        return (
            <div>
                <LoginPage>
                    <LoginForm onSubmit={this.loginHandler}>
                        <p>Please Login or Register to View Our Content</p>
                        <LoginField
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.login.email}
                            onChange={this.changeHandler}
                            required
                        />
                        <LoginField
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.login.password}
                            onChange={this.changeHandler}
                            required
                        />
                        <ButtonBox>
                            <Button
                                type="submit"
                                value="Register"
                            >Register</Button>
                            <Button
                                type="submit"
                                value="Login"
                                onClick={this.login}
                            >Login</Button>
                        </ButtonBox>
                    </LoginForm>
                </LoginPage>
            </div>
        );
    }
}

export default withRouter(Login);