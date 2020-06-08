import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom'
import axios from 'axios';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
const cookieParser = require('cookie-parser');
const Home = () =>{
    let [myAnswer, setAnswer] = useState('');
    let data = 
    {
        name : 'B',
        children:
        [
            {
            name: 'F',
            children:[
                {
                name:'K',
            },
            {
                name:'L',
            },]
        },
        {
            name: 'Z',
            children:[
                {
                name:'H',
            },
            {
                name:'V',
            },]
        },
        {
            name: 'O',
            children:[
                {
                name:'P',
            },
            {
                name:'W',
            },]
        }
        ]
    };
    // might need to set this inside server to avoid cheating
    const scoreTest = (value)=>{
        const body = {
            userinfo:document.cookie,
            answer:myAnswer,
            score:1,
        }
        console.log(body)
        axios.post('/score',body)
        .then((res)=>{
            if(res.data){
                alert("you got it right! Yay!")
            }
            else{alert("sory try again")}
        }).catch(console.log)
    }
    return(
        <div>
            <h1 >Under construction</h1>
            <h3>Enter the letter for the 7th iteration</h3>
            <Tree
            data={data}
            height={400}
            width={400}
            svgProps={{transform: 'rotate(90)'}}
                />
            <input
            type="text"
            placeholder="Answer"
            // value={}
            onChange={e => setAnswer(e.target.value)}
            />
            <button 
            onClick ={scoreTest}>add score</button>
        </div>
    );

}
export default Home;