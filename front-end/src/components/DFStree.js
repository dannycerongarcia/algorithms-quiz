import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import './CSS/DFStree.css'

const DFStree = () => {
    let [myAnswer, setAnswer] = useState('');
    let [myArray, setArray] = useState(['A', 'B', 'C', 'D', 'E', 'F']);
    let [check, setCheck] = useState(false);

    const loadArray = () => {
        var result = [];
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 6; i++) {
            
            while(true){

                let x = characters.charAt(Math.floor(Math.random() * charactersLength));
                
                if(!result.includes(x)===true){
                    
                    result.push(x);
                    break;
                }
            }
            
        }
        setArray(result.sort())
    }
    
    useEffect(() => {
       loadArray()
    
    },[]);
    // add empty array to render once.


    let data =
    {
        name: myArray[3],
        children:
            [
                {
                    name: myArray[5],
                    children: [
                        {
                            name: myArray[4],
                        },]
                },
                {
                    name: myArray[1],
                    children: [
                        {
                            name: myArray[2],
                        },
                        {
                            name: myArray[0],
                        },]
                },
            ]
    };
    
    const scoreTest = (value) => {

        const body = {
            userinfo: document.cookie,
            answer: myAnswer,
            score: 0,
            array: myArray,
        }
        console.log(body)
        axios.post('/dfsTree', body)
            .then((res) => {
                if (res.data) {
                    alert("you got it right! Yay!");
                    setCheck(true);
                }
                else { alert("sory try again") }
            }).catch(console.log)
    }
    if(check){
        return <Redirect to='/home'/>;
    }
    return (
        <div className="section-background">
            <title>Algorithms: DFS</title>
            <h3>Binary tree, DFS. Enter item of 4th iteration</h3>
            <div className="space-from-top">
                <Tree
                    animated={true}
                    data={data}
                    height={400}
                    width={400}
                    svgProps={{ transform: 'rotate(90)' }}
                />
            </div>
            <input
                type="text"
                placeholder="Answer"
                // value={}
                onChange={e => setAnswer(e.target.value)}
            />
            <button
                onClick={scoreTest}>Submit</button>
        </div>
    );

}
export default DFStree;