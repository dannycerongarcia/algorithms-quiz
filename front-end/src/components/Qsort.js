import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import imgsort from './images/quick-sort.png';
import Axios from 'axios';
function Qsort(params) {
    let [imageSize,setImageSize] = useState("100%");
    let [choiceOne,setChoiceOne] = useState(0);
    let [choiceTwo,setChoiceTwo] = useState(0);
    let [choiceThree,setChoiceThree] = useState(0);
    
    let [qOneCheck,setqOneCheck] = useState(false);
    let [qTwoCheck,setQtwoCheck] = useState(false);
    let [qThreeCheck,setQThreeCheck] = useState(false);

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
            console.log(res.data)
            if(res.data.answer1){
                document.getElementById("radioQuestion1").cheked = false;
                document.getElementById("radioQuestion1.1").cheked = false;
                document.getElementById("radioQuestion1.2").cheked = false;

                document.getElementById("radioQuestion1").disabled = true;
                document.getElementById("radioQuestion1.1").disabled = true;
                document.getElementById("radioQuestion1.2").disabled = true;
                setqOneCheck(true);
               
                setChoiceOne(-1);
               
            }
            if(res.data.answer2){
                document.getElementById("radioQuestion2").cheked = false;
                document.getElementById("radioQuestion2.1").cheked = false;
                document.getElementById("radioQuestion2.2").cheked = false;

                document.getElementById("radioQuestion2").disabled = true;
                document.getElementById("radioQuestion2.1").disabled = true;
                document.getElementById("radioQuestion2.2").disabled = true;
                setQtwoCheck(true);
                
               setChoiceTwo(-1);
             }
             if(res.data.answer3){
                document.getElementById("radioQuestion3").cheked = false;
                document.getElementById("radioQuestion3.1").cheked = false;
                document.getElementById("radioQuestion3.2").cheked = false;

                document.getElementById("radioQuestion3").disabled = true;
                document.getElementById("radioQuestion3.1").disabled = true;
                document.getElementById("radioQuestion3.2").disabled = true;
                setQThreeCheck(true);
                
                setChoiceThree(-1);
             }
             console.log(qOneCheck, qTwoCheck, qThreeCheck)
        })
    }
    if(qOneCheck && qTwoCheck && qThreeCheck){
        alert("Done!")
        return <Redirect to="/home"/>;
    }
    return (
        <div className="section-background">
            {console.log(window.innerWidth)}
            <title>Algorithms: Quick Sort</title>
            <h2>Quick Sort</h2>
            <div className="row">
                <div className="col">
                    {/* create mersort tree */}
                    <br />
                    <br />

                    <img src={imgsort} style={imageStl} />
                </div>
                <div className="question-box col">
                    <div className="question-text">
                        What is the worst case time complexity of Quick Sort?
                    </div>
                    <div className="row">
                        <div className="col"><label>
                            <div className="radio-left"><input type="radio" name="radio" id="radioQuestion1" onChange={e => setChoiceOne(1)} /></div>
                            <div className="checkbox">n</div>
                        </label>
                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" id="radioQuestion1.1" onChange={e => setChoiceOne(2)} /></div>
                                <div className="checkbox">nlogn</div>
                            </label>

                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" id="radioQuestion1.2" onChange={e => setChoiceOne(3)} /></div>
                                <div className="checkbox">n<sup>2</sup></div>
                            </label>

                        </div>
                    </div>
                    <br />
                    <br />
                    <br />

                    <div className="question-text">
                        What is the Average case time complexity of Quick Sort?
                    </div>
                    <div className="row">
                        <div className="col"><label>
                            <div className="radio-left"><input type="radio" name="radio2" id="radioQuestion2" onChange={e => setChoiceTwo(1)} /></div>
                            <div className="checkbox">n</div>
                        </label>
                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio2" id="radioQuestion2.1" onChange={e => setChoiceTwo(2)} /></div>
                                <div className="checkbox">nlogn</div>
                            </label>

                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio2" id="radioQuestion2.2" onChange={e => setChoiceTwo(3)} /></div>
                                <div className="checkbox">n<sup>2</sup></div>
                            </label>

                        </div>
                    </div>
                    <br />
                    <br />
                    <br />

                    <div className="question-text">
                        What is the best case time complexity of Quick Sort?
                    </div>
                    <div className="row">
                        <div className="col"><label>
                            <div className="radio-left"><input type="radio" name="radio3" id="radioQuestion3" onChange={e => setChoiceThree(1)} /></div>
                            <div className="checkbox">n</div>
                        </label>
                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio3" id="radioQuestion3.1" onChange={e => setChoiceThree(2)} /></div>
                                <div className="checkbox">nlogn</div>
                            </label>

                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio3" id="radioQuestion3.2" onChange={e => setChoiceThree(3)} /></div>
                                <div className="checkbox">n<sup>2</sup></div>
                            </label>

                        </div>
                    </div>
                    <button className="pretty-button" onClick={serverrequest}>Submit</button>
                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
}
export default Qsort;