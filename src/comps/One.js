import React, {Component, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Entry from './Entry'
import {axios} from "axios"

import Chessboard from "chessboardjsx"

function One (history) {
    let hist = useHistory(history)
    let [moves, setMoves] = useState("") 
    useEffect (() => {
        setMoves(read_board_states())
    },[])

    let datalist = []
    const [count, increment] = useState(0)

    async function read_board_states () {

        const axios = require('axios')
        let res = await axios.get("http://localhost:3000/fen/fen.txt")
        let data = res.data
        data = data.split('\n')
        datalist = data.splice(0,3)
        console.log(datalist)
    }

    return (
        <div className="wrapper">
            {render_board(datalist[0])}
            <h2 id="back" onClick={(() => {hist.goBack('')})} >back</h2> 
        </div>
    );
}

function render_board (pos) {
    return (
        <div id="chess">
            <Chessboard
                width={500}
                position={pos}
            />
        </div>
    )
}

export default One;
