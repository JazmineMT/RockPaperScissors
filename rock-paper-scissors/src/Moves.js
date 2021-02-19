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
                <button  onClick={() => props.choice('paper')}>
                         <Paper />
                </button>
                <button onClick={() => props.choice('scissors')} >
                     <Scissors />
                </button>
               
        </div>
        <div className='playerbox2'>
            <button onClick={() => props.choice('rock')}>
                    <Rock />
            </button>
        </div>
        </>
    )
}
