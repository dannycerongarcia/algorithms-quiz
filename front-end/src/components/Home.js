import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import './CSS/Home.css'

const Home = () => {

    return (
        <div className="section-background">
            <title>Algorithms: Home</title>
            <div className="row">
                <div className="col-2"> </div>
                <div className="col-9">
                    <div className="row">
                        <div className="menu-section-top menu-hove-top"><h4 className="text-align"><Link to="/dfst">DFS: Depth-First Search</Link></h4></div>
                    </div>
                    <div className="row">
                        <div className="menu-section menu-hove"><h4 className="text-align"><Link to="/bfst">BFS: Breadth-First Search</Link></h4></div>
                    </div>
                    <div className="row">
                        <div className="menu-section menu-hove"><h4 className="text-align"><Link to="/Btree">Binary Search</Link></h4></div>
                    </div>
                    <div className="row">
                        <div className="menu-section menu-hove"><h4 className="text-align"><Link to="Msort">Merge Sort</Link></h4></div>
                    </div>
                    <div className="row">
                        <div className="menu-section menu-hove"><h4 className="text-align"><Link to="Qsort">Quick Sort</Link></h4></div>
                    </div>
                    <div className="row">
                        <div className="menu-section menu-hove"><h4 className="text-align"><Link to="/board">⋮☰  LEADERBOARD</Link></h4></div>
                    </div>
                </div>
                <div className="col-1"> </div>
            </div>
            <div className="home-footer">
                {/* need a better looking footer */}
                <div className="row">
                    <div className="col-4">
                        <h6>CONTACT</h6>
                        <p>Author: Danny Daneth Ceron Garcia.</p>
                        <p>EMAIL: <a href="dannycerongarcia@gmail.com"> dannycerongarcia@gmail.com</a></p>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <a href="https://github.com/dannycerongarcia"><div className="light-github"></div></a>
                            <a href="https://www.linkedin.com/in/danny-ceron-garcia-1a3553103?challengeId=AQFWhidgrZO1OAAAAXN1knuQKlD_DzHR-4047_hddn46K33CbQwNqTEyf-z_airUyJydnxzNI_rabio5wRQxhkzNz8ESRsVH7A&submissionId=bd72ed4b-c204-2416-9872-cac84400c22e"><div className="linked-in"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Home;