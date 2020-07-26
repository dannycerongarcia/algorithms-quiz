import React, { useState } from 'react';
import './CSS/Login.css'
import './CSS/footer.css'
import './CSS/logos.css'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// importing redux variables and function
import { setEmail, setIsLoggedIn } from '../redux/actions/userActions';
import axios from 'axios';
import md5 from 'md5';

const Login = ({ dispatch, email, isLoggedIn }) => {

    let [myPassword, setPassword] = useState('');
    const updatePassword = (password) => {
        setPassword(myPassword = password);
    };

    const options = {
        withCredentials: true
    };
    // let[isLoggedIn,setIsLogged] = useState(false)

    const verify = () => {
        document.cookie = `username=${email}`;//set cookies with key/value pairs
        document.cookie = `password=${md5(myPassword)}`; //set cookies with key/value pairs
        const body = {
            username: email,
            password: myPassword,
        };
        if (email === '' && myPassword === '') {
            alert('Please enter your username and password');
        }
        else {

            axios.post('/loginUser', body, options)
                .then((res) => {
                    if (res.data) {
                        dispatch(setIsLoggedIn(true));
                    }
                    else {
                        alert('incorrect credential \n\ntry again \n     or \nsign up');
                    }
                }).catch(console.log)
        }
    };

    const updateEmail = (newEmail) => {
        if (newEmail.length < 20) {
            dispatch(setEmail(newEmail))
        }
    };

    if (isLoggedIn) {
        console.log("login test is set to true");
        return <Redirect to='/home' />;
    }

    return (

        <div className="wallpaper">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Algorithms quiz</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col">
                        <div className="Black-tranparent-box">
                            <h2 className="sign-in-text">Sign in</h2>
                            <div className="login ">
                                <div className>
                                    {/* email input */}
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Username"
                                        value={email}
                                        onChange={e => updateEmail(e.target.value)}
                                    />
                                </div>

                                <div className="input-boxes">
                                    {/* password input */}
                                    <input
                                        class="form-control"
                                        type="password"
                                        placeholder="Password"
                                        // value={myPassword}
                                        onChange={e => updatePassword(e.target.value)}
                                    />
                                </div>
                                <div  >
                                    <button className="login-b"
                                        onClick={verify}>
                                        Login
                                    </button>

                                    <div  >
                                        <a href="/reguister"><button className="login-b"
                                            onClick={console.log}>Sign Up</button></a>
                                    </div>
                                    <br />
                                    <a className="white-letters" href='/home'>
                                        <h6>Continue as guest</h6>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            <div className="login-footer">
                {/* need a better looking footer */}
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <h6>CONTACT</h6>
                        <p>Author: Danny Daneth Ceron Garcia.</p>
                        <p>EMAIL: <a href="mailto: dannycerongarcia@gmail.com?subject = Feedback&body = Message">dannycerongarcia@gmail.com</a></p>
                    </div>
                    <div className="col-lg-8 col-sm-6">
                        <div className="row">
                            <a href="https://github.com/dannycerongarcia"><div className="dark-github"></div></a>
                            <a href="https://www.linkedin.com/in/danny-ceron-garcia-1a3553103?challengeId=AQFWhidgrZO1OAAAAXN1knuQKlD_DzHR-4047_hddn46K33CbQwNqTEyf-z_airUyJydnxzNI_rabio5wRQxhkzNz8ESRsVH7A&submissionId=bd72ed4b-c204-2416-9872-cac84400c22e"><div className="linked-in"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    email: state.userReducer.email,
    isLoggedIn: state.userReducer.isLoggedIn,
});
export default connect(mapStateToProps)(Login);