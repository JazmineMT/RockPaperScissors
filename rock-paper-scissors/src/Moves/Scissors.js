import React from 'react'
import {Scissor} from '../CardStyles'
import filled from '../images/outlined.png'

export default function Scissors() {
    return (
        <div>
            <Scissor>
            <img className='' src={filled} alt='paper'/>
            </Scissor>
        </div>
    )
}
