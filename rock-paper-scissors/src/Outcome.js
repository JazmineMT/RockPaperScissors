import React, {useEffect}from 'react'
import Scissors from './Moves/Scissors'
import Paper from './Moves/Paper'
import Rock from './Moves/Rock'
import './Outcome.css';

const choices =  ['rock', 'paper', 'scissors']

export default function Outcome(props) {
    var score = props.num
    const cchoice = choices[props.computer]
    
    // console.log(props.num)
    useEffect(() => {
        checkScore(props.player, cchoice)
    },[])

    function checkScore(pchoice,houseChoice){
        if(pchoice != null){
          if(pchoice === 'paper' && houseChoice === 'rock'){
            props.score(props.num + 1)
            props.decision('Win')
      
          }
         else if(pchoice === 'rock' && houseChoice === 'scissors'){
            console.log(' r => s')
            props.score(props.num + 1)
            props.decision('Win')
      
          }
          else if(pchoice === 'scissors' && houseChoice === 'paper'){
            console.log(' s => p')
            props.score(props.num + 1)
            props.decision('Win')
      
          }
          else if(pchoice === houseChoice){
              console.log('tie')
            props.decision('Tie')
          }
          else{
              props.decision('Lose')
          }
        }
      }

      
    return (
        <>
        <div className='titleBox'>
                <h1> You Picked</h1>
                <h1> House Picked</h1>
        </div>
        <div className='outcomeBox'>
            <div className='player'>
            {props.player === 'paper' && (
                <Paper/>
            )}
            {props.player === 'rock' && (
                <Rock/>
            )}
            {props.player === 'scissors' && (
                <Scissors/>
            )} 
            </div>
            <div className='house'>
            {cchoice === 'paper' && (
                <Paper/>
            )}
            {cchoice === 'rock' && (
                <Rock/>
            )}
            {cchoice === 'scissors' && (
                <Scissors/>
            )}
            </div>            
        </div>
        </>
    )
}
