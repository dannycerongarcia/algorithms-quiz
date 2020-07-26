import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/binarryTree.css'
import { Redirect } from 'react-router-dom';
const Btree = () => {
    let [arr,setArr] = useState([]);
    let [bArray,setArray] = useState([]);
    let [iteration,setIteration] = useState();
    let [check,setCheck] = useState(false);
    let [key,setKey] = useState(-1);
    const loadArray = ()=>{
        var someArray =[];
        // var characters = '0123456789';
        var characterLength = 99;
        for (var i=0; i<13;i++){
            while(true){
                let item = Math.floor(Math.random()*characterLength);
                if(!someArray.includes(item)){
                    someArray.push(item);
                    break;
                }
            }
        }
        setKey(someArray[Math.floor(Math.random()*someArray.length)])
        // dont know how this works
        someArray = someArray.sort((a,b)=> a - b);
        setArr(someArray);
        // storing an array of divs with digits data for UI
        const listItems = someArray.map((itm)=>
        <div className="array-item-box">
            {itm}
        </div>
        );
        setArray(listItems)
    }

    const sendReq = ()=>{
        const body = {
            userinfo:document.cookie,
            key: key,
            array:arr,
            answer:iteration
        }
        axios.post('/bSearch',body)
        .then((res)=>{
            if(res.data){
                alert("Corret");
                setCheck(true);
            }
        })
    }
    useEffect(()=>{
        loadArray()
       
    },[])
    if(check){
        return <Redirect to="/home"/>;
    }
    return (
        <div className="bs-background-scroll">
            <title>Algorithms: Bimary Search</title>
        How many checks does Binary Search have to make before finding number <h4>{key}</h4>on the array
            
                <div className=" row array-box">
                    {bArray}
                </div>
            <div className="row">
                <div className="col">
                    
                </div>
                <div className="col">
                    Assume:
                    <br/>
                    size n = {arr.length}
                    <br/>
                    mid = (low + high)/2
                    <br/>
                    <input
                    type="number"
                    placeholder="number of checks"
                    value={iteration}
                    onChange={e => setIteration(e.target.value)}
                    />
                    <br/>
                    <button onClick={sendReq}>Submit</button>
                    
                </div>
                <div className="col"></div>
            </div>
        </div>
    );

}
export default Btree;