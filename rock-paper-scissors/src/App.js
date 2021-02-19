import React ,  { PureComponent, useState } from 'react'
import './App.css';
import Header from './Header.js'
import Moves from './Moves.js'
import Outcome from './Outcome'
import PopUp from './PopUp.js'

const choices =  ['rock', 'paper', 'scissors']


function App() {
  const [pchoice , setpchoice] = useState(null)
  const [score , setscore] = useState(0)
  const [decision , setdecision] = useState('Lose')
  const [house , setHouse ] = useState(null)
  console.log(decision )






  return (
    <div className="App">
      <div className='container'>
        <Header score ={score}></Header>
        {pchoice === null && (
             <Moves  house = {setHouse} choice={setpchoice}></Moves>
        )}
        
        {pchoice != null && (
           <Outcome num = {score} score = {setscore} decision = {setdecision} player={pchoice} computer={house}/>
        )}
      </div>
      <div className='popBox'>
        <PopUp/>
      </div>
    </div>
  );
}

export default App;
