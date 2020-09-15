import React, { useState } from 'react';
import './CSS/Login.css'
import './CSS/footer.css'
import './CSS/logos.css'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
// importing redux variables and function
import { setEmail, setIsLoggedIn } from '../redux/actions/userActions';
import axios from 'axios';
import md5 from 'md5';

const Login = ({ dispatch, email, isLoggedIn }) => {

    function createMarkup() {
        return { __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d405117.53148505!2d-122.21558399999996!3d37.50837300000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa03953f35ee1%3A0xb8e47b9b0baa6a6d!2sRedwood%20City%2C%20CA!5e0!3m2!1sen!2sus!4v1600159265312!5m2!1sen!2sus" width="70%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>' };
    }

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
            {/* <div className="container"> */}

            <div>
                {/* <!-- A grey horizontal navbar that becomes vertical on small screens --> */}
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark round-nav">

                    {/* <!-- Links --> */}
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">CONTACT</a>
                        </li>
                    </ul>

                </nav>
            </div>

            <div className="row">
                <div className="col">
                    <h1>Algorithms quiz</h1>
                </div>
            </div>
            <a name="top">
                <div className="row">
                    <div className="col-2"></div>
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
                    <div className="col-2"></div>
                </div>
            </a>
            {/* </div> */}
            <div className="about-backgroun">
                <a name="about">
                    <div className="row">
                        <div className="col-sm-0 col-lg-3">
                        </div>
                        <div className="col-sm-5 col-lg-3 align-text-left">
                            <br />
                            <br />
                            <h1>ABOUT</h1>
                            <div className="underline-yellow"></div>
                            <br />
                            <p>Algorithms Quiz is design to help to test and improve users skills in Algorithms</p>
                            <p>Algorithms Quiz is design to help to test and improve users skills in Algorithms</p>
                            
                        </div>
                        <div className="col-sm-5 col-lg-3">
                            <p>some stuff </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="row" className="yellow-bar"></div>

            <a name="contact">
                <div className="row white-background">
                    <div className="col"><h1 className="center-text" >CONTACT</h1>
                        <div className="underline-yellow-center"></div>
                        <br />
                    </div>
                </div>
            </a>
            <div className="row white-background"><div className="col">
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div></div>
            <div className="login-footer">
                {/* need a better looking footer */}
                <div className="row">
                    <div className="col-lg-3 col-sm-6 align-text-left">

                        <p>Author: Danny Daneth Ceron Garcia.</p>
                        <p>EMAIL: <a href="mailto: dannycerongarcia@gmail.com?subject = Feedback&body = Message">dannycerongarcia@gmail.com</a></p>
                    </div>
                    <div className="col-lg-9 col-sm-6">
                        <div className="row">
                            <a href="https://github.com/dannycerongarcia"><div className="dark-github"></div></a>
                            <a href="https://www.linkedin.com/in/danny-ceron-garcia-1a3553103?challengeId=AQFWhidgrZO1OAAAAXN1knuQKlD_DzHR-4047_hddn46K33CbQwNqTEyf-z_airUyJydnxzNI_rabio5wRQxhkzNz8ESRsVH7A&submissionId=bd72ed4b-c204-2416-9872-cac84400c22e"><div className="linked-in" /></a>
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