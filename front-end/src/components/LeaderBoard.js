import React, { useState, useEffect } from 'react';
import Redirect from 'react-router-dom';
import axios from 'axios';
import './CSS/leader-board.css';
import Axios from 'axios';
// import Axios form 'axios';

const LeaderBoard = () => {
    
    let [tableItem, setTableItems] = useState([]);
    const listRequest = () => {
        Axios.get('/list')
        .then((res)=>{
            const users = res.data;
            var list = users.map((info) =>

            <tr>
                <td>{info.username} </td>
                {/* <td>Maria Anders</td> */}
                <td>{info.score} </td>
            </tr>
        )
        setTableItems(list);
        })
    }

    useEffect(() => {
        listRequest()
    }, [])

    return (<div className="section-background">
        <div className="board-box">
        <table >
            <thead>
            <tr>
                <th>Username</th>
                {/* <th>Contact</th> */}
                <th>Score</th>
            </tr>
            </thead>
            <tbody>
            {tableItem}
            </tbody>
            
        </table>
        </div>
    </div>)
}
export default LeaderBoard;