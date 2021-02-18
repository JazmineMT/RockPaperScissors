import React from 'react'
import {Rocks } from '../CardStyles'
import rock from '../images/rock.png'

export default function Rock() {
    return (
        <div>
            <Rocks>
                <img src={rock} alt='paper'/>
            </Rocks>
        </div>
    )
}
