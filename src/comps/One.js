import React, {Component, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Entry from './Entry'
import {axios} from "axios"

function One (history) {
    let hist = useHistory(history)
    let [moves, setMoves] = useState("") 
    useEffect (() => {
        setMoves(read_board_states())
    },[])
    //const boards = moves.split('\n')

    async function read_board_states () {

        const axios = require('axios')
        let res = await axios.get("http://localhost:3000/fen/fen.txt")
        let data = res.data
        data = data.split('\n')
        data = data.splice(0,3)
        console.log(data)
        }

    return (
        <div className="wrapper">
            <h2 id="back" onClick={(() => {hist.goBack('')})} >back</h2> 
        </div>
    );
}

export default One;
