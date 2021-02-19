import React from 'react'
import {Papers} from '../CardStyles'
import paper from '../images/paper.png'

export default function Paper() {
    return (
        <div>
            <Papers>
                <div>
                     <img className='' src={paper} alt='paper'/>
                </div>
            </Papers>
        </div>
    )
}
