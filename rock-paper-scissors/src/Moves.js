import React, {useState} from 'react'
import './Moves.css';
import Scissors from './Moves/Scissors'
import Paper from './Moves/Paper'
import Rock from './Moves/Rock'

// add click animation to buttons

export default function Moves(props) {



    return (
        <>
        <div className='playerBox'>
                <button  onClick={() =>{
                     props.choice('paper')
                     props.house( Math.floor(Math.random() * Math.floor(3)))
                }}>
                         <Paper />
                </button>
                <button  onClick={() =>{
                     props.choice('scissors')
                     props.house( Math.floor(Math.random() * Math.floor(3)))
                }}>
                     <Scissors />
                </button>
               
        </div>
        <div className='playerbox2'>
        <button  onClick={() =>{
                     props.choice('rock')
                     props.house( Math.floor(Math.random() * Math.floor(3)))
                }}>
                    <Rock />
            </button>
        </div>
        </>
    )
}
