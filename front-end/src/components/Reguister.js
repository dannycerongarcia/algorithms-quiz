import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import{connect} from 'react-redux';
import './CSS/reguister.css'
import { setEmail } from '../redux/actions/userActions';
import axios from 'axios';



const Reguister =()=>{

    let [myEmail,setMyEmail] = useState('');
    let [myUser,setMyUser] = useState('');
    let [myPassword,setMyPassword] = useState('');
    let [reguisterCheck, setReguisterCheck] = useState(false);

    const submitData = ()=>{
        if(myPassword!==''&&myEmail!==''&&myUser!==''){
            const body = {
                username: myUser,
                email:myEmail,
                password: myPassword,
            };
            axios.post('/reguisterUser',body)
            .then((res)=>{
                if(res) setReguisterCheck(reguisterCheck= true);
                else{
                    alert("There is a user with the same cresentials");
                }
            }).catch(console.log)
            
        }
        else{
            alert('Please fill out all form');
        }
        
    }

    if(reguisterCheck){
        return <Redirect to='/'/>;
    }

    return(
    <div className="reguister-background">
        <div className="container">
            <div className="row">

                <div className="col-4"><div className="side-image"></div></div>
                <div className="col-6">
                    
                    <div className="reguister-box">
                        <h1>Sign-up</h1>
                        <p className="reguister-text">Email:</p>
                        <div className="laMargin">
                        <input
                        
                        class="form-control"
                        type="text"
                        placeholder="example@gmail.com"
                        
                        onChange={e => setMyEmail(myEmail=e.target.value)}
                        />
                        </div>
                       
                        <p className="reguister-text">Username:</p>
                        <div className="laMargin">
                        <input
                        class="form-control"
                        type="text"
                        placeholder="IamGroot"
                        value={myUser}
                        
                        onChange={e => setMyUser(myUser= e.target.value)}
                        />
                        </div>
                        
                        <p className="reguister-text">Password:</p>
                        <div className="laMargin">
                        <input
                        
                        type="password"
                        class="form-control"
                        placeholder="abc1234"
                        
                        onChange={e => setMyPassword(myPassword=e.target.value)}
                        />
                        </div>
                        <div className="reguiter-button"><button
                        onClick={submitData}>Reguister</button></div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    </div>)
}
export default Reguister;