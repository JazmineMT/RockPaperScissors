import React ,  { useState } from 'react'
import Popup from 'reactjs-popup';

import styled from 'styled-components'
import paper from './images/paperM.jpg'
import {PlayAgainButton, PopUpText2 ,Image, Container} from './PopUpStyles'


const StyledPopup = styled(Popup)`
&-arrow {
  color: rgb(255, 255, 255);
}
[role='tooltip'].popup-content {
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
}

&-overlay {
  background: transparent;
}
[data-popup='tooltip'].popup-overlay {
  background: transparent;
}
  &-content {
      display: flex;
    border-radius:8px;
    background-color:  transparent;
    height : 50%;
    width: 30%;
  }
`;

export default function NewGamePopup(props) {
    console.log(props)
    const [open, setOpen] = useState(true);
    const closeModal = () => setOpen(false);
    return (
        <div>
    
        <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <Container className="modal">
          <PopUpText2>
                <h1> You {props.decision}</h1>
                <PlayAgainButton onClick={() => {props.player(null)}}> PLAY AGAIN </PlayAgainButton>
          </PopUpText2>
        </Container>
      </StyledPopup>
        </div>
    )
}