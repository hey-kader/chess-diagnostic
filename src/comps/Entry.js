import React, {Component, useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom'
import One from './One'

function Entry () {
    
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [student, setStudent] = useState('')
    const [age, setAge] = useState(9)
    const [display, setDisplay] = useState(true)
    let history = useHistory()


    function start () {


        alert(email)
        alert(name)
        alert(student)
        alert(age)

    }

        
    return (
        <>
        <form id="form" onSubmit={(e) => {e.preventDefault()}}>
            <fieldset>
                <table>
                    <tr>
                        <td>
                            <legend><h5>Participant Information</h5></legend>
                        </td>
                    </tr>
                </table>
                <br />
                    <tr>
                        <td>
                            <label for="email" />Email:  <input type="email" id="email" value={email} onChange={((e) => { setEmail(e.target.value) })} required />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <label for="name" /> Name:  <input type="text" id="name" value={name} onChange={((e) => {setName(e.target.value) })} required />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <label for="student" /> Student: <input type="text" id="student" value={student} onChange={((e) => {setStudent(e.target.value) })} required />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                        <label for="age" /> Age:
                        <select  name="age" onChange={((e) => {setAge(e.target.value) })} >
                            <option value="9" selected>9</option>
                            <option value='10'>10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">14</option>
                            <option value="16">16+</option>
                        </select>
                        </td>
                    </tr>
                    <br />


            </fieldset>
        </form>
        <Router>
            <Switch>
                <Route  path="/one" component={One} />
                <Link to="/one" >
                    <h2 style={{textDecoration: 'none'}} onClick={(() => toggle())}>start</h2> 
                </Link>
            </Switch>
        </ Router>
        </>
    );
    function toggle () {
        var form = document.getElementById("form")
        if (display) {
            form.style.display = "none"
        }
        else {
            form.style.display = "block"
        }
        setDisplay(!display)
    }
}

export default Entry;
