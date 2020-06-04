import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import{connect} from 'react-redux';
import './CSS/reguister.css'

const Reguister =()=>{
    return(
    <div className="reguister-background">
        <div className="container">
            <div className="row">

                <div className="col-3"><div className="side-image"></div></div>
                <div className="col-6">
                    
                    <div className="reguister-box">
                        <h1>Sign-up</h1>
                        <p className="reguister-text">Email:</p>
                        <div className="laMargin">
                        <input
                        class="form-control"
                        type="text"
                        placeholder="example@gmail.com"
                        
                        // onChange={e => urEmail(e.target.value)}
                        />
                        </div>
                       
                        <p className="reguister-text">Username:</p>
                        <div className="laMargin">
                        <input
                        class="form-control"
                        type="text"
                        placeholder="IamGroot"
                        
                        // onChange={e => urEmail(e.target.value)}
                        />
                        </div>
                        
                        <p className="reguister-text">Password:</p>
                        <div className="laMargin">
                        <input
                        
                        type="password"
                        class="form-control"
                        placeholder="example@gmail.com"
                        
                        // onChange={e => urEmail(e.target.value)}
                        />
                        </div>
                        <div className="reguiter-button"><button>Reguister</button></div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    </div>)
}
export default Reguister;