import React from 'react'
import {useState} from 'react'
import './Header.css';

export default function Header(props) {
    
    return (
        <div className='heading'>
          <div className='title'>
              <h1 className='Title'> Rock </h1>
              <h1 className='Title'> Paper </h1>
              <h1 className='Title'> Scissors</h1>
          </div>
          <div className='scoreBox'>
            <h2 className='scoretitle'> score </h2>
            <h1 className='userScore'> {props.score}</h1>
            <div className='score'>

            </div>
          </div>
        </div>
    )
}
