import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'
import axios from 'axios';
const cookieParser = require('cookie-parser');
const Home = () =>{

    // might need to set this inside server to avoid cheating
    const scoreTest = (value)=>{
        const body = {
            userinfo:document.cookie,
            score:1,
        }
        console.log(body)
        axios.post('/score',body)
        .then((res)=>{

        }).catch(console.log)
    }
    return(
        <div>
            <h1 >Under construction</h1>
            <button 
            onClick ={scoreTest}>add score</button>
        </div>
    )

}
export default Home;