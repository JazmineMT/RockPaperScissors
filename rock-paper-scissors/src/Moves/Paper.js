import React from 'react'
import {Papers} from '../CardStyles'
import paper from '../images/paper.png'

export default function Paper() {
    return (
        <div>
            <Papers>
            <img className='' src={paper} alt='paper'/>
            </Papers>
        </div>
    )
}
