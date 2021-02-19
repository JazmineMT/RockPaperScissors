import React ,  { useState } from 'react'
import Popup from 'reactjs-popup';

import styled from 'styled-components'
import paper from './images/paperM.jpg'
import {RulesButton, PopUpText ,Image} from './PopUpStyles'


const StyledPopup = styled(Popup)`
&-arrow {
  color: rgb(255, 255, 255);
}
[role='tooltip'].popup-content {
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
}

&-overlay {
  background: rgba(0, 0, 0, 0.5);
}
[data-popup='tooltip'].popup-overlay {
  background: transparent;
}
  &-content {
    border-radius:8px;
    background-color:  #f2f3f4;
    height : 50%;
    width: 30%;
  }
`;

export default function PopUp() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return (
        <div>
            <RulesButton type="button" className="button" onClick={() => setOpen(o => !o)}> RULES</RulesButton>
        <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <PopUpText>
            RULES
            <Image src={paper} alt='rules'/> 
          </PopUpText>
        </div>
      </StyledPopup>
        </div>
    )
}
