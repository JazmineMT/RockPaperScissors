import React from 'react'
import './Moves.css';
import Scissors from './Moves/Scissors'
import Paper from './Moves/Paper'
import Rock from './Moves/Rock'

export default function Moves() {
    return (
        <>
        <div className='playerBox'>
                <Paper/>
                <Scissors/>
        </div>
        <div className='playerbox2'>
            <Rock/>
        </div>
        </>
    )
}
