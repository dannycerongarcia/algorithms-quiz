import React, { useState } from 'react';
import './CSS/Login.css'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// importing redux variables and function
import {setEmail,setIsLoggedIn} from '../redux/actions/userActions';
import axios from 'axios';
import md5 from 'md5';

const Login = ({dispatch, email,isLoggedIn}) => {

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
        if(email===''&&myPassword===''){
            alert('Please enter your username and password');
        }
        else{
            
            axios.post('/loginUser',body,options)
            .then((res)=>{
                if(res.data){
                    dispatch(setIsLoggedIn(true));
                }
                else{
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
        return <Redirect to='/home'/>;
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
                                onClick = {verify}>
                                    Login
                                </button>
                                <div  >
                                <a href="/reguister">Sign-Up</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
       </div>
    )
}
const mapStateToProps = state =>({
    email: state.userReducer.email,
    isLoggedIn: state.userReducer.isLoggedIn,
});
export default connect(mapStateToProps)(Login);