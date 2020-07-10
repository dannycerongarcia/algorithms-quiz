import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import imgsort from './images/merge-sort.png';
import Axios from 'axios';
function Qsort(params) {
    let [imageSize,setImageSize] = useState("100%");
    let [choiceOne,setChoiceOne] = useState(0);
    let [choiceTwo,setChoiceTwo] = useState(0);
    let [choiceThree,setChoiceThree] = useState(0);
    let [check,setCheck] = useState(false);

    const imageStl = {
        width:imageSize,
        height:'',
    }
    useEffect(()=>{
        if(window.innerWidth<700){
            setImageSize("300px")
        }
    });
    const serverrequest = ()=>  {
        const body = {
            userinfo:document.cookie,
            qone:choiceOne,
            qtwo:choiceTwo,
            qthree:choiceThree,
        }
        Axios.post('/qSort',body)
        .then((res)=>{
            if(res.data){
                alert("correct");
                setCheck(true);
            }
        })
    }
    if(check){
        return <Redirect to="/home"/>;
    }
    return (
        <div className="section-background">
            {console.log(window.innerWidth)}
            <title>Algorithms: Quick Sort</title>
            <h2>Quick sort</h2>
            <div className="row">
                <div className="col">
                    {/* create mersort tree */}
                    <br/>
                    <br/>
                    
                    <img src={imgsort} style={imageStl}/>
                </div>
                <div className="question-box col">
                    <div className="question-text">
                        What is the worst case complexity of Quick Sort?
                    </div>
                    <div className="row">
                        <div className="col"><label>
                            <div className="radio-left"><input type="radio" name="radio" onChange={e => setChoiceOne(1)} /></div>
                            <div className="checkbox">n</div>
                        </label>
                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" onChange={e => setChoiceOne(2)}/></div>
                                <div className="checkbox">nlogn</div>
                            </label>

                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" onChange={e => setChoiceOne(3)}/></div>
                                <div className="checkbox">n<sup>2</sup></div>
                            </label>

                        </div>
                    </div>
                    <br />
                    <br />
                    <br />

                    <div className="question-text">
                        What is the Average case complexity of Quick Sort?
                </div>
                    <div className="row">
                        <div className="col"><label>
                            <div className="radio-left"><input type="radio" name="radio" onChange={e => setChoiceTwo(1)}/></div>
                            <div className="checkbox">n</div>
                        </label>
                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" onChange={e => setChoiceTwo(2)}/></div>
                                <div className="checkbox">nlogn</div>
                            </label>

                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" onChange={e => setChoiceThree(3)}/></div>
                                <div className="checkbox">n<sup>2</sup></div>
                            </label>

                        </div>
                    </div>
                    <br />
                    <br />
                    <br />

                    <div className="question-text">
                        What is the best O complexity of Quick Sort?
                </div>
                    <div className="row">
                        <div className="col"><label>
                            <div className="radio-left"><input type="radio" name="radio" onChange={e => setChoiceThree(1)}/></div>
                            <div className="checkbox">n</div>
                        </label>
                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" onChange={e => setChoiceThree(2)}/></div>
                                <div className="checkbox">nlogn</div>
                            </label>

                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" onChange={e => setChoiceThree(3)}/></div>
                                <div className="checkbox">n<sup>2</sup></div>
                            </label>

                        </div>
                    </div>
                    <div className="">
                    <button className="pretty-buttom" on onClick={serverrequest}> Submit </button>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
}
export default Qsort;