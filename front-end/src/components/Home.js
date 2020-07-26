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
                        <Link to="/dfst" className="menu-section-top menu-hove-top"><h4 className="text-align">DFS: Depth-First Search</h4></Link>
                    </div>
                    <div className="row">
                        <Link to="/bfst" className="menu-section menu-hove"><h4 className="text-align">BFS: Breadth-First Search</h4></Link>
                    </div>
                    <div className="row">
                        <Link to="/Btree" className="menu-section menu-hove"><h4 className="text-align">Binary Search</h4></Link>
                    </div>
                    <div className="row">
                        <Link to="Msort" className="menu-section menu-hove"><h4 className="text-align">Merge Sort</h4></Link>
                    </div>
                    <div className="row">
                        <Link to="Qsort" className="menu-section menu-hove"><h4 className="text-align">Quick Sort</h4></Link>
                    </div>
                    <div className="row">
                        <Link to="/board" className="menu-section menu-hove"><h4 className="text-align">⋮☰  LEADERBOARD</h4></Link>
                    </div>
                </div>
                <div className="col-1"> </div>
            </div>
            <div className="home-footer">
                {/* need a better looking footer */}
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <h6>CONTACT</h6>
                        <p>Author: Danny Daneth Ceron Garcia.</p>
                        <p>EMAIL: <a href="mailto: dannycerongarcia@gmail.com?subject = Feedback&body = Message">dannycerongarcia@gmail.com</a></p>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="row">
                            <a href="https://github.com/dannycerongarcia"><div className="light-github"></div></a>
                            <a href="https://www.linkedin.com/in/danny-ceron-garcia-1a3553103?challengeId=AQFWhidgrZO1OAAAAXN1knuQKlD_DzHR-4047_hddn46K33CbQwNqTEyf-z_airUyJydnxzNI_rabio5wRQxhkzNz8ESRsVH7A&submissionId=bd72ed4b-c204-2416-9872-cac84400c22e"><div className="linked-in" /></a>
                        </div>
                    </div>
                    <col className="col-4"></col>
                </div>
            </div>
        </div>
    );

}
export default Home;