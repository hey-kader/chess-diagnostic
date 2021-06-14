import react, {Component, useState} from 'react'
import Entry from './comps/Entry'
import './App.css';

function App() {
  const [start, setStart] = useState(false)
  return (
    <div className="App">
        <h1>Chess Diagnostic</h1>
        <Entry />
    </div>
  );
}


export default App;


