import React from 'react'
import './Moves.css';
import filled from './images/outlined.png'
import rock from './images/rock.png'
import paper from './images/paper.png'

export default function Moves() {
    return (
        <div className='playerBox'>
            <div className='paper'>
            <img className='' src={paper} alt='paper'/>
            </div>
            <div className='scissors'>
                    <img className='' src={filled} alt='paper'/>
            </div>
            <div className='rock'>
            <img className='' src={rock} alt='paper'/>
            </div>
        </div>
    )
}
