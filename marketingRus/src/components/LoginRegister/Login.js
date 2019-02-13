import React from 'react';
import styled from 'styled-components';

const LoginPage = styled.div`
    // width: 100%;
    // height: 100%;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    background: white;
    // border: 1px solid maroon;
`

const LoginForm = styled.form`
    width: 30%;
    height: 20%;
    margin-top: 17%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
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
    constructor(props) {
        super(props);
        this.state = {
            activeForm: 'login'
        }
    }
    
    displayFormReg = () => {
        this.setState({ activeForm: 'register' });
    }

    displayFormLog = () => {
        this.setState({ activeForm: 'login' });
    }
    
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render() {
        return (
            <div>
                <LoginPage>
                    {this.state.activeForm === "login" ? (
                        <LoginForm onSubmit={e => {
                            this.props.loginHandler(e);
                        }}>
                            <p>Please Login or Register to View Our Content</p>
                            <LoginField
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.changeHandler}
                                required
                            />
                            <LoginField
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.changeHandler}
                                required
                            />
                            <ButtonBox>
                                <Button
                                    type="submit"
                                    value="Register"
                                    onClick={this.displayFormReg}
                                >Register</Button>
                                <Button
                                    type="submit"
                                    value="Login"
                                    onClick={this.loginHandler}
                                >Login</Button>
                            </ButtonBox>
                        </LoginForm>
                    ) : (
                        <LoginForm onSubmit={e => {
                            this.props.registrar(e);
                        }}>
                            <LoginField
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                onChange={this.changeHandler}
                                required
                            />
                            <LoginField
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                onChange={this.changeHandler}
                                required
                            />
                            <LoginField
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.changeHandler}
                                required
                            />
                            <LoginField
                                type="text"
                                name="role"
                                placeholder="User's Role"
                                onChange={this.changeHandler}
                                required
                            />
                            <LoginField
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.changeHandler}
                                required
                            />
                            <ButtonBox>
                                <Button
                                    type="submit"
                                    value="Register"
                                    onClick={this.registrar}
                                >Register</Button>
                                <Button
                                    type="submit"
                                    value="Login"
                                    onClick={this.displayFormLog}
                                >Login</Button>
                            </ButtonBox>
                        </LoginForm>
                    )}
                </LoginPage>
            </div>
        );
    }
}

export default Login;