import React ,  { useState } from 'react'
import './App.css';
import Header from './Header.js'
import Moves from './Moves.js'
import Scissors from './Moves/Scissors';
import PopUp from './PopUp.js'


const choices =  ['rock', 'paper', 'scissors']

function App() {
  const [pchoice , setpchoice] = useState(null)
  const cchoice = getRandomInt(3)
  console.log(choices[cchoice],pchoice)

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  





  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        {pchoice === null && (
             <Moves choice={setpchoice}></Moves>
        )}
        {/* {pchoice != null && (

        )} */}
      </div>
      <div className='popBox'>
        <PopUp/>
      </div>
    </div>
  );
}

export default App;
