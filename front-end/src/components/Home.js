import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import './CSS/Home.css'
const cookieParser = require('cookie-parser');
const Home = () => {
    
    return (
        <div className="background">
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
            </div>
            <div className="col-1"> </div>
            </div> 
        </div>
    );

}
export default Home;