import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import './CSS/BFStree.css'
const cookieParser = require('cookie-parser');
function BFStree() {
    let [myAnswer, setAnswer] = useState('');
    let [myArray, setArray] = useState(['A', 'B', 'C', 'D', 'E', 'F']);
    let [check, setCheck] = useState(false);
    let [visitedNode, setVisitedNode] = useState(-1)

    const loadArray = () => {
        var result = [];
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        setVisitedNode(Math.floor(Math.random() * 7))
        for (var i = 0; i < 7; i++) {
            while (true) {
                let x = characters.charAt(Math.floor(Math.random() * charactersLength));
                // console.log(x);
                if (!result.includes(x) === true) {
                    result.push(x);
                    break;
                }
            }
        }
        setArray(result.sort())
    }

    useEffect(() => {
        loadArray()

    }, []);
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
                            name: myArray[6],
                        },
                        {
                            name: myArray[4],
                        }
                    ]
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
    // might need to set this inside server to avoid cheating
    const scoreTest = (value) => {
        let dictionary = {};
        dictionary['root'] = myArray[3]
        dictionary[myArray[3]] = [myArray[1], myArray[5],]
        dictionary[myArray[1]] = [myArray[0], myArray[2],]
        dictionary[myArray[5]] = [myArray[4], myArray[6],]
        dictionary[myArray[0]] = []
        dictionary[myArray[2]] = []
        dictionary[myArray[4]] = []
        dictionary[myArray[6]] = []
        const body = {
            userinfo: document.cookie,
            answer: myAnswer,
            score: 0,
            visited: visitedNode,
            array: dictionary,
        }
        axios.post('/bfsTree', body)
            .then((res) => {
                if (res.data) {
                    alert("you got it right! Yay!");
                    setCheck(true);
                }
                else { alert("sorry try again") }
            }).catch(console.log)
    }
    if (check) {
        return <Redirect to='/home' />;
    }
    return (
        <div className="section-background">
            <title>Algorithms: BFS</title>
            <h3>Binary tree, BFS.</h3>
            <div className="space-from-top">
                <Tree
                    animated={true}
                    data={data}
                    height={400}
                    width={400}
                    svgProps={{ transform: 'rotate(90)' }}
                />
            </div>
            <div>Enter the node visited on iteration #{visitedNode + 1}</div>
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
export default BFStree;