import React, { useState, useEffect } from 'react';
import imgsort from './images/merge-sort.png'
function Qsort(params) {
    let [imageSize,setImageSize]=useState("100%")
    const imageStl = {
        width:imageSize,
        height:'',
    }
    useEffect(()=>{
        if(window.innerWidth<700){
            setImageSize("300px")
        }
    })
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
                            <div className="radio-left"><input type="radio" name="radio" /></div>
                            <div className="checkbox">n</div>
                        </label>
                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" /></div>
                                <div className="checkbox">nlogn</div>
                            </label>

                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" /></div>
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
                            <div className="radio-left"><input type="radio" name="radio" /></div>
                            <div className="checkbox">n</div>
                        </label>
                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" /></div>
                                <div className="checkbox">nlogn</div>
                            </label>

                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" /></div>
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
                            <div className="radio-left"><input type="radio" name="radio" /></div>
                            <div className="checkbox">n</div>
                        </label>
                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" /></div>
                                <div className="checkbox">nlogn</div>
                            </label>

                        </div>
                        <div className="col">
                            <label>
                                <div className="radio-left"><input type="radio" name="radio" /></div>
                                <div className="checkbox">n<sup>2</sup></div>
                            </label>

                        </div>
                    </div>

                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
}
export default Qsort;