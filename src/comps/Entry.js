import React, {Component, useState} from 'react'

function Entry () {
    
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [student, setStudent] = useState('')
    const [age, setAge] = useState(9)


    function start () {
        alert(email)
        alert(name)
        alert(student)
        alert(age)


    }

        
    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
            <fieldset>
                <legend><h5>Participant Information</h5></legend>
                <br />
                Email:  <input type="email" id="email" value={email} onChange={((e) => { setEmail(e.target.value) })} required />
                <br />
                Name:  <input type="text" id="name" value={name} onChange={((e) => {setName(e.target.value) })} required />
                <br />
                Student: <input type="text" id="student" value={student} onChange={((e) => {setStudent(e.target.value) })} required />
                <br />
                Age:

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

                <br />
                <input onClick={start} type="submit" value="submit" required />
                <br />
            </fieldset>
        </form>
    );
}

export default Entry;
